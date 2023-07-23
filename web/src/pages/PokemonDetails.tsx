import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "@/libs/axios";
import { GenerationButtons } from "@/components/GenerationButtons";
import { ConfirmButton } from "@/components/ConfirmButton";
import { NavigationButton } from "@/components/NavigationButton";
import { PokemonInput } from "@/components/PokemonInput";

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

interface IPokemonDetails {
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

export function PokemonDetails() {
  const FIRST_POKEMON = 1
  const LAST_POKEMON = 1010
  
  const { name: pokemonName } = useParams<{ name: string }>();
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);
  const [searchPokemon, setSearchPokemon] = useState('');

  async function fetchPokemonDetails(pokemon: string) {
    try {
      const result = await api.get<IPokemonDetails>(pokemon);
      setPokemonDetails(result.data);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    }
  }

  useEffect(() => {
    void fetchPokemonDetails(`/${pokemonName ?? ""}`);
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  const { name, abilities, base_experience, forms, height, held_items, id, moves, sprites, stats, weight } = pokemonDetails;

  const capitalizedPokemonName = name.charAt(0).toUpperCase() + name.slice(1);

  async function handleSearchNextPokemon() {
    const currentPokemon = id;
    let nextPokemon = 0;
    if(currentPokemon >= LAST_POKEMON) {
        nextPokemon = FIRST_POKEMON;
    } else {
        nextPokemon = currentPokemon + 1;
    }
    await fetchPokemonDetails(nextPokemon.toString());
  }

  async function handleSearchPreviousPokemon() {
    const currentPokemon = id;
    let previousPokemon = 0;
    if(currentPokemon <= FIRST_POKEMON) {
        previousPokemon = LAST_POKEMON;
    } else {
        previousPokemon = currentPokemon - 1;
    }
    await fetchPokemonDetails(previousPokemon.toString());
  }

  async function handleGenerationSearch(generation: number) {
    const generationInitial = [
      ['zero', 0],      // ---
      ['first', 1],     // 151  Kanto 
      ['second', 152],  // 251  Johto
      ['third', 252],   // 386  Hoenn
      ['fourth', 387],  // 493  Sinnoh  
      ['fifth', 494],   // 649  Unova
      ['sixth', 650],   // 721  Kalos
      ['seventh', 722], // 809  Alola
      ['eightth', 810], // 905  Galar
      ['nineth', 906]   // 1010 Paldea
    ]
    await fetchPokemonDetails(generationInitial[generation][1].toString());
  }

  async function handlePokemonSearch() {
    if(searchPokemon === '') return
    await fetchPokemonDetails(searchPokemon.toLowerCase());
  }

  return (
    <div className="flex items-center justify-center h-full flex-col gap-1 p-1">
      <h1 className="text-yellow-500 text-3xl p-2"># {id} - {capitalizedPokemonName}</h1>
      <div className="flex items-center justify-center flex-row gap-4 w-full">
        <div className="flex items-center justify-center flex-row w-1/2 gap-2 border border-gray-700 p-2 rounded-md">
          <NavigationButton
            title="⇦ Prev" 
            onPress={handleSearchPreviousPokemon}
          />
          <NavigationButton
            title="Next ⇨"
            onPress={handleSearchNextPokemon}
          />            
        </div>
        <div className="flex items-center justify-center flex-row gap-2 w-full border border-gray-700 p-2 rounded-md">
          <span>Gen.</span>
          <GenerationButtons
            generation1
            generation2
            generation3
            generation4
            generation5
            generation6
            generation7
            generation8
            generation9
            onPress={handleGenerationSearch}
          />
        </div>
        <div className="flex items-center justify-center flex-row w-full border border-gray-700 p-2 rounded-md">
          <PokemonInput
            value={searchPokemon}
            onChangeText={setSearchPokemon}
            placeholder="Nome ou número do Pokemon"
            placeholderTextColor="gray"
          />
          <div className='w-4'></div>
          <ConfirmButton
            title='CONFIRMAR'
            onPress={() => {handlePokemonSearch}}
          />
        </div>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <div className="flex-wrap flex gap-2">
          {sprites.other.dream_world.front_default ? (<img className="w-24" src={sprites.other.dream_world.front_default} alt={name} />) : (<></>)}
          {sprites.other.dream_world.front_female ? (<img className="w-24" src={sprites.other.dream_world.front_female} alt={name} />) : (<></>)}
        
          {sprites.other.home.front_default ? (<img className="w-24" src={sprites.other.home.front_default} alt={name} />) : (<></>)}
          {sprites.other.home.front_female ? (<img className="w-24" src={sprites.other.home.front_female} alt={name} />) : (<></>)}
          {sprites.other.home.front_shiny ? (<img className="w-24" src={sprites.other.home.front_shiny} alt={name} />) : (<></>)}
          {sprites.other.home.front_shiny_female ? (<img className="w-24" src={sprites.other.home.front_shiny_female} alt={name} />) : (<></>)}
        
          {sprites.other["official-artwork"].front_default ? (<img className="w-24" src={sprites.other["official-artwork"].front_default} alt={name} />) : (<></>)}
          {sprites.other["official-artwork"].front_shiny ? (<img className="w-24" src={sprites.other["official-artwork"].front_shiny} alt={name} />) : (<></>)}
        
          {sprites.back_default ? (<img className="w-24" src={sprites.back_default} alt={name} />) : (<></>)}
          {sprites.back_female ? (<img className="w-24" src={sprites.back_female} alt={name} />) : (<></>)}
          {sprites.back_shiny ? (<img className="w-24" src={sprites.back_shiny} alt={name} />) : (<></>)}
          {sprites.back_shiny_female ? (<img className="w-24" src={sprites.back_shiny_female} alt={name} />) : (<></>)}

          {sprites.front_default ? (<img className="w-24" src={sprites.front_default} alt={name} />) : (<></>)}
          {sprites.front_female ? (<img className="w-24" src={sprites.front_female} alt={name} />) : (<></>)}
          {sprites.front_shiny ? (<img className="w-24" src={sprites.front_shiny} alt={name} />) : (<></>)}
          {sprites.front_shiny_female ? (<img className="w-24" src={sprites.front_shiny_female} alt={name} />) : (<></>)}
        </div>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <h2>Abilities:</h2>
        <ul>
          {abilities.map((ability) => (
            <li key={ability.ability.name}>
              {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <h2>Base Experience</h2>
        <span>
          {base_experience}
        </span>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <h2>Forms</h2>
        <ul>
          {forms.map((form) => (
            <li key={form.name}>
              {form.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <h2>Height</h2>
        <span>
          {height/10} m
        </span>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <h2>Weight</h2>
        <span>
          {weight/10} Kg
        </span>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <h2>Held Items</h2>
        <p className="flex-wrap flex gap-2">
          {held_items.map((item) => (
            <span
              key={item.item.name}
              className="flex items-center justify-center p-2 border border-white rounded-full bg-gray-800"
            >
              {item.item.name}
            </span>
          ))}
        </p>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2">
        <h2>Stats</h2>
        <table>
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.stat.name}>
                <td className="text-right">
                  {stat.stat.name.toUpperCase()}: 
                </td>
                <td className="text-center py-1 px-4">
                  {stat.base_stat}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-evenly flex-row w-full border border-gray-700 p-2 gap-4">
        <h2>Moves:</h2>
        <p className="flex-wrap flex gap-2">
          {moves.map((move) => (
            <span
              key={move.move.name}
              className="flex items-center justify-center p-2 border border-white rounded-full bg-gray-800"
            >
              {move.move.name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}