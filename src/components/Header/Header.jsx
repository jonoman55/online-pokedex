import React from 'react';
import ReactTooltip from 'react-tooltip';
import Icon from './pokeball';
import '../../styles/pokeStyles.css';

export default function Header() {
    return (
        <header>
            <div
                data-tip="Click To Refresh The Page"
                data-for='headerTip'
                data-place='bottom'
                data-type='dark'
                data-effect='solid'
                data-offset="{'top': 5}"
                data-scroll-hide='true'
                clickable='false'
            >
                <ReactTooltip id="headerTip" />
                <a className='header-link' href='/' alt='Home'>
                    <div className='header-icon'>
                        <Icon />
                    </div>
                    <p className='header-title'>Welcome To The Online Pokedéx</p>
                </a>
            </div>
        </header>
    );
}