import React, { useRef } from 'react';
import {
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { head } from 'lodash';

import Logo from '../../logo/Logo';
import SearchIcon from '../../icons/SearchIcon';
import useInDeveloping from '../../../hooks/useInDeveloping';

import { FAKE_DATA } from '../../../constants/constantsData';

import './MovieHeader.sass';

const propTypes = {
    movieId: PropTypes.string.isRequired,
};

const MovieHeader = ({ movieId }) => {
    const ref = useRef();
    const movie = head(FAKE_DATA.filter((item) => item.movie_id === movieId));

    useInDeveloping(ref);

    return (
        movie && (
            <>
                <Grid className="movieheader-grid">
                    <Logo />
                    <IconButton ref={ref}>
                        <SearchIcon className="movieheader-search" />
                    </IconButton>
                </Grid>
                <Grid className="movieheader-description">
                    <img src={movie.poster} alt={movie.name} />
                    <Grid className="movieheader-description-grid">
                        <Grid className="movieheader-description-grid-header">
                            <Typography
                                variant="h3"
                            >
                                { movie.name }
                            </Typography>
                            <Grid className="movieheader-description-grid-header-vote_average">
                                <Typography
                                    // eslint-disable-next-line max-len
                                    className="movieheader-description-grid-header-vote_average-text"
                                    variant="body2"
                                    component="p"
                                >
                                    { movie.vote_average }
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography
                            className="movieheader-description-grid-reward"
                            variant="body2"
                            component="p"
                        >
                            { movie.reward }
                        </Typography>

                        <Grid className="movieheader-description-grid-time">
                            <Typography
                                className="movieheader-description-grid-time-year"
                                variant="body2"
                                component="p"
                            >
                                { movie.year }
                            </Typography>
                            <Typography
                                className="movieheader-description-grid-time-runtime"
                                variant="body2"
                                component="p"
                            >
                                { movie.runtime }
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography
                                variant="body2"
                                component="p"
                            >
                                { movie.overview }
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        )
    );
};

MovieHeader.propTypes = propTypes;
MovieHeader.displayName = 'MovieHeader';

export default React.memo(MovieHeader);
