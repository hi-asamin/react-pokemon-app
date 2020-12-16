import { dispatch } from '../store';
import { PokemonListAction } from '../slices/pokemon-list';
import * as Service from '../services';

export const getPokemonList = async (page) => {
  try {
    console.log('called get pokemon list');
    dispatch(PokemonListAction.loading());

    const res = await Service.getPokemonList(page);

    console.log(res.data);
    console.log(res.data.results);
    console.log(res.data.count);

    dispatch(PokemonListAction.success({
      payload: res.data,
    }))
  } catch (e) {
    console.error('get pokemon list failed')
    dispatch(PokemonListAction.failed());
  }
}