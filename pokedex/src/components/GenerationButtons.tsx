import React from 'react';
import { View } from 'react-native';
import { GenerationButton } from './GenerationButton';

interface IGenerationButtons {
    generation1?: boolean
    generation2?: boolean
    generation3?: boolean
    generation4?: boolean
    generation5?: boolean
    generation6?: boolean
    generation7?: boolean
    generation8?: boolean
    generation9?: boolean
    onPress: (generation: number) => void
}

export function GenerationButtons({ generation1 = false, generation2 = false, generation3 = false, generation4 = false, generation5 = false, generation6 = false, generation7 = false, generation8 = false, generation9 = false, onPress }: IGenerationButtons) {
  return (
    <View className="items-center justify-evenly flex-row mt-2 w-11/12">
      {generation1 && (
        <GenerationButton 
          title='1'
          onPress={() => {onPress(1)} }
        />
      )}
      {generation2 && (
        <GenerationButton 
          title='2'
          onPress={() => {onPress(2)} }
        />
      )}
      {generation3 && (
        <GenerationButton 
          title='3'
          onPress={() => {onPress(3)} }
        />
      )}
      {generation4 && (
        <GenerationButton 
          title='4'
          onPress={() => {onPress(4)} }
        />
      )}
      {generation5 && (
        <GenerationButton 
          title='5'
          onPress={() => {onPress(5)} }
        />
      )}
      {generation6 && (
        <GenerationButton 
          title='6'
          onPress={() => {onPress(6)} }
        />
      )}
      {generation7 && (
        <GenerationButton 
          title='7'
          onPress={() => {onPress(7)} }
        />
      )}
      {generation8 && (
        <GenerationButton 
          title='8'
          onPress={() => {onPress(8)} }
        />
      )}
      {generation9 && (
        <GenerationButton 
          title='9'
          onPress={() => {onPress(9)} }
        />
      )}
    </View>
  );
}