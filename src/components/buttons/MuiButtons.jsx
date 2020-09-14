import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Button,
} from '@material-ui/core';

import { BUTTONS, BUTTONS_TYPE } from '../../constants/constantsButtons';

import './MuiButtons.sass';

const propTypes = {
    action: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
};

const defaultProps = {
    action: () => ({}),
    name: '',
    type: '',
};

const MuiButtons = ({ type, action, name }) => {
    switch (type) {
    case BUTTONS_TYPE.delete:
        return (
            <Grid>
                <Button color="primary" onClick={action}>{BUTTONS.confirm}</Button>
            </Grid>
        );
    case BUTTONS_TYPE.edit:
        return (
            <Grid className="buttons">
                <Button color="secondary" onClick={action}>{BUTTONS.reset}</Button>
                <Button color="primary">{BUTTONS.save}</Button>
            </Grid>
        );
    case BUTTONS_TYPE.search:
        return (
            <Grid>
                <Button color="primary" onClick={action}>{BUTTONS.search}</Button>
            </Grid>
        );
    case BUTTONS_TYPE.reset:
        return (
            <Grid className="buttons">
                <Button color="secondary" onClick={action}>{BUTTONS.reset}</Button>
                <Button color="primary">{BUTTONS.submit}</Button>
            </Grid>
        );
    default:
        return (
            <Grid className="button">
                <Button onClick={action}>{name}</Button>
            </Grid>
        );
    }
};

MuiButtons.propTypes = propTypes;
MuiButtons.defaultProps = defaultProps;
MuiButtons.displayName = 'MuiButtons';

export default React.memo(MuiButtons);
