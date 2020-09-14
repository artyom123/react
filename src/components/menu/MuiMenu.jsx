import React from 'react';
import PropTypes from 'prop-types';
import {
    Menu,
    IconButton,
} from '@material-ui/core';

import CloseIcon from '../icons/CloseIcon';

import './MuiMenu.sass';

const propTypes = {
    actionClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.node,
    ]),
};

const defaultProps = {
    anchorEl: null,
};

const MuiMenu = (props) => {
    const {
        actionClose,
        anchorEl,
        children,
        open,
    } = props;

    return (
        <Menu
            id="simple-menu"
            keepMounted
            open={open}
            onClose={actionClose}
            anchorEl={anchorEl}
        >
            <IconButton
                onClick={actionClose}
                className="closeIcon-menu"
                disableFocusRipple
                disableRipple
            >
                <CloseIcon className="closeIcon-menu-small" />
            </IconButton>
            { children }
        </Menu>
    );
};

MuiMenu.propTypes = propTypes;
MuiMenu.defaultProps = defaultProps;
MuiMenu.displayName = 'MuiMenu';

export default React.memo(MuiMenu);
