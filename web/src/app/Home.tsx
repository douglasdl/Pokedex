import React, { useEffect, useState } from 'react';
import { StatusInfo } from '../components/StatusInfo';
import { NavigationButton } from '@/components/NavigationButton';
import { ConfirmButton } from '@/components/ConfirmButton';
import { PokemonInput } from '@/components/PokemonInput';
import { GenerationButtons } from '@/components/GenerationButtons';
import { api } from '@/libs/axios';
import { FIRST_POKEMON, LAST_POKEMON, IPokemonDetails } from '@/utils/interfaces';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonName, setPokemonName] = useState<string>("bulbasaur");
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(null);
  const [searchPokemon, setSearchPokemon] = useState('');

  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoDTO>({
    hp: 45,
    attack: 62,
    defense: 63,
    speed: 60,
    specialAttack: 80,
    specialDefense: 80
  });

  async function fetchPokemonDetails(pokemon: string) {
    try {
      const result = await api.get<IPokemonDetails>(pokemon);
      setIsLoading(false);
      setPokemonDetails(result.data);
      setPokemonInfo({
        hp: result.data.stats[0].base_stat,
        attack: result.data.stats[1].base_stat,
        defense: result.data.stats[2].base_stat,
        specialAttack: result.data.stats[3].base_stat,
        specialDefense:result.data.stats[4].base_stat,
        speed:result.data.stats[1].base_stat 
      })
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

  const { name, id, sprites, types } = pokemonDetails;

  function handleSearchNextPokemon() {
    const currentPokemon = id;
    let nextPokemon = 0;
    if(currentPokemon >= LAST_POKEMON) {
        nextPokemon = FIRST_POKEMON;
    } else {
        nextPokemon = currentPokemon + 1;
    }
    fetchPokemonDetails(nextPokemon.toString())
    .then(() => {
      //
    })
    .catch((error) => {
      console.error("Error fetching Pokemon details:", error);
    })
  }

  function handleSearchPreviousPokemon() {
    const currentPokemon = id;
    let previousPokemon = 0;
    if(currentPokemon <= FIRST_POKEMON) {
      previousPokemon = LAST_POKEMON;
    } else {
      previousPokemon = currentPokemon - 1;
    }
    fetchPokemonDetails(previousPokemon.toString())
    .then(() => {
      //
    })
    .catch((error) => {
      console.error("Error fetching Pokemon details:", error);
    })
  }

  function handleGenerationSearch(generation: number) {
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
    fetchPokemonDetails(generationInitial[generation][1].toString())
    .then(() => {
      //
    })
    .catch((error) => {
      console.error("Error fetching Pokemon details:", error);
    })
  }

  function handlePokemonSearch() {
    if(searchPokemon === '') return
    
    fetchPokemonDetails(searchPokemon.toLowerCase())
    .then(() => {
      //
    })
    .catch((error) => {
      console.error("Error fetching Pokemon details:", error);
    })
  }
  
  return (
    <div className="flex w-full h-full p-1 bg-blue-700 justify-start">
      <div className="flex bg-white w-full h-full rounded-lg overflow-hidden items-center justify-start flex-col">
        <div className={`bg-${types[0].type.name} top-0 w-full h-64 items-start justify-between flex-row rounded-bl-3xl rounded-br-3xl flex`}>
          <span className="m-2 mt-7 text-white text-2xl font-bold">{name.toUpperCase()}</span>
          <span className="m-2 mt-10 text-white text-base font-bold">#{id}</span>
        </div>
          
        <div className="flex mt-6 items-center justify-center bg-gray-100 h-60 w-11/12 rounded-lg flex-col">
          {isLoading ? (
            <div className="w-full h-full flex-1 md:w-1/2 relative px-16 -top-48 mb-2 flex items-center justify-center bg-gray-400/50 rounded-full">
              <span className='flex items-center justify-center w-full h-full text-5xl font-bold text-center'>Loading...</span>
            </div>
          ) : (
            <img 
              className="h-full md:h-5/6 relative px-16 -top-60 mb-2" 
              src={sprites.other.dream_world.front_default ? sprites.other.dream_world.front_default : ""}
              alt={name}
            />
          )}

          <div className="flex relative -top-60 w-full p-1 items-center justify-center flex-row gap-4">
              
            {types.map((type) => {
              const bgColor = `bg-${type.type.name}`
              return (
              <span
                key={type.slot}
                className={`flex items-center justify-center px-4 py-1 w-20 text-white rounded-full ${bgColor}`}
              >
                {type.type.name.toUpperCase()}
              </span>
            )})}
              
          </div>

          <StatusInfo 
            pokemonInfo={pokemonInfo}
            key={1}
          />
        </div>

        <div className='mt-2'>
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

        <div className="flex items-center justify-evenly flex-row mt-2 w-full">
          <NavigationButton
            title="⇦ Anterior" 
            onPress={handleSearchPreviousPokemon}
          />
          <NavigationButton 
            title="Próximo ⇨"
            onPress={handleSearchNextPokemon}
          />            
        </div>

        <div className="flex items-center justify-center flex-row mt-2 p-4">
          <PokemonInput
            value={searchPokemon}
            onChangeText={setSearchPokemon}
            placeholder="Nome ou número do Pokemon"
            placeholderTextColor="gray"
          />
          <div className='w-4'></div>
          <ConfirmButton
            title='CONFIRMAR'
            onPress={() => {handlePokemonSearch()}}
          />
        </div>

      </div>
    </div>
  );
}