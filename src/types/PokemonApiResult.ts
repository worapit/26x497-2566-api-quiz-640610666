export type PokemonApiResult = {
  name: string;
  weight: number;
  height: number;
  sprites: {
    other: {
      ["official-artwork"]: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
};
