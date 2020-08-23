import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]).isRequired,
};

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        if (this.state.hasError) {
            return <h1>Getting error</h1>;
        }

        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children;
    }
}

ErrorBoundary.propTypes = propTypes;
ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
