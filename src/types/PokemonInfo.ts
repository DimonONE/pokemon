export interface PokemonInfos {
  types: PokemonType[];
  sprites: Sprites;
  stats: Stats[];
  name: string;
  weight: number;
  id: number;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export type Stat = Type;

export interface PokemonType {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Sprites {
  [key: string]: string | null;
}

export interface PokemonType {
  value: number;
  name: string;
}

export interface PokemonTypes {
  types: PokemonType[];
}
