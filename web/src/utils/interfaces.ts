export const FIRST_POKEMON = 1
export const LAST_POKEMON = 1010

interface IAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
  
interface IForm {
  name: string;
  url: string;
}
  
interface IVersion {
  name: string;
  url: string;
}
  
interface IGameIndex {
  game_index: number;
  version: IVersion;
}
  
interface IHeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: {
    rarity: number;
    version: {
      name: string;
      url: string;
    };
  }[];
}
  
interface IMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}
  
interface ISpecies {
  name: string;
  url: string;
}
  
interface IVersions {
  [generation: string]: {
    [version: string]: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
    };
  };
}
  
interface ISprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    "official-artwork": {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
  versions: {
    [key: string]: IVersions;
  };
}
  
interface IStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
  
interface IType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
  
export interface IPokemonDetails {
  abilities: IAbility[];
  base_experience: number;
  forms: IForm[]; 
  game_indices: IGameIndex[];
  height: number;
  held_items: IHeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: string[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  weight: number;
}