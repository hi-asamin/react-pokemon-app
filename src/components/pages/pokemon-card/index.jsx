import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { TypeChip } from '../../util/chip';
import { getPokemon } from '../../../usecases/pokemon';

export const PokemonCard = (props) => {
  const { name } = props;
  const history = useHistory();
  const { t } = useTranslation();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    getPokemon(name).then((res) => {
      setPokemon(res);
    });
  });

  const cardStyle = {
    margin: 'auto',
    textAlign: 'center',
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4} key={name}>
        {pokemon && (
          <Link
            onClick={() => {
              history.push(`/pokemon/${pokemon.name}`);
            }}
          >
            <Card style={cardStyle}>
              <CardActionArea>
                <CardMedia>
                  <img src={pokemon.sprites.front_default} alt="" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {t(pokemon.name)}
                  </Typography>
                  <div>
                    {pokemon.types.map((type) => (
                      <TypeChip type={type.type.name} />
                    ))}
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        )}
      </Grid>
    </>
  );
};
