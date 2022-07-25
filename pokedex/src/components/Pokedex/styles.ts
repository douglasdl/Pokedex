import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #0000CC;
    justify-content: flex-start;
`;

export const Cover = styled.View`
    background: #ffffff;
    margin: auto;
    width: 99%;
    height: 99%;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    justify-content: flex-start;
`;

export const Name = styled.Text`
    margin: 10px;
    margin-top: 30px;
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

export const Number = styled.Text`
    margin: 10px;
    margin-top: 40px;
    color: white;
    font-size: 16px;
    font-weight: bold;
`;

export const Frame = styled.View`
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    background: #E0E0E0;
    width: 90%;
    height: 230px;
    border-radius: 8px;
`;

export const Header = styled.View`
    padding: 1px;
    margin-bottom: 20px;
`;

export const StatusInfo = styled.View`
    margin-top: -185px;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin-left: 4px;
`;

export const StatisticsItem = styled.Text`
    color: black;
    font-size: 12px;
    text-align: right;
    margin-bottom: 4px;
`;

export const TypeIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

export const AnimatedImage = styled.Image`
    width: 250px;
    height: 250px;
    top: -180px;
`;

export const TypesContainer = styled.View`
    top: -190px;
    width: 80%;

    padding: 4px;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;

interface TypeProps {
    backgroundColor: string;
}

export const Top = styled.View<TypeProps>`
    top: 0;
    width: 100%;
    height: 250px;
    background: ${props => props.backgroundColor};
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
`;

export const Type = styled.Text<TypeProps>`
    background: ${props => props.backgroundColor};
    color: white;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 20px;
`;

export const ButtonsContainer = styled.View`
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 20px;
    width: 90%;
`;

export const ConfirmButton = styled.Button`
    align-items: center;
    justify-content: center;
`;

export const GenerationButton = styled.Button`
    background: green;
`;

export const NavigationButton = styled.Button`
    width: 40%;
    height: 40px;
    border-radius: 20px;
    background: #176A9F;
    border: 0;
`;

export const PokemonInput = styled.TextInput`
    flex: 1;
    height: 40px;
    background: #eeeeee;
    color: #000;
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #cccccc;
    margin-right: 10px;
`;