import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Card,
    CardActions,
    IconButton,
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

import './Main.sass';

const propTypes = {
    movies: PropTypes.oneOfType([
        PropTypes.object,
    ]),
};

const defaultProps = {
    movies: [],
};

const Main = ({ movies }) => (
    <Container className="main">
        {
            movies.map((movie) => (
                <Card key={movie.movie_id} className="movie">
                    <CardActions className="movie-action" disableSpacing>
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    </CardActions>
                    <img
                        src={movie.poster}
                        alt={movie.name}
                    />
                    <CardContent>
                        <Grid className="movie-grid">
                            <Typography>
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
            ))
        }
    </Container>
);

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
Main.displayName = 'Main';

export default React.memo(Main);
