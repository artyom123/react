import React, { useContext, useMemo } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';

import DefaultHeader from './defaultHeader/DefaultHeader';
import MovieHeader from './movieHeader/MovieHeader';
import MovieContext from '../../contexts/MovieContext';

import './Header.sass';

const propTypes = {
    handlerClickAdd: PropTypes.func.isRequired,
};

const Header = ({ handlerClickAdd }) => {
    const movieId = useContext(MovieContext);

    const headerSection = useMemo(() => {
        if (movieId) {
            return (<MovieHeader movieId={movieId} />);
        }

        return (<DefaultHeader handlerClickAdd={handlerClickAdd} />);
    }, [movieId, handlerClickAdd]);

    return (
        <Container className="header">
            { headerSection }
        </Container>
    );
};

Header.propTypes = propTypes;
Header.displayName = 'Header';

export default Header;
