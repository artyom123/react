import React, { useCallback } from 'react';
import {
    Container,
    Typography,
    Grid,
    InputBase,
} from '@material-ui/core';

import MuiButtons from '../buttons/MuiButtons';

import { BUTTONS_TYPE } from '../../constants/constantsButtons';

import './SearchBar.sass';

const SearchBar = () => {
    const handleClick = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('Search');
    }, []);

    return (
        <Container className="searchBar-container">
            <Typography
                className="searchBar-title"
                variant="h1"
                component="h1"
            >
                Find your movie
            </Typography>

            <Grid className="searchBar-grid">
                <InputBase
                    className="searchBar-input"
                    placeholder="What do you watch?"
                />
                <MuiButtons
                    type={BUTTONS_TYPE.search}
                    onClick={handleClick}
                >
                    Search
                </MuiButtons>
            </Grid>
        </Container>
    );
};

export default SearchBar;
