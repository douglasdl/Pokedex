import React from 'react';

import { StatusBar, Text, View } from 'react-native';
import { Home } from './src/pages/Home';
import { Pokedex } from './src/components/Pokedex';
import { Pokedex2 } from './src/components/Pokedex2';
import { Pokedex3 } from './src/components/Pokedex3';

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-blue-500">
      		<Home />
			{/* <Pokedex /> */}
      		<StatusBar hidden />
    	</View>
	);
}