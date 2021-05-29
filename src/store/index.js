// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { PokemonSlice } from '../slices/pokemon';
import { PokemonListSlice } from '../slices/pokemon-list';

const indexReducer = combineReducers({
  [PokemonSlice.name]: PokemonSlice.reducer,
  [PokemonListSlice.name]: PokemonListSlice.reducer,
});

const store = configureStore({
  reducer: indexReducer,
});

const { dispatch } = store;
export { store, dispatch };
