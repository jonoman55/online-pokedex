import React from 'react';
import { Button } from '@material-ui/core/';
import useStyles from './styles';

export default function ClearButton({ onClick }) {
    const classes = useStyles();
    return <Button variant="contained" color="primary" className={classes.root} onClick={onClick}>Clear</Button>;
}
