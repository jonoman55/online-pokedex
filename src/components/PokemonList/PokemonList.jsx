import React from "react";
import Spinner from '../../components/Spinner/Spinner';
import '../../styles/pokeStyles.css';

function PokemonList({ pokemons, selectPokemon, isLoading }) {
  const drawPokemon = () => {
    return pokemons.map((p, id) => (
      <li
        key={id}
        onClick={() => selectPokemon(p.id)}
        className={
          p.selected
            ? "list-group-item d-flex pokemon-item-list selected"
            : "list-group-item d-flex pokemon-item-list"
        }
      >
        <img className="col-3" src={p.sprites.front_default} alt=''/>
        <p className="col-4 pokemon-text-list">N.º {p.id}</p>
        <p className="col-5 pokemon-text-list">{p.name}</p>
      </li>
    ));
  };

  return isLoading ? (<Spinner />) : (<ul className="list-group">{pokemons.length > 0 && drawPokemon()}</ul>);
}

export default PokemonList;