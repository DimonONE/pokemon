import { GetPokemons } from "./Api";
import { PokemonInfos } from "./PokemonInfo";

export type Pokemons = GetPokemons;

export interface InitialState {
  pokemons: Pokemons;
  pokemonInfos: PokemonInfos[];
  pokemonTypes: [];
}

export interface RootReducer {
  pokemons: Pick<InitialState, "pokemonInfos" | "pokemonTypes" | "pokemons">;
}
