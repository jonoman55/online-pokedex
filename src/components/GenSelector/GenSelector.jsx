import React from 'react';
import { Dropdown } from 'react-dropdown-now';
import '../../styles/pokeStyles.css';
import 'react-dropdown-now/style.css';

const GenSelector = ({ options, onSelect }) => {
    return (
        <div className='gen-style'>
            <Dropdown
                placeholder='Select Generation'
                options={options}
                value='Select Generation'
                onSelect={(value) => onSelect(value)}
            />
        </div>
    );
}

export default GenSelector;
