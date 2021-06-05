import React from 'react';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import { ClearButton, CssTextField } from '../index';
import useStyles from './styles';

export default function PokeSearch({ input, onChange, onClick }) {
  const classes = useStyles();
    return (
        <form className={classes.root} noValidate>
            <CssTextField
                className={classes.searchContainer}
                placeholder='Search Pokémon'
                label={input ? 'Search Pokémon' : ''}
                variant='outlined'
                id='custom-css-outlined-input'
                size='small'
                value={input}
                onChange={(e) => onChange(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <ClearButton onClick={onClick} />
        </form>
    );
}
