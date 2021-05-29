import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  message: '',
  count: 0,
};

export const PokemonListSlice = createSlice({
  name: 'PokemonList',
  initialState,
  reducers: {
    loading: (state) => ({
      ...state,
      loading: true,
    }),
    success: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload.results,
      count: action.payload.count,
    }),
    failed: (state) => ({
      ...state,
      loading: false,
      message: 'failed...',
    }),
  },
});

export const PokemonListAction = PokemonListSlice.actions;
