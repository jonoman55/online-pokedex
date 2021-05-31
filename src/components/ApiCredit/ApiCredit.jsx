import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './ApiCredit.module.css';

const ApiCredit = () => {
    return (
        <div className={styles.api_wrapper}>
            <p className={styles.api_font}>
                <FontAwesome
                    name='gamepad'
                    className={styles.api_icon}
                />
                    API by:
                <a className={styles.api_link} href="https://pokeapi.co/" target="blank">
                    PokéApi.co
                </a>
            </p>
        </div>
    );
}

export default ApiCredit;