import React from "react";
import Spinner from '../../components/Spinner/Spinner';
import '../../styles/pokeStyles.css';

export default function PokemonList({ pokemons, selectPokemon, isLoading }) {
  const drawPokemon = () => {
    return pokemons.map((p, id) => (
      <li
        key={id}
        onClick={() => selectPokemon(p.id)}
        className={
          p.selected
            ? "pokemon-item-list selected"
            : "pokemon-item-list"
        }
      >
        <img src={p.sprites.front_default} alt=''/>
        <p className="pokemon-text-list">N.º {p.id}</p>
        <p className="pokemon-text-list">{p.name}</p>
      </li>
    ));
  };
  return isLoading ? (<Spinner />) : (<ul>{pokemons.length > 0 && drawPokemon()}</ul>);
}