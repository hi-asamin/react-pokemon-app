import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import { CardTitle } from '../../util/card-title';
import { StatusBar } from '../../util/status-bar';
import { TypeChip } from '../../util/chip';
import { getPokemon } from '../../../usecases/pokemon';

import './index.scss';

export const Pokemon = (props) => {
  const unmounted = useRef(false);
  const pokemonName = props.match.params.pokemon;
  const [pokemon, setPokemon] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemon(pokemonName);
      if (!unmounted.current) {
        setPokemon(response);
      }
    };
    fetchData();
    return () => {
      unmounted.current = true;
    };
  });

  const status = {};
  if (pokemon) {
    pokemon.stats.forEach((stat) => {
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
    return pokemon.types.map((type) => {
      return <TypeChip type={type.type.name} />;
    });
  };

  return (
    <>
      {pokemon && (
        <Card className="pokemon-card">
          <CardTitle pokemonNumber={pokemon.id} types={showTypeChips()} />
          <CardHeader title={t(pokemonName)} titleTypographyProps={{ variant: 'h2' }} />
          <CardContent>
            <img src={pokemon.sprites.front_default} alt="" className="pokemon-card-base-image" />
            <CardMedia>
              <img src={pokemon.sprites.front_default} alt="" />
              <img src={pokemon.sprites.back_default} alt="" />
              <img src={pokemon.sprites.front_shiny} alt="" />
              <img src={pokemon.sprites.back_shiny} alt="" />
            </CardMedia>
          </CardContent>
          <CardContent>
            <StatusBar status={'HP'} type={pokemon.types[0].type.name} param={status.hp} />
            <StatusBar status={'attack'} type={pokemon.types[0].type.name} param={status.attack} />
            <StatusBar
              status={'defense'}
              type={pokemon.types[0].type.name}
              param={status.defense}
            />
            <StatusBar status={'speed'} type={pokemon.types[0].type.name} param={status.speed} />
            <StatusBar
              status={'specialAttack'}
              type={pokemon.types[0].type.name}
              param={status.specialAttack}
            />
            <StatusBar
              status={'specialDefense'}
              type={pokemon.types[0].type.name}
              param={status.specialDefense}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};
