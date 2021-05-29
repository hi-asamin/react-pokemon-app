import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = async (pokemonName) => {
  return await axios.get(`${baseUrl}/${pokemonName}`);
};

export const getPokemonList = async (page) => {
  const perPage = 15;
  const offset = page * perPage - perPage;

  return await axios.get(`${baseUrl}?limit=${perPage}&offset=${offset}`);
};
