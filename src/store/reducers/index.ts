import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemonsReducer";
import { InitialState } from "../../types/Store";

export const initialState: InitialState = {
  pokemons: {
    count: 0,
    next: "",
    previous: null,
    results: [],
  },
  pokemonInfos: [],
  pokemonTypes: [],
};

export const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});
