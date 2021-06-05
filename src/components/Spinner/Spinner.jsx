import React from 'react';
import spinner from '../../images/spinner.gif';
import useStyles from './styles';

export default function Spinner() {
    const classes = useStyles();
    return <img className={classes.root} src={spinner} alt='Loading...' />;
}