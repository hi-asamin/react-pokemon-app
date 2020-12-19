import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createSelector } from '@reduxjs/toolkit';
import { setPokemon } from "../../../usecases/pokemon";
import _ from "lodash";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const pokemonSelector = createSelector(
  (state) => state['Pokemon'],
  (state) => state,
)

export const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon;
  const pokemonState = useSelector(pokemonSelector);
  useEffect(() => {
    setPokemon(pokemonName);
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return(
        <div className={"pokemon-wrapper"}>
          <div className={"item"}>
            <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt=""/>
            <img src={pokeData.sprites.back_default} alt=""/>
            <img src={pokeData.sprites.front_shiny} alt=""/>
            <img src={pokeData.sprites.back_shiny} alt=""/>
          </div>
          <div className="item">
            <h1>Stats</h1>
            {pokeData.stats.map(el => {
              return <p>{el.stat.name} {el.base_stat}</p>
            })}
          </div>
          <div className="item">
            <h1>Abilities</h1>
            {pokeData.abilities.map(el => {
              return <p>{el.ability.name}</p>
            })}
          </div>
        </div>
      )
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>
    }

    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>
    }

    return <p>error getting pokemon</p>
  }

  return(
    <>
      {ShowData()}
      <Card>
        <CardActionArea>
          {/* <CardMedia>
            <img src={pokemon.sprites.front_default} alt='' />
          </CardMedia> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {pokemonName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
};