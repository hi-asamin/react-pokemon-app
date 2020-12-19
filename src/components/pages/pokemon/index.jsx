import React, { useState, useEffect } from "react";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import { getPokemon } from '../../../usecases/pokemon';
import color from '../../../config/color.json'

export const Pokemon = (props) => {
  let unmounted = false;
  const pokemonName = props.match.params.pokemon;
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    if (!unmounted) {
      getPokemon(pokemonName).then(res => {
        setPokemon(res);
      });
    }
    return () => { unmounted = true }
  });

  const cardStyle = {
    margin: 'auto',
    textAlign: 'center',
  }

  return (
    <>
      {pokemon && (
        <Card style={cardStyle}>
          <CardHeader title={pokemonName} titleTypographyProps={{variant: 'h2'}}/>
          <CardMedia>
            <img src={pokemon.sprites.front_default} alt=""/>
            <img src={pokemon.sprites.back_default} alt=""/>
            <img src={pokemon.sprites.front_shiny} alt=""/>
            <img src={pokemon.sprites.back_shiny} alt=""/>
          </CardMedia>
          <CardContent>
            <div>
              {
                pokemon.types.map(type => {
                  return (
                    <div className='card-type' style={{ backgroundColor: color[type.type.name] }}>
                      {type.type.name}
                    </div>
                  )
                })
              }
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
