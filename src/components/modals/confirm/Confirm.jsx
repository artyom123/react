import React, {
    useMemo,
    useState,
    useCallback,
    useEffect,
} from 'react';
import PropTypes from 'prop-types';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Grid,
    IconButton,
} from '@material-ui/core';

import CloseIcon from '../../icons/CloseIcon';
import MuiButtons from '../../buttons/MuiButtons';

import './Confirm.sass';

const propTypes = {
    options: PropTypes.shape({
        type: PropTypes.string,
        title: PropTypes.string,
        fields: PropTypes.array,
        message: PropTypes.string,
    }),
};

const defaultProps = {
    options: {
        type: '',
        title: '',
        fields: [],
        message: '',
    },
};

const Confirm = ({ options }) => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        options.type && setOpen(true);
    }, [options]);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const textFields = useMemo(() => (
        options.fields && options.fields.map((field) => (
            <TextField
                label={field.name}
                key={Object.keys(field)[1]}
                placeholder={Object.values(field)[1]}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        ))
    ), [options]);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <IconButton onClick={handleClose}>
                <CloseIcon className="closeIcon" />
            </IconButton>
            <Grid className="dialog-grid">
                <DialogTitle
                    className="dialog-title"
                    disableTypography
                >
                    {options.title}
                </DialogTitle>
                <DialogContent className="dialog-content">
                    {textFields || options.message}
                </DialogContent>
                <DialogActions>
                    <MuiButtons type={options.type} action={handleClose} />
                </DialogActions>
            </Grid>
        </Dialog>
    );
};

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;
Confirm.displayName = 'Confirm';

export default React.memo(Confirm);
