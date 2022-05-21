import axiosInstance from "./axiosInstance";
import { GetPokemons } from "../types/Api";

export const getPokemons = async (offset?: number): Promise<GetPokemons> =>
  axiosInstance
    .get("/pokemon", {
      params: {
        offset,
      },
    })
    .then((res) => res.data);

export const getPokemonInfo = async (id: number) =>
  axiosInstance.get(`/pokemon/${id}/`).then((res) => res.data);

export const getALLTypesPokemon = async () =>
  axiosInstance.get("/type/").then((res) => res.data);

export const getPokemonByTypes = async (types: number) =>
  axiosInstance.get(`/type/${types}/`).then((res) => res.data);

export const getFoundPokemon = async (name: string) =>
  axiosInstance
    .get(`/pokemon/${name}/`)
    .then((res) => res.data)
    .catch(() => []);
