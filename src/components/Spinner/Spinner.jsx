import React from 'react';
import styles from './Spinner.module.css';
import spinner from '../../images/spinner.gif';

const Spinner = () => {
    return (
        <img className={styles.spinner} src={spinner} alt='Loading...' />
    );
}

export default Spinner;