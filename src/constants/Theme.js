import { createMuiTheme } from '@material-ui/core/styles';
import stylesConstants from '../styles/constants.sass';

const THEME = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                borderRadius: '5px',
                width: '110px',
                border: `1px solid ${stylesConstants.primaryPing}`,
            },
            textPrimary: {
                backgroundColor: stylesConstants.primaryPing,
                color: stylesConstants.primaryWhite,
                '&:focus': {
                    color: stylesConstants.primaryPing,
                    backgroundColor: 'inherit',
                },
                '&:hover': {
                    color: stylesConstants.primaryPing,
                },

            },
            textSecondary: {
                color: stylesConstants.primaryPing,
                '&:focus': {
                    backgroundColor: stylesConstants.primaryPing,
                    color: stylesConstants.primaryWhite,
                },
                '&:hover': {
                    backgroundColor: stylesConstants.primaryPing,
                    color: stylesConstants.primaryWhite,
                },

            },
        },
        MuiDialog: {
            paper: {
                maxWidth: '615px !important',
                width: '100%',
                backgroundColor: stylesConstants.primaryBlack,
                color: stylesConstants.primaryWhite,
            },
        },
        MuiDialogTitle: {
            root: {
                textTransform: 'uppercase',
                paddingBottom: '20px',
                color: stylesConstants.primaryWhite,
            },
        },
        MuiFormLabel: {
            root: {
                color: stylesConstants.primaryPing,
                fontSize: '18px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                '&$focused': {
                    color: stylesConstants.primaryWhite,
                },
            },
        },
        MuiInputBase: {
            input: {
                backgroundColor: stylesConstants.secondaryGray,
                color: stylesConstants.primaryWhite,
                padding: '10px',
                marginTop: '10px',
            },
        },
        MuiInput: {
            underline: {
                '&:hover': {
                    '&:before': {
                        borderBottom: `2px solid ${stylesConstants.primaryPing} !important`,
                    },
                },
                '&:after': {
                    borderBottom: `2px solid ${stylesConstants.primaryWhite}`,
                },
            },
        },
        MuiFormControl: {
            root: {
                marginBottom: '20px',
            },
        },
        MuiDialogActions: {
            root: {
                padding: '8px 24px',
            },
        },
    },
});

export default THEME;
