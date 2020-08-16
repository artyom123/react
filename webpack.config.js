const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MODE = process.env.NODE_ENV;
const PROD = MODE === 'production';
const DEV = !PROD;
const PORT = 4000;

const src = `${__dirname}/src`;
const dist = `${__dirname}/dist`;
const indexHtml = '/index.html';
const indexJS = 'index.js';

module.exports = {
    mode: MODE,
    entry: [
        `${src}/${indexJS}x`,
    ],
    output: {
        filename: DEV ? indexJS : 'index.[hash].js',
        path: dist,
    },
    devtool: DEV ? 'source-map' : 'none',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: PROD },
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                loaders: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // eslint-disable-next-line global-require
                                require('autoprefixer')({
                                    overrideBrowserslist: ['last 2 versions'],
                                }),
                            ],
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: `${src}${indexHtml}`,
            filename: `.${indexHtml}`,
        }),
        new MiniCssExtractPlugin({
            filename: DEV ? '[name].css' : '[name].[hash].css',
            chunkFilename: DEV ? '[id].css' : '[id].[hash].css',
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                sourceMap: true,
                uglifyOptions: {
                    compress: {},
                    mangle: true,
                    output: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    devServer: {
        port: PORT || 3000,
    },
};
