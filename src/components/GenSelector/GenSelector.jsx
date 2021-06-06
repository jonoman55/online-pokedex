import React from 'react';
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import '../../styles/pokeStyles.css';

export default function GenSelector({ options, onSelect, onChange }) {
    return (
        <div className='gen-select-wrapper'>
            <Dropdown
                placeholder='Select Generation'
                options={options}
                value='Select Generation'
                onSelect={(value) => onSelect(value)}
                onChange={onChange}
            />
        </div>
    );
}