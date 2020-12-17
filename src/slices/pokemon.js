import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  data: {},
  message: ''
};

export const PokemonSlice = createSlice({
  name: 'Pokemon',
  initialState,
  reducers: {
    loading: (state) => ({
      ...state,
      loading: true,
    }),
    success: (state, action) => ({
      ...state,
      loading: false,
      data: {
        ...state.data,
        [action.pokemonName]: action.payload
      }
    }),
    failed: (state) => ({
      ...state,
      loading: false,
      message: 'failed...'
    }),
  }
})

export const PokemonAction = PokemonSlice.actions;