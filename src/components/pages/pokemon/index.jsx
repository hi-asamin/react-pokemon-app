import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import { CardTitle } from '../../util/card-title';
import { StatusBar } from '../../util/status-bar';
import { TypeChip } from '../../util/chip';
import { getPokemon } from '../../../usecases/pokemon';

export const Pokemon = (props) => {
  let unmounted = false;
  const pokemonName = props.match.params.pokemon;
  const [pokemon, setPokemon] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    if (!unmounted) {
      getPokemon(pokemonName).then(res => {
        setPokemon(res);
      });
    }
    return () => { unmounted = true }
  });

  const styles = {
    card: {
      margin: 'auto',
      textAlign: 'center',
    },
    baseImage: {
      width: '20%',
    }
  }

  const status = {};
  if (pokemon) {
    pokemon.stats.map(stat => {
      switch (stat.stat.name) {
        case 'hp':
          status['hp'] = stat['base_stat'];
          break;
        case 'attack':
          status['attack'] = stat['base_stat'];
          break;
        case 'defense':
          status['defense'] = stat['base_stat'];
          break;
        case 'speed':
          status['speed'] = stat['base_stat'];
          break;
        case 'special-attack':
          status['specialAttack'] = stat['base_stat'];
          break;
        case 'special-defense':
          status['specialDefense'] = stat['base_stat'];
          break;
        default:
          break;
      }
    });
  }

  const showTypeChips = () => {
    return pokemon.types.map(type => {
      return ( <TypeChip type={type.type.name} /> )
    })
  }

  const showStatus = () => {
    return (
      <>
        HP: <StatusBar type={pokemon.types[0].type.name} param={status.hp} />
        attack: <StatusBar type={pokemon.types[0].type.name} param={status.attack} />
        defense: <StatusBar type={pokemon.types[0].type.name} param={status.defense} />
        speed: <StatusBar type={pokemon.types[0].type.name} param={status.speed} />
        specialAttack: <StatusBar type={pokemon.types[0].type.name} param={status.specialAttack} />
        specialDefense: <StatusBar type={pokemon.types[0].type.name} param={status.specialDefense} />
      </>
    )
  }

  return (
    <>
      {pokemon && (
        <Card style={styles.card}>
          <CardTitle pokemonNumber={pokemon.id} types={showTypeChips()} />
          <CardHeader title={t(pokemonName)} titleTypographyProps={{variant: 'h2'}}/>
          <CardContent>
            <img src={pokemon.sprites.front_default} alt="" style={styles.baseImage}/>
          </CardContent>
          {showStatus()}
          <CardMedia>
            <img src={pokemon.sprites.front_default} alt=""/>
            <img src={pokemon.sprites.back_default} alt=""/>
            <img src={pokemon.sprites.front_shiny} alt=""/>
            <img src={pokemon.sprites.back_shiny} alt=""/>
          </CardMedia>
        </Card>
      )}
    </>
  );
}
