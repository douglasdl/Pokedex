import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface IGenerationButton extends TouchableOpacityProps {
    title: string
}

export function GenerationButton({ title, ...rest }: IGenerationButton) {
    return (
        <TouchableOpacity
            className="bg-green-500 py-2 rounded px-3"
            {...rest}
        >
            <Text className="text-center font-bold text-white">{title}</Text>
        </TouchableOpacity>
    );
}