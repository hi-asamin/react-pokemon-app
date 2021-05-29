import { dispatch } from '../store';
import { PokemonAction } from '../slices/pokemon';
import * as Service from '../services';

export const setPokemon = async (pokemonName) => {
  try {
    dispatch(PokemonAction.loading());
    const res = await Service.getPokemon(pokemonName);
    dispatch(PokemonAction.success(res.data));
  } catch (e) {
    dispatch(PokemonAction.failed());
  }
};

export const getPokemon = async (pokemonName) => {
  try {
    const res = await Service.getPokemon(pokemonName);
    return res.data;
  } catch (e) {
    dispatch(PokemonAction.failed());
    return null;
  }
};
