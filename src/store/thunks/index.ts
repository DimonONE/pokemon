import { Dispatch } from "redux";

import {
  getFoundPokemon,
  getPokemonByTypes as getPokemonByTypesApi,
} from "../../api";
import { getPokemons as getPokemonsApi } from "../../api";
import { getPokemonInfo as getPokemonInfoApi } from "../../api";
import { getALLTypesPokemon as getALLTypesPokemonApi } from "../../api";
import {
  ADD_ALL_TYPES_POKEMON,
  ADD_FOUND_POKEMON,
  ADD_POKEMON_INFO,
  ADD_POKEMONS,
  ADD_POKEMONS_TYPES,
} from "../actions";

export const getPokemons = (offset?: number) => {
  return (dispatch: Dispatch) => {
    getPokemonsApi(offset).then((pokemons) =>
      dispatch({
        type: ADD_POKEMONS,
        pokemons,
      })
    );
  };
};

export const getPokemonInfo = (id: number) => {
  return (dispatch: Dispatch) => {
    getPokemonInfoApi(id).then((pokemonInfos) =>
      dispatch({
        type: ADD_POKEMON_INFO,
        pokemonInfos,
      })
    );
  };
};

export const getAllTypesPokemon = () => {
  return (dispatch: Dispatch) => {
    getALLTypesPokemonApi().then((pokemonTypes) =>
      dispatch({
        type: ADD_ALL_TYPES_POKEMON,
        pokemonTypes,
      })
    );
  };
};

export const getPokemonByTypes = (type: number) => {
  return (dispatch: Dispatch) => {
    getPokemonByTypesApi(type).then((data) =>
      dispatch({
        type: ADD_POKEMONS_TYPES,
        data,
      })
    );
  };
};

export const searchPokemon = (name: string) => {
  return (dispatch: Dispatch) => {
    getFoundPokemon(name).then((pokemon) =>
      dispatch({
        type: ADD_FOUND_POKEMON,
        pokemon,
      })
    );
  };
};
