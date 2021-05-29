import { PokemonSlice } from '../slices/pokemon';
import { PokemonListSlice } from '../slices/pokemon-list';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const indexReducer = combineReducers({
  [PokemonSlice.name]: PokemonSlice.reducer,
  [PokemonListSlice.name]: PokemonListSlice.reducer,
});

const store = configureStore({
  reducer: indexReducer,
});

const dispatch = store.dispatch;
export { store, dispatch };
