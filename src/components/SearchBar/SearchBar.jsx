import React from 'react';
import '../../styles/pokeStyles.css';

const SearchBar = ({ input, onChange }) => {
    return (
        <input
            className='search-bar'
            key='any'
            value={input}
            placeholder={"Search Pokémon"}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar;