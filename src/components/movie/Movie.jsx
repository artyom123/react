import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardActions,
    IconButton,
    CardContent,
    Grid,
    Typography,
    MenuItem,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

import MuiMenu from '../menu/MuiMenu';

import './Movie.sass';

const propTypes = {
    handlerClickEdit: PropTypes.func.isRequired,
    handlerClickDelete: PropTypes.func.isRequired,
    setMovieId: PropTypes.func.isRequired,
    movie: PropTypes.oneOfType([
        PropTypes.object,
    ]),
};

const defaultProps = {
    movie: {},
};

const Movie = ({
    movie,
    handlerClickEdit,
    handlerClickDelete,
    setMovieId,
}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
        setOpenMenu(true);
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setOpenMenu(false);
        setAnchorEl(null);
    }, []);

    return (
        <Card
            key={movie.movie_id}
            className="movie"
            onClick={() => { setMovieId(movie.movie_id); }}
        >
            <CardActions className="movie-action">
                <IconButton
                    onClick={handleClick}
                    aria-label="settings"
                >
                    <MoreVert />
                </IconButton>
                <MuiMenu
                    actionClose={handleClose}
                    anchorEl={anchorEl}
                    open={openMenu}
                >
                    <MenuItem onClick={handlerClickEdit}>Edit</MenuItem>
                    <MenuItem onClick={handlerClickDelete}>Delete</MenuItem>
                </MuiMenu>
            </CardActions>
            <img
                src={movie.poster}
                alt={movie.name}
            />
            <CardContent>
                <Grid className="movie-grid">
                    <Typography className="movie-grid-name">
                        { movie.name }
                    </Typography>
                    <Typography className="movie-grid-year">
                        { movie.year }
                    </Typography>
                </Grid>
                <Typography className="movie-grid-genre">
                    { movie.genre.join(', ') }
                </Typography>
            </CardContent>
        </Card>
    );
};

Movie.propTypes = propTypes;
Movie.defaultProps = defaultProps;
Movie.displayName = 'Movie';

export default Movie;
