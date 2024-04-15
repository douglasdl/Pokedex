import { 
    Container,
    Cover,
    Top,
    Frame,
    StatusInfo,
    Name,
    Number,
    StatisticsItem,
    TypeIcon,
    AnimatedImage,
    TypesContainer,
    Type,
    ButtonsContainer,
    ConfirmButton,
    GenerationButton,
    NavigationButton,
    PokemonInput
} from './styles';

import PokedexImg from '../../assets/Pokedex.svg';
import BugImg from '../../assets/normal.svg';
import { useEffect, useState } from 'react';

export function Pokedex() {

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
        fairy: '#EC8FE6'
    };

    console.log('COR: ', typesColors['steel']);

    const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoDTO>({
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

        console.log("Pokemon:", pokemon);
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
                            defence: result['stats'][2]['base_stat'],
                            speed: result['stats'][5]['base_stat'],
                            specialAttack: result['stats'][3]['base_stat'],
                            specialDefence: result['stats'][4]['base_stat'],
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
                            defence: result['stats'][2]['base_stat'],
                            speed: result['stats'][5]['base_stat'],
                            specialAttack: result['stats'][3]['base_stat'],
                            specialDefence: result['stats'][4]['base_stat'],
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
                            defence: result['stats'][2]['base_stat'],
                            speed: result['stats'][5]['base_stat'],
                            specialAttack: result['stats'][3]['base_stat'],
                            specialDefence: result['stats'][4]['base_stat'],
                            type1: result['types'][0]['type']['name'],
                            type2: result['types'].length > 1 ? result['types'][1]['type']['name'] : '',
                        }
                    );
                }
            },
            (error) => {
                setIsLoading(false);
                setError(error);
                console.log(error);
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
        if(currentPokemon >= 905) {
            nextPokemon = 1;
        } else {
            nextPokemon = currentPokemon + 1;
        }
        fetchPokemon(nextPokemon.toString());
    }

    function handleSearchPreviousPokemon() {
        let currentPokemon = pokemonInfo.id;
        let previousPokemon = 0;
        if(currentPokemon <= 1) {
            previousPokemon = 905;
        } else {
            previousPokemon = currentPokemon - 1;
        }
        fetchPokemon(previousPokemon.toString());
    }

    

    return (
        <Container>
            <Cover>
                <Top backgroundColor={typesColors[pokemonInfo.type1]}>
                    <Name>{pokemonInfo.name.toUpperCase()}</Name>
                    <Number>#{pokemonInfo.id}</Number>
                </Top>
                
                <Frame>
                    <AnimatedImage 
                        source={{ uri: `${pokemonInfo.image}` }} 
                        resizeMode="contain"
                    />

                    <TypesContainer>
                        {
                            pokemonInfo.type2 === '' 
                                ? 
                                <>
                                    <Type backgroundColor={typesColors[pokemonInfo.type1]}>{pokemonInfo.type1.toUpperCase()}</Type>
                                </>
                                
                                : 
                                <>
                                    <Type backgroundColor={typesColors[pokemonInfo.type1]}>{pokemonInfo.type1.toUpperCase()}</Type>
                                    <Type backgroundColor={typesColors[pokemonInfo.type2]}>{pokemonInfo.type2.toUpperCase()}</Type>
                                </>
                        }
                        
                         
                    </TypesContainer>


                       
                        <StatusInfo>
                            <StatisticsItem>HP: {pokemonInfo.hp} ■■■■□□□□□□□□□□□</StatisticsItem>
                            <StatisticsItem>Ataque: {pokemonInfo.attack} ■■□□□□□□□□□□□□□</StatisticsItem>
                            <StatisticsItem>Defesa: {pokemonInfo.defence} ■□□□□□□□□□□□□□□</StatisticsItem>
                            <StatisticsItem>Velocidade: {pokemonInfo.speed} ■■■■□□□□□□□□□□□</StatisticsItem>
                            <StatisticsItem>Defesa Especial: {pokemonInfo.specialDefence} ■■□□□□□□□□□□□□□</StatisticsItem>
                            <StatisticsItem>Ataque Especial: {pokemonInfo.specialAttack} ■□□□□□□□□□□□□□□</StatisticsItem>
                        </StatusInfo>
                    
                </Frame>

                <ButtonsContainer>

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
                </ButtonsContainer>

                <ButtonsContainer>
                    <NavigationButton
                        title="Anterior" 
                        onPress={handleSearchPreviousPokemon}
                    />
                    <NavigationButton 
                        title="Próximo"
                        onPress={handleSearchNextPokemon}
                    />            
                </ButtonsContainer>

                <ButtonsContainer>
                    <PokemonInput
                        value={searchPokemon}
                        onChangeText={setSearchPokemon}
                        placeholder="Nome ou número do Pokemon"
                    />
                    <ConfirmButton
                        title='CONFIRMAR'
                        onPress={handlePokemonSearch}
                    />
                </ButtonsContainer>

            </Cover>

        </Container>
    );
}