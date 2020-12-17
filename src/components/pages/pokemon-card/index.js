import React from 'react'

// import { getPokemon } from '../../../usecases/pokemon';

export const PokemonCard = (props) => {
  const { name } = props;
  // useEffect(() => {
  //   getPokemon(name).then(res => {
  //     setPokemon(res);
  //   });
  // });
  // let pokemon;
  // const setPokemon = (pokemonData) => {
  //   pokemon = pokemonData;
  // }
  // console.log(`pokemon: ${JSON.stringify(pokemon)}`)
  return(
    <>
      <h1>{name}</h1>
    </>
  )
};