import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';

import { FAKE_DATA } from '../constants/constantsData';

const propTypes = {
    handlerClickAdd: PropTypes.func.isRequired,
};

const Home = ({ handlerClickAdd }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(FAKE_DATA);
    }, []);

    return (
        <>
            <Header handlerClickAdd={handlerClickAdd} />
            <Main movies={movies} />
            <Footer />
        </>
    );
};

Home.propTypes = propTypes;
Home.displayName = 'Home';

export default React.memo(Home);
