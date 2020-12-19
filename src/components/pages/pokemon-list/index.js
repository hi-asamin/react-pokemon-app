import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';
import { setPokemonList } from "../../../usecases/pokemon-list";

import { Loading } from '../../util/loading';
import { PokemonCard } from '../pokemon-card';

const pokemonListSelector = createSelector(
  (state) => state['PokemonList'],
  (state) => state,
)

export const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const pokemonList = useSelector(pokemonListSelector);
  useEffect(() => {
    setPokemonList(1);
  }, []);
  const searchPokemon = () => {
    props.history.push(`/${search}`);
  }

  const background = {
    backgroundColor: '#F5F5F5',
  }

  const ShowData = () => {
    if (pokemonList.loading) {
      return <Loading />
    }

    if (pokemonList.data) {
      return(
        <div className={"list-wrapper"} style={background}>
          {pokemonList.data.map(pokemon => {
            return(
              <>
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                />
                <Link to={`/pokemon/${pokemon.name}`}>View</Link>
              </>
            )
          })}
        </div>
      )
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>
    }

    return <p>unable to get data</p>
  };

  return(
    <>
      <div className={"search-wrapper"}>
        <p>Search: </p>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <button onClick={searchPokemon}>Search</button>
      </div>
      {ShowData()}
    </>
  )
};