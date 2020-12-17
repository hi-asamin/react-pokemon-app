import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';
import _ from "lodash";
import { getPokemonList } from "../usecases/pokemon-list";
// import ReactPaginate from "react-paginate";

const pokemonListSelector = createSelector(
  (state) => state['PokemonList'],
  (state) => state,
)

export const PokemonList = (props) => {
  const [search, setSearch] = useState("");
  const pokemonList = useSelector(pokemonListSelector);
  useEffect(() => {
    getPokemonList(1);
  }, []);
  const searchPokemon = () => {
    props.history.push(`/${search}`);
  }

  const ShowData = () => {
    if (pokemonList.loading) {
      return <p>Loading...</p>
    }

    if (!_.isEmpty(pokemonList.data)) {
      return(
        <div className={"list-wrapper"}>
          {pokemonList.data.map(el => {
            return(
              <div className={"pokemon-item"}>
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
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
    <div>
      <div className={"search-wrapper"}>
        <p>Search: </p>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <button onClick={searchPokemon}>Search</button>
      </div>
      {ShowData()}
    </div>
  )
};