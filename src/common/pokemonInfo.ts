import { useSelector } from "react-redux";
import { RootReducer } from "../types/Store";

export const pokemonInfo = (id: number) => {
  const getPokemonInfos = useSelector(
    (state: RootReducer) => state.pokemons.pokemonInfos
  );

  return getPokemonInfos.find((item) => item.id === id);
};
