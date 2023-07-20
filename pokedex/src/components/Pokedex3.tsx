import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';

interface PokemonInfoProps {
  id: number;
  name: string;
  image: string;
  hp: number;
  attack: number;
  defence: number;
  speed: number;
  specialAttack: number;
  specialDefence: number;
  type1: string;
  type2: string;
}

export function Pokedex3() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(0);
  const [response, setResponse] = useState({});

  const [searchPokemon, setSearchPokemon] = useState('');

  const typesColors = {
    normal: '#9099A1',
    fighting: '#CE4069',
    flying: '#92AADE',
    poison: '#AB6AC8',
    ground: '#D97746',
    rock: '#C7B78B',
    bug: '#90C12C',
    ghost: '#5269AC',
    steel: '#5A8EA1',
    fire: '#FF9C54',
    water: '#4D90D5',
    grass: '#63BB5B',
    electric: '#F3D23B',
    psychic: '#F97176',
    ice: '#74CEC0',
    dragon: '#096DC4',
    dark: '#5A5366',
    fairy: '#EC8FE6',
  };

  console.log('COR: ', typesColors['steel']);

  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoProps>({
    id: 1,
    name: 'bulbasaur',
    image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    hp: 45,
    attack: 62,
    defence: 63,
    speed: 60,
    specialAttack: 80,
    specialDefence: 80,
    type1: 'grass',
    type2: '',
  });

  async function fetchPokemon(pokemon: string) {
    setIsLoading(true);

    console.log(pokemon);
    let apiRequest = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const APIResponse = await fetch(apiRequest)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
          if (result.id < 10) {
            // https://assets.pokemon.com/assets/cms2/img/pokedex/full/905.png
            // result['sprites']['versions']['generation-viii']['icons']['front_default']
            setPokemonInfo({
              id: result.id,
              name: result.name,
              image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${result.id}.png`,
              hp: result['stats'][0]['base_stat'],
              attack: result['stats'][1]['base_stat'],
              defence: result['stats'][2]['base_stat'],
              speed: result['stats'][5]['base_stat'],
              specialAttack: result['stats'][3]['base_stat'],
              specialDefence: result['stats'][4]['base_stat'],
              type1: result['types'][0]['type']['name'],
              type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
            });
          } else if (result.id < 100) {
            setPokemonInfo({
              id: result.id,
              name: result.name,
              //image: result['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
              image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${result.id}.png`,
              hp: result['stats'][0]['base_stat'],
              attack: result['stats'][1]['base_stat'],
              defence: result['stats'][2]['base_stat'],
              speed: result['stats'][5]['base_stat'],
              specialAttack: result['stats'][3]['base_stat'],
              specialDefence: result['stats'][4]['base_stat'],
              type1: result['types'][0]['type']['name'],
              type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
            });
          } else {
            setPokemonInfo({
              id: result.id,
              name: result.name,
              //image: result['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
              image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${result.id}.png`,
              hp: result['stats'][0]['base_stat'],
              attack: result['stats'][1]['base_stat'],
              defence: result['stats'][2]['base_stat'],
              speed: result['stats'][5]['base_stat'],
              specialAttack: result['stats'][3]['base_stat'],
              specialDefence: result['stats'][4]['base_stat'],
              type1: result['types'][0]['type']['name'],
              type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
            });
          }
        },
        (error) => {
          setIsLoading(false);
          setError(error);
          console.log(error);
        }
      );

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
      ['nineth', 905],
    ];
    fetchPokemon(generationInitial[generation][1].toString());
  }

  function handleSearchNextPokemon() {
    let currentPokemon = pokemonInfo.id;
    let nextPokemon = 0;
    if (currentPokemon >= 905) {
      nextPokemon = 1;
    } else {
      nextPokemon = currentPokemon + 1;
    }
    fetchPokemon(nextPokemon.toString());
  }

  function handleSearchPreviousPokemon() {
    let currentPokemon = pokemonInfo.id;
    let previousPokemon = 0;
    if (currentPokemon <= 1) {
      previousPokemon = 905;
    } else {
      previousPokemon = currentPokemon - 1;
    }
    fetchPokemon(previousPokemon.toString());
  }

  const backgroundColor = `bg-electric`

  return (
    <View className={`w-full h-full top-0 bg-blue-900 justify-start`}>
      <View className={`bg-white m-auto w-99 h-99 rounded-10 overflow-hidden items-center justify-start`}>
        <View className={`top-0 w-full h-250 items-start justify-between flex-row ${backgroundColor}`}>
          <Text className={`m-10 mt-30 text-white text-24 font-bold`}>{pokemonInfo.name.toUpperCase()}</Text>
          <Text className={`m-10 mt-40 text-white text-16 font-bold`}>#{pokemonInfo.id}</Text>
        </View>

        <View className={`mt-24 items-center justify-center bg-gray-300 w-90 h-230 rounded-8`}>
          <Image
            className={`w-250 h-250 top-n180`}
            source={{ uri: `${pokemonInfo.image}` }}
            resizeMode="contain"
          />

          <View className={`top-n190 w-80 p-4 items-center justify-evenly flex-row`}>
            {pokemonInfo.type2 === '' ? (
              <Text className={`p-4 text-white rounded-20`}>
                {pokemonInfo.type1.toUpperCase()}
              </Text>
            ) : (
              <>
                <Text className={`p-4 text-white rounded-20`}>
                  {pokemonInfo.type1.toUpperCase()}
                </Text>
                <Text className={`p-4 text-white rounded-20`}>
                  {pokemonInfo.type2.toUpperCase()}
                </Text>
              </>
            )}
          </View>

          <View className={`mt-n185 items-end flex-col ml-4`}>
            <Text className={`text-black text-12 text-right mb-4`}>HP: {pokemonInfo.hp} ■■■■□□□□□□□□□□□</Text>
            <Text className={`text-black text-12 text-right mb-4`}>Ataque: {pokemonInfo.attack} ■■□□□□□□□□□□□□□</Text>
            <Text className={`text-black text-12 text-right mb-4`}>Defesa: {pokemonInfo.defence} ■□□□□□□□□□□□□□□</Text>
            <Text className={`text-black text-12 text-right mb-4`}>Velocidade: {pokemonInfo.speed} ■■■■□□□□□□□□□□□</Text>
            <Text className={`text-black text-12 text-right mb-4`}>
              Defesa Especial: {pokemonInfo.specialDefence} ■■□□□□□□□□□□□□□
            </Text>
            <Text className={`text-black text-12 text-right mb-4`}>
              Ataque Especial: {pokemonInfo.specialAttack} ■□□□□□□□□□□□□□□
            </Text>
          </View>
        </View>

        <View className={`items-center justify-evenly flex-row mt-8 w-90`}>
          <Button title="1" onPress={() => handleGenerationSearch(1)} />
          <Button title="2" onPress={() => handleGenerationSearch(2)} />
          <Button title="3" onPress={() => handleGenerationSearch(3)} />
          <Button title="4" onPress={() => handleGenerationSearch(4)} />
          <Button title="5" onPress={() => handleGenerationSearch(5)} />
          <Button title="6" onPress={() => handleGenerationSearch(6)} />
          <Button title="7" onPress={() => handleGenerationSearch(7)} />
          <Button title="8" onPress={() => handleGenerationSearch(8)} />
          <Button title="9" onPress={() => handleGenerationSearch(9)} />
        </View>

        <View className={`items-center justify-evenly flex-row mt-8 w-90`}>
          <Button title="Anterior" onPress={handleSearchPreviousPokemon} />
          <Button title="Próximo" onPress={handleSearchNextPokemon} />
        </View>

        <View className={`items-center justify-evenly flex-row mt-8 w-90`}>
          <TextInput
            className={`flex-1 h-40 bg-gray-200 text-black p-10 text-center rounded-4 border-1 border-gray-300 mr-10`}
            value={searchPokemon}
            onChangeText={setSearchPokemon}
            placeholder="Nome ou número do Pokemon"
          />
          <Button title="CONFIRMAR" onPress={handlePokemonSearch} />
        </View>
      </View>
    </View>
  );
}
