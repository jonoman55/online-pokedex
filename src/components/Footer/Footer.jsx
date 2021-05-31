import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../../styles/pokeStyles.css';

const Footer = () => {
    return (
        <footer>
            <p className='footer-font'>
                <FontAwesome
                    name='copyright'
                    className='footer-icon' 
                />
                Copyright by:
                <a className='footer-link' href='https://github.com/jonoman55/' alt='' target='blank'>
                    John Chiappetta 
                </a>
                {new Date().toLocaleDateString()}
            </p>
        </footer>
    );
}

export default Footer;
