/* eslint-disable max-len */
import React from 'react';
import { SvgIcon } from '@material-ui/core';

const CloseIcon = (props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon viewBox="-2 -2 24 24" {...props}>
        <path d="M17.7,18.7c-0.3,0-0.5-0.1-0.7-0.3l-7.1-7.1l-7.1,7.1c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l7.1-7.1L1.4,2.8C1,2.4,1,1.8,1.4,1.4s1-0.4,1.4,0l7.1,7.1L17,1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-7.1,7.1l7.1,7.1c0.4,0.4,0.4,1,0,1.4C18.2,18.6,17.9,18.7,17.7,18.7z" />
    </SvgIcon>
);

CloseIcon.displayName = 'CloseIcon';
CloseIcon.muiName = 'SvgIcon';

export default CloseIcon;
