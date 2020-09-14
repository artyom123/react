import React from 'react';
import {
    Grid,
    Container,
} from '@material-ui/core';

import Logo from '../logo/Logo';

import './Footer.sass';

const Footer = () => (
    <Container
        className="footer"
    >
        <Grid>
            <Logo />
        </Grid>
    </Container>
);

export default Footer;
