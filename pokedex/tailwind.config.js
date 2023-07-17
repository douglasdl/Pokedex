/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", 
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
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
      },
      borderRadius: {
        '4xl': '3rem',
      }
    },
  },
  plugins: [],
}

