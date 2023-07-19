import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    height: 100%;
    top: 0;
    background-color: #0000CC;
`;

export const Cover = styled.View`
    background: #DB092C;
    margin: auto;
    width: 99%;
    height: 99%;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
`;

export const Top = styled.View`
top: 0;
    width: 100%;
    height: 101.27px;
    background: #DB092C;
    border: 0;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
`;

export const VoiceLight = styled.View`
    width: 65.32px;
    height: 65.32px;
    background: #28ABFD;
    border-radius: 50px;
    border: 6px solid #E0E0E0;
    margin-left: 21.57px;
    margin-top: 15px;
`;

export const BatteryStatus = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: 10px;
`;

export const RedLight = styled.View`
    width: 15.58px;
    height: 15.58px;
    background: #DE0A2C;
    border-radius: 50px;
    border: 1px solid #000000;
    margin-left: 8.39px;
    margin-top: 10px;
`;

export const YellowLight = styled.View`
    width: 15.58px;
    height: 15.58px;
    background: #F5DA2D;
    border-radius: 50px;
    border: 1px solid #000000;
    margin-left: 8.39px;
    margin-top: 10px;
`;

export const GreenLight = styled.View`
    width: 15.58px;
    height: 15.58px;
    background: #4FAE5D;
    border-radius: 50px;
    border: 1px solid #000000;
    margin-left: 8.39px;
    margin-top: 10px;
`;

export const Frame = styled.View`
    margin-top: 24px;
    align-items: center;
    justify-content: center;
    background: #E0E0E0;
    width: 90%;
    height: 220px;
    border-radius: 8px;
`;

export const Display = styled.View`
    width: 90%;
    height: 180px;
    background: #4499ff;
    border-radius: 2px;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
`;

export const LeftSide = styled.View`
    width: 50%;
    height: 100%;

`;

export const RightSide = styled.View`
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
`;

export const Header = styled.View`
    padding: 1px;
    margin-bottom: 20px;
`;

export const StatusInfo = styled.View`
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    margin-left: 4px;
`;

export const Name = styled.Text`
    color: yellow;
    font-size: 14px;
    font-weight: bold;
    margin: 4px;
`;

export const StatisticsItem = styled.Text`
    color: white;
    font-size: 9px;
    text-align: right;
    margin-bottom: 4px;
`;

export const TypeIcon = styled.Image`
    width: 20px;
    height: 20px;
`;

export const AnimatedImage = styled.Image`
    width: 160px;
    height: 160px;
`;

export const ButtonsContainer = styled.View`
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 20px;
    width: 90%;
`;

export const ConfirmButton = styled.TouchableOpacity`
    width: 40%;
    height: 40px;
    border-radius: 20px;
    background-color: #2222FF;
    align-items: center;
    justify-content: center;
`;

export const GenerationButton = styled.TouchableOpacity`
    background-color: green;
    padding: 16px;
`;

export const NavigationButton = styled.TouchableOpacity`
    width: 40%;
    height: 40px;
    border-radius: 20px;
    background: #176A9F;
    border: 0;
    color: white;
    align-items: center;
    justify-content: center;
`;

export const PokemonInput = styled.TextInput`
    flex: 1;
    height: 40px;
    background: #FFF;
    color: #000;
    padding: 10px;
    text-align: center;
    border-radius: 4px;
    margin-right: 10px;
`;

export const Title = styled.Text`
    color: #FFF;
    text-align: center;
    font-weight: bold;
`;