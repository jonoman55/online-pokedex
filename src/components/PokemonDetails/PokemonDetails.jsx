import React, { useState } from 'react';
import '../../styles/pokeStyles.css';

function PokemonDetails({ pokemon }) {
  const [isOpened, setIsOpened] = useState(true);
    const getTypeStyle = (type) => {
        let backgroundColor = "";
        switch (type) {
            case "grass":
                backgroundColor = "#9bcc50";
                break;
            case "poison":
                backgroundColor = "#b97fc9";
                break;
            case "fire":
                backgroundColor = "#fd7d24";
                break;
            case "flying":
                backgroundColor = "#3dc7ef";
                break;
            case "water":
                backgroundColor = "#4592c4";
                break;
            case "bug":
                backgroundColor = "#729f3f";
                break;
            case "normal":
                backgroundColor = "#a4acaf";
                break;
            case "electric":
                backgroundColor = "#eed535";
                break;
            case "ground":
                backgroundColor = "#ab9842";
                break;
            case "fairy":
                backgroundColor = "#fdb9e9";
                break;
            case "fighting":
                backgroundColor = "#d56723";
                break;
            case "psychic":
                backgroundColor = "#f366b9";
                break;
            case "rock":
                backgroundColor = "#a38c21";
                break;
            case "steel":
                backgroundColor = "#9eb7b8";
                break;
            case "ghost":
                backgroundColor = "#7b62a3";
                break;
            case "ice":
                backgroundColor = "#51c4e7";
                break;
            case "dragon":
                backgroundColor = "#f16e57";
                break;
            default:
                backgroundColor = "#000";
                break;
        }
        return { backgroundColor, color: "#FFF", margin: "5px" };
  };
  
    function toggle() {
      setIsOpened(wasOpened => !wasOpened);
  };

  // Removed close span from title: <h1 className="text-center">N.º {pokemon.id} {pokemon.name} <span className="close">X</span></h1>
  return (
    <div className="box pokemon-image-container">
      <div className="boxTitle" style={{ cursor: 'pointer'}} onClick={toggle}>
        <h1 className="text-center">
          N.º {pokemon.id} {pokemon.name} 
        </h1>
      </div>
      {isOpened && (
        <div className="boxContent pokemon-box-details">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt=''
            className="img-fluid pokemon-image-detail d-block mx-auto"
          />
          <ul className="list-group list-group-horizontal justify-content-center">
            {pokemon.types.length > 0 &&
              pokemon.types.map((t, idx) => (
                <li
                  key={idx}
                  className="list-group-item d-flex pokemon-list-details"
                  style={getTypeStyle(t.type.name)}
                >
                  {t.type.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
