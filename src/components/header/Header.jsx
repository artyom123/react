import React from 'react';
import {
    Container,
    Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import Logo from '../logo/Logo';
import SearchBar from '../searchBar/SearchBar';

import MuiButtons from '../buttons/MuiButtons';

import './Header.sass';

const propTypes = {
    handlerClickAdd: PropTypes.func.isRequired,
};

const Header = ({ handlerClickAdd }) => (
    <Container className="header">
        <Grid className="header-grid">
            <Logo />
            <MuiButtons name="+ ADD MOVIE" action={handlerClickAdd} />
        </Grid>
        <SearchBar />
    </Container>
);

Header.propTypes = propTypes;
Header.displayName = 'Header';

export default React.memo(Header);
