import React from 'react';
import { Divider } from '@material-ui/core';

export default function Separator({ margin }) {
    return <Divider flexItem style={{ margin: margin ? margin : '15px' }} />;
}