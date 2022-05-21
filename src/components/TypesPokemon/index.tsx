import React, { useMemo } from "react";
import { PokemonType as Types } from "../../types/PokemonInfo";

interface PokemonType {
  types: Types[];
}

const TypesPokemon: React.FC<PokemonType> = ({ types }) => {
  const pokemonTypes = useMemo(() => {
    return types ?? [];
  }, [types]);

  return (
    <React.Fragment>
      Type:{" "}
      {pokemonTypes.map((item, index) => (
        <span key={item.slot}>
          {item.type.name}
          {pokemonTypes.length > 1 && index !== pokemonTypes.length - 1
            ? "/"
            : null}
        </span>
      ))}
    </React.Fragment>
  );
};

export default TypesPokemon;
