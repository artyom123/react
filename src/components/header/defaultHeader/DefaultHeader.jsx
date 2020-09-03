import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

import Logo from '../../logo/Logo';
import SearchBar from '../../searchBar/SearchBar';
import MuiButtons from '../../buttons/MuiButtons';

import './DefaultHeader.sass';

const propTypes = {
    handlerClickAdd: PropTypes.func.isRequired,
};

const DefaultHeader = ({ handlerClickAdd }) => (
    <>
        <Grid className="defaultheader-grid">
            <Logo />
            <MuiButtons name="+ ADD MOVIE" action={handlerClickAdd} />
        </Grid>
        <SearchBar />
    </>
);

DefaultHeader.propTypes = propTypes;
DefaultHeader.displayName = 'DefaultHeader';

export default React.memo(DefaultHeader);
