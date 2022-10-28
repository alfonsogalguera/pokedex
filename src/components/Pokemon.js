import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );

  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>N°{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="info">
          <div className="pokemon-type">
            
            {pokemon.abilities.map((abilities, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {abilities.ability.name}
                </div>
              );
            })}
          </div>
          <div className="game-pokemon">
                <div className="pokemon-type-text">
                  Experiencia:{pokemon.base_experience}
                </div>
          </div>
          </div>
          <button onClick={clickHeart} className="pokemon-heart-btn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
