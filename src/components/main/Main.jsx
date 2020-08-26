/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
} from '@material-ui/core';

import Movie from '../movie/Movie';

import './Main.sass';

const propTypes = {
    movies: PropTypes.oneOfType([
        PropTypes.array,
    ]),
};

const defaultProps = {
    movies: [],
};

const Main = (props) => {
    const { movies } = props;

    return (
        <Container className="main">
            {
                movies.map((movie) => (
                    <Movie movie={movie} key={movie.movie_id} {...props} />
                ))
            }
        </Container>
    );
};

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
Main.displayName = 'Main';

export default React.memo(Main);
