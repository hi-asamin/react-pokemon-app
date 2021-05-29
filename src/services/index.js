import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = async (pokemonName) => {
  const response = await axios.get(`${baseUrl}/${pokemonName}`);
  return response;
};

export const getPokemonList = async (page) => {
  const perPage = 15;
  const offset = page * perPage - perPage;
  const response = await axios.get(`${baseUrl}?limit=${perPage}&offset=${offset}`);
  return response;
};
