import React from 'react';
import FontAwesome from 'react-fontawesome';
import useStyles from './styles';

export default function ApiCredit() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p className={classes.font}>
                <FontAwesome
                    name='gamepad'
                    className={classes.icon}
                />
                    API by:
                <a className={classes.link} href="https://pokeapi.co/" target="blank">
                    PokéApi.co
                </a>
            </p>
        </div>
    );
}