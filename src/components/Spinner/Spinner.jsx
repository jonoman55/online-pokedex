import React from 'react';
import spinner from '../../images/spinner.gif';
import styles from './Spinner.module.css';

const Spinner = () => {
    return (<img className={styles.spinner} src={spinner} alt='Loading...' />);
}

export default Spinner;