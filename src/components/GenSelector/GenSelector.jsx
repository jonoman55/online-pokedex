import React from 'react';
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import '../../styles/pokeStyles.css';

const GenSelector = ({ options, onSelect }) => {
    return (
        <div className='gen-select-style'>
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
