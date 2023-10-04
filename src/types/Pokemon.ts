import { PokemonApiResult } from "./PokemonApiResult";

export type Pokemon = Pick<PokemonApiResult, "name" | "height" | "weight"> & {
  imageUrl: string;
  types: string[];
};
