import React, { useState, useEffect } from "react";

import { getPokemon } from '../../../usecases/pokemon';
import config from '../../../config'

export const PokemonCard = (props) => {
  const { name } = props;
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    getPokemon(name).then(res => {
      setPokemon(res);
    });
  });

  const background = {
    backgroundColor: '',
  }
  const ShowData = () => {
    if (pokemon) {
      return(
        <>
          <div className='card-img'>
            <img src={pokemon.sprites.front_default} alt='' />
          </div>
          <h2>{pokemon.name}</h2>
          <div>
            {
              pokemon.types.map(type => {
                return (
                  <div className='card-type' style={{ backgroundColor: config[type.type.name] }}>
                    {type.type.name}
                  </div>
                )
              })
            }
          </div>
        </>
      )
    }
  };
  // console.log(`pokemon: ${JSON.stringify(pokemon)}`)
  return(
    <>
      {ShowData()}
    </>
  )
};