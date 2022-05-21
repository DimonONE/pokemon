import {
  ADD_ALL_TYPES_POKEMON,
  ADD_FOUND_POKEMON,
  ADD_POKEMON_INFO,
  ADD_POKEMONS,
  ADD_POKEMONS_TYPES,
} from "../actions";
import { initialState } from "./index";
import { Actions } from "../../types/Actions";
import { Type } from "../../types/PokemonInfo";
import { API_URL } from "../../config";

export const pokemonsReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ADD_POKEMONS: {
      return {
        ...state,
        pokemons: action.pokemons,
      };
    }
    case ADD_POKEMON_INFO:
      return {
        ...state,
        pokemonInfos: [...state.pokemonInfos, action.pokemonInfos],
      };
    case ADD_POKEMONS_TYPES: {
      return {
        ...state,
        pokemons: {
          results: action.data.pokemon.map((pokemon: { pokemon: Type }) => ({
            ...pokemon.pokemon,
          })),
        },
      };
    }
    case ADD_FOUND_POKEMON: {
      return {
        ...state,
        pokemons: {
          results: !action.pokemon.length
            ? null
            : [
                {
                  name: action.pokemon.name,
                  url: `${API_URL}/${action.pokemon.id}/`,
                },
              ],
        },
      };
    }
    case ADD_ALL_TYPES_POKEMON: {
      const pokemonTypes = action.pokemonTypes.results.map((type: Type) => {
        const idUrl = type.url.split("/");
        const id = Number(idUrl[idUrl.length - 2]);
        return {
          value: id,
          name: type.name,
          url: type.url,
        };
      });
      return {
        ...state,
        pokemonTypes,
      };
    }

    default:
      return state;
  }
};
