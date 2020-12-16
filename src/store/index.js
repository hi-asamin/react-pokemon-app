import { PokemonSlice, PokemonReducer } from '../slices/pokemon';
import { PokemonListSlice, PokemonListReducer } from '../slices/pokemon-list';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const indexReducer = combineReducers({
  [PokemonSlice.name]: PokemonReducer,
  [PokemonListSlice.name]: PokemonListReducer,
});

const store = configureStore({
  reducer: indexReducer,
});

const dispatch = store.dispatch;
export { store, dispatch };