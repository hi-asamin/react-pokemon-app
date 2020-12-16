import { dispatch } from '../store';
import { PokemonAction } from '../slices/pokemon';
import * as Service from '../services';

export const getPokemon = async (pokemonName) => {
  try {
    dispatch(PokemonAction.loading());

    const res = await Service.getPokemon(pokemonName);

    dispatch(PokemonAction.success({
      payload: res.data,
      pokemonName
    }))
  } catch (e) {
    dispatch(PokemonAction.failed());
  }
};