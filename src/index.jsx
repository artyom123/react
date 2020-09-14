import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';

import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

import THEME from './constants/Theme';

import App from './App';

ReactDOM.render(
    <MuiThemeProvider theme={THEME}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
