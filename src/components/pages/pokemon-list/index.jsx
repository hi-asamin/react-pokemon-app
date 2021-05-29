import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { setPokemonList } from '../../../usecases/pokemon-list';

import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import { PokemonCard } from '../pokemon-card';
import { Loading } from '../../util/loading';

const pokemonListSelector = createSelector(
  (state) => state['PokemonList'],
  (state) => state,
);

export const PokemonList = () => {
  const [page, setPage] = useState(1);
  const pokemonList = useSelector(pokemonListSelector);
  useEffect(() => {
    setPokemonList(page);
  }, [page]);
  const handleChange = (e, v) => {
    setPage(v);
  };
  const pageCount = Math.round(pokemonList.count / 15);

  return (
    <>
      <Grid container justify="center">
        {/* ポケモン一覧取得中のメッセージ表示領域 */}
        {pokemonList.loading && <Loading />}
        {/* ポケモン一覧が取得できた場合の表示領域 */}
        {pokemonList.data && (
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              {pokemonList.data.map((pokemon) => {
                return <PokemonCard name={pokemon.name} />;
              })}
            </Grid>
          </Grid>
        )}
        {/* エラーがあった場合のメッセージ表示領域 */}
        {pokemonList.errorMsg && <p>{pokemonList.errorMsg}</p>}
        <Pagination
          count={pageCount}
          page={page}
          size="large"
          onChange={handleChange}
          style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
        />
      </Grid>
    </>
  );
};
