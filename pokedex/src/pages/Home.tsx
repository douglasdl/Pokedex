import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { PokemonInfoProps, StatusInfo } from '../components/StatusInfo';
import { NavigationButton } from '../components/NavigationButton';
import { ConfirmButton } from '../components/ConfirmButton';
import { PokemonInput } from '../components/PokemonInput';
import { GenerationButtons } from '../components/GenerationButtons';
import { api } from '../lib/axios';
import { Types } from '../components/Types';
import { Loading } from '../components/Loading';

export function Home() {
  const FIRST_POKEMON = 1
  const LAST_POKEMON = 1010

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({} as any);
  const [response, setResponse] = useState({});
  const [backgroundColor, setBackgroundColor] = useState(
    {
      type1: `bg-grass`,
      type2: `bg-poison`
    }
  )

  const [searchPokemon, setSearchPokemon] = useState('');

  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoProps>({
    id: 1,
    name: 'bulbasaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    hp: 45,
    attack: 62,
    defense: 63,
    speed: 60,
    specialAttack: 80,
    specialDefense: 80,
    type1: 'grass',
    type2: 'poison',
  });

  async function fetchPokemon(pokemon: string) {
    setIsLoading(true);
    
    try {
      const response = await api.get(pokemon);
      const result = response.data;
  
      setIsLoading(false);
      setResponse(result);

      const idString = String(result.id).padStart(3, '0');
      const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idString}.png`;

      setPokemonInfo({
        id: result.id,
        name: result.name,
        image: imageUrl,
        hp: result['stats'][0]['base_stat'],
        attack: result['stats'][1]['base_stat'],
        defense: result['stats'][2]['base_stat'],
        speed: result['stats'][5]['base_stat'],
        specialAttack: result['stats'][3]['base_stat'],
        specialDefense: result['stats'][4]['base_stat'],
        type1: result['types'][0]['type']['name'],
        type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
      });

      setBackgroundColor(
        {
          type1: `bg-${result['types'][0]['type']['name']} top-0 w-full h-64 items-start justify-between flex-row rounded-bl-3xl rounded-br-3xl`,
          type2: result['types'].length > 1 ? `bg-${result['types'][1]['type']['name']}` : ''
        }
      );

    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log(error);
    }
  }
  
  function handlePokemonSearch() {
    if(searchPokemon === '') return
    fetchPokemon(searchPokemon.toLowerCase());
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
    fetchPokemon(generationInitial[generation][1].toString());
  }

  function handleSearchNextPokemon() {
    let currentPokemon = pokemonInfo.id;
    let nextPokemon = 0;
    if(currentPokemon >= LAST_POKEMON) {
        nextPokemon = FIRST_POKEMON;
    } else {
        nextPokemon = currentPokemon + 1;
    }
    fetchPokemon(nextPokemon.toString());
  }

  function handleSearchPreviousPokemon() {
    let currentPokemon = pokemonInfo.id;
    let previousPokemon = 0;
    if(currentPokemon <= FIRST_POKEMON) {
        previousPokemon = LAST_POKEMON;
    } else {
        previousPokemon = currentPokemon - 1;
    }
    fetchPokemon(previousPokemon.toString());
  }

  useEffect(() => {
    fetchPokemon('1');
  }, [])

  useEffect(() => {
    console.log("backgroundColor:", backgroundColor)
  }, [pokemonInfo])
  
  return (
    <View className="w-full h-full p-1 bg-blue-700 justify-start">
      <View className="bg-white w-full h-full rounded-lg overflow-hidden items-center justify-start">
        <View className={backgroundColor.type1}>
          <Text className="m-2 mt-7 text-white text-2xl font-bold">{pokemonInfo.name.toUpperCase()}</Text>
          <Text className="m-2 mt-10 text-white text-base font-bold">#{pokemonInfo.id}</Text>
        </View>
          
        <View className="mt-4 items-center justify-center bg-gray-200 h-60 w-11/12 rounded-lg">
            {isLoading ? (
              <View className='items-center justify-center w-64 h-64 -top-44 mb-2'>
                <Loading />
              </View>
            ) : (
                <Image 
                className="w-64 h-64 -top-44 mb-2" source={{ uri: `${pokemonInfo.image}` }} resizeMode="contain" 
              />  
            )}
            

          <Types 
            type1={pokemonInfo.type1}
            type2={pokemonInfo.type2}
          />

          <StatusInfo 
            pokemonInfo={pokemonInfo}
            key={1}
          />
        </View>

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

        <View className="items-center justify-evenly flex-row mt-2 w-11/12">
          <NavigationButton
            title="⇦ Anterior" 
            onPress={handleSearchPreviousPokemon}
          />
          <NavigationButton 
            title="Próximo ⇨"
            onPress={handleSearchNextPokemon}
          />            
        </View>

        <View className="items-center justify-center flex-row p-4">
          <PokemonInput
            value={searchPokemon}
            onChangeText={setSearchPokemon}
            placeholder="Nome ou número do Pokemon"
            placeholderTextColor="gray"
          />
          <View className='w-4'></View>
          <ConfirmButton
            title='CONFIRMAR'
            onPress={handlePokemonSearch}
          />
        </View>

      </View>
    </View>
  );
}