import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface INavigationButton extends TouchableOpacityProps {
    title: string
    onPress: () => void
}

export function NavigationButton({ title, onPress }: INavigationButton) {
    return (
        <TouchableOpacity
            className="bg-green-600 p-2 rounded"
            onPress={onPress}
        >
            <Text className="text-center font-bold text-white">{title}</Text>
        </TouchableOpacity>
    );
}