import React, { useState, useEffect } from "react";

import { getPokemon } from '../../../usecases/pokemon';

export const PokemonCard = (props) => {
  const { name } = props;
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    getPokemon(name).then(res => {
      setPokemon(res);
    });
  });
  const ShowData = () => {
    if (pokemon) {
      return(
        <>
          <h2>{pokemon.name}</h2>
        </>
      )
    }
  };
  // console.log(`pokemon: ${JSON.stringify(pokemon)}`)
  return(
    <>
      <h1>{name}</h1>
      {ShowData()}
    </>
  )
};