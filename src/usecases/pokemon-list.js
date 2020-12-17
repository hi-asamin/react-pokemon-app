import { dispatch } from '../store';
import { PokemonListAction } from '../slices/pokemon-list';
import * as Service from '../services';

export const setPokemonList = async (page) => {
  try {
    dispatch(PokemonListAction.loading());
    const res = await Service.getPokemonList(page);
    dispatch(PokemonListAction.success(res.data));
  } catch (e) {
    dispatch(PokemonListAction.failed());
  }
}