import { Button, Image, Text, View } from 'react-native';
import PokedexImg from '../../assets/Pokedex.svg';
import BugImg from '../../assets/normal.svg';
import { useEffect, useState } from 'react';
import { ConfirmButton } from './ConfirmButton';
import { GenerationButton } from './GenerationButton';
import { NavigationButton } from './NavigationButton';
import { StatisticsItem } from './StatisticsItem';
import { PokemonInfoDTO } from '@/DTOs/PokemonInfoDTO';
import { PokemonInput } from '@/components/PokemonInput';

const FIRST_POKEMON = 1
const LAST_POKEMON = 1025

export function Pokedex() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(0);
  const [response, setResponse] = useState({});

  const [searchPokemon, setSearchPokemon] = useState('');

  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoDTO>({
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
    type2: '',
  });

  async function fetchPokemon(pokemon: string) {
      setIsLoading(true);

      let apiRequest = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const APIResponse = await fetch(apiRequest)
      .then(res => res.json())
      .then(
          (result) => {
              setIsLoading(false);
              setResponse(result);
              if(result.id < 10) {
                  // https://assets.pokemon.com/assets/cms2/img/pokedex/full/905.png
                  // result['sprites']['versions']['generation-viii']['icons']['front_default']
                  setPokemonInfo(
                      {
                          id: result.id,
                          name: result.name,
                          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${result.id}.png`,
                          hp: result['stats'][0]['base_stat'],
                          attack: result['stats'][1]['base_stat'],
                          defense: result['stats'][2]['base_stat'],
                          speed: result['stats'][5]['base_stat'],
                          specialAttack: result['stats'][3]['base_stat'],
                          specialDefense: result['stats'][4]['base_stat'],
                          type1: result['types'][0]['type']['name'],
                          type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
                      }
                  );
              } else if(result.id < 100){
                  setPokemonInfo(
                      {
                          id: result.id,
                          name: result.name,
                          //image: result['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
                          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${result.id}.png`,
                          hp: result['stats'][0]['base_stat'],
                          attack: result['stats'][1]['base_stat'],
                          defense: result['stats'][2]['base_stat'],
                          speed: result['stats'][5]['base_stat'],
                          specialAttack: result['stats'][3]['base_stat'],
                          specialDefense: result['stats'][4]['base_stat'],
                          type1: result['types'][0]['type']['name'],
                          type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
                      }
                  );
              } else {
                  setPokemonInfo(
                      {
                          id: result.id,
                          name: result.name,
                          //image: result['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
                          image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${result.id}.png`,
                          hp: result['stats'][0]['base_stat'],
                          attack: result['stats'][1]['base_stat'],
                          defense: result['stats'][2]['base_stat'],
                          speed: result['stats'][5]['base_stat'],
                          specialAttack: result['stats'][3]['base_stat'],
                          specialDefense: result['stats'][4]['base_stat'],
                          type1: result['types'][0]['type']['name'],
                          type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
                      }
                  );
              }
          },
          (error) => {
              setIsLoading(false);
              setError(error);
              console.error(error);
          }
      )
      
      //setName(json.name);
      //setNumber(json.number);
      //setImage(json.image);
  }

  function handlePokemonSearch() {
      fetchPokemon(searchPokemon.toLowerCase());
  }

  function handleGenerationSearch(generation: number) {
      const generationInitial = [
          ['zero', 0],
          ['first', 1],
          ['second', 152],
          ['third', 252],
          ['fourth', 387],
          ['fifth', 495],
          ['sixth', 650],
          ['seventh', 722],
          ['eightth', 810],
          ['nineth', 905]
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

  const topBgColor = pokemonInfo.type1

  return (
    <View className='w-full h-full top-0 bg-blue-700 justify-start'>
      <View className='bg-white m-auto w-full h-full rounded-lg overflow-hidden items-center justify-start'>
        <View className={`top-0 w-full h-64 border-b-8 items-start justify-between flex-row ${topBgColor}`}>
          <Text className='m-2 mt-8 text-white text-2xl font-bold'>{pokemonInfo.name.toUpperCase()}</Text>
          <Text className='m-2 mt-10 text-white text-base font-bold'>#{pokemonInfo.id}</Text>
        </View>
        
        <View className='mt-6 items-center justify-center bg-slate-100 w-full h-60 rounded-lg'>
          <Image
            className='w-64 h-64 -top-44' 
            source={{ uri: `${pokemonInfo.image}` }} 
            resizeMode="contain"
          />  
              
            
        </View>

        <View className='items-center justify-evenly flex-row mt-2 w-11/12'>

            <GenerationButton 
                title='1'
                onPress={() => {handleGenerationSearch(1)} }
            />
            <GenerationButton 
                title='2'
                onPress={() => {handleGenerationSearch(2)} }
            />
            <GenerationButton 
                title='3'
                onPress={() => {handleGenerationSearch(3)} }
            />
            <GenerationButton 
                title='4'
                onPress={() => {handleGenerationSearch(4)} }
            />
            <GenerationButton 
                title='5'
                onPress={() => {handleGenerationSearch(5)} }
            />
            <GenerationButton 
                title='6'
                onPress={() => {handleGenerationSearch(6)} }
            />
            <GenerationButton 
                title='7'
                onPress={() => {handleGenerationSearch(7)} }
            />
            <GenerationButton 
                title='8'
                onPress={() => {handleGenerationSearch(8)} }
            />
            <GenerationButton 
                title='9'
                onPress={() => {handleGenerationSearch(9)} }
            />
        </View>

        <View className='items-center justify-evenly flex-row mt-2 w-11/12'>
          <NavigationButton
            title="Anterior" 
            onPress={handleSearchPreviousPokemon}
          />
          <NavigationButton 
            title="Próximo"
            onPress={handleSearchNextPokemon}
          />            
        </View>

        <View className='items-center justify-evenly flex-row mt-2 w-11/12'>
          <PokemonInput
            value={searchPokemon}
            onChangeText={setSearchPokemon}
            placeholder="Nome ou número do Pokemon"
          />
          <ConfirmButton
            title='CONFIRMAR'
            onPress={handlePokemonSearch}
          />
        </View>

      </View>
    </View>
  );
}