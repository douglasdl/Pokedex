import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        /* Types */
        --normal: #9099A1;
        --fighting: #CE4069;
        --flying: #92AADE;
        --poison: #AB6AC8;
        --ground: #D97746;
        --rock: #C7B78B;
        --bug: #90C12C;
        --ghost: #5269AC;
        --steel: #5A8EA1;
        --fire: #FF9C54;
        --water: #4D90D5;
        --grass: #63BB5B;
        --electric: #F3D23B;
        --psychic: #F97176;
        --ice: #74CEC0;
        --dragon: #096DC4;
        --dark: #5A5366;
        --fairy: #EC8FE6;

        --background: #000000;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        /* font-family: 'Poppins', sans-serif; */
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    button {
        cursor: pointer;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`