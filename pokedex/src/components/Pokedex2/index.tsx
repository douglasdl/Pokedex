import { 
    Container,
    Cover,
    Top,
    VoiceLight,
    BatteryStatus,
    RedLight,
    YellowLight,
    GreenLight,
    Frame,
    Display,
    RightSide,
    LeftSide,
    Header,
    StatusInfo,
    Name,
    StatisticsItem,
    TypeIcon,
    AnimatedImage,
    ButtonsContainer,
    ConfirmButton,
    GenerationButton,
    NavigationButton,
    PokemonInput,
    Title
} from './styles';

import PokedexImg from '../../assets/Pokedex.svg';
import BugImg from '../../assets/normal.svg';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

export function Pokedex2() {

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
        defence: 63,
        speed: 60,
        specialAttack: 80,
        specialDefence: 80,
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
                <Top>
                    <VoiceLight />
                    <BatteryStatus>
                        <RedLight />
                        <YellowLight />
                        <GreenLight />
                    </BatteryStatus>
                </Top>
                <ButtonsContainer>

                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(1)} }
                    >
                        <Title>1</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(2)} }
                    >
                        <Title>2</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(3)} }
                    >
                        <Title>3</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(4)} }
                    >
                        <Title>4</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(5)} }
                    >
                        <Title>5</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(6)} }
                    >
                        <Title>6</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(7)} }
                    >
                        <Title>7</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(8)} }
                    >
                        <Title>8</Title>
                    </GenerationButton>
                    <GenerationButton 
                        onPress={() => {handleGenerationSearch(9)} }
                    >
                        <Title>9</Title>
                    </GenerationButton>
                </ButtonsContainer>
                <Frame>
                    <Display>
                        <LeftSide>
                            <Header>
                                <Name>#{pokemonInfo.id} - {pokemonInfo.name.toUpperCase()}</Name>
                                
                                
                                <TypeIcon 
                                    source={{ uri: `../../assets/normal.svg`}}
                                    resizeMode="contain"
                                />
                                <StatisticsItem>
                                    Type: {pokemonInfo.type1} {pokemonInfo.type2}
                                </StatisticsItem>
                            </Header>
                            <StatusInfo>
                                <StatisticsItem>HP: {pokemonInfo.hp} ■■■■□</StatisticsItem>
                                <StatisticsItem>Ataque: {pokemonInfo.attack} ■■□□□</StatisticsItem>
                                <StatisticsItem>Defesa: {pokemonInfo.defence} ■□□□□</StatisticsItem>
                                <StatisticsItem>Velocidade: {pokemonInfo.speed} ■■■■□</StatisticsItem>
                                <StatisticsItem>Defesa Especial: {pokemonInfo.specialDefence} ■■□□□</StatisticsItem>
                                <StatisticsItem>Ataque Especial: {pokemonInfo.specialAttack} ■□□□□</StatisticsItem>
                            </StatusInfo>
                        </LeftSide>
                        <RightSide>
                            <AnimatedImage 
                                source={{ uri: `${pokemonInfo.image}` }} 
                                resizeMode="contain"
                            />
                        </RightSide>
                    </Display>
                </Frame>

                <ButtonsContainer>
                    <NavigationButton
                        onPress={handleSearchPreviousPokemon}
                    >
                        <Title>Anterior</Title>
                    </NavigationButton>
                    <NavigationButton 
                        onPress={handleSearchNextPokemon}
                    >
                        <Title>Próximo</Title>
                    </NavigationButton>            
                </ButtonsContainer>

                <ButtonsContainer>
                    <PokemonInput
                        value={searchPokemon}
                        onChangeText={setSearchPokemon}
                        placeholder="Nome ou número do Pokemon"
                    />
                    <ConfirmButton
                        onPress={handlePokemonSearch}
                    >
                        <Title>
                            CONFIRMAR
                        </Title>
                    </ConfirmButton>
                </ButtonsContainer>

            </Cover>

        </Container>
    );
}