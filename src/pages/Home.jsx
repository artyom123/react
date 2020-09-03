/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Main from '../components/main/Main';
import MovieContext from '../contexts/MovieContext';

import { FAKE_DATA } from '../constants/constantsData';

const propTypes = {
    handlerClickAdd: PropTypes.func.isRequired,
};

const Home = (props) => {
    const { handlerClickAdd } = props;
    const [movies, setMovies] = useState([]);
    const [movieId, setMovieId] = useState(null);

    useEffect(() => {
        setMovies(FAKE_DATA);
    }, []);

    return (
        <MovieContext.Provider value={movieId}>
            <Header handlerClickAdd={handlerClickAdd} />
            <Main movies={movies} setMovieId={setMovieId} {...props} />
            <Footer />
        </MovieContext.Provider>
    );
};

Home.propTypes = propTypes;
Home.displayName = 'Home';

export default React.memo(Home);
