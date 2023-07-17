import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface IConfirmButton extends TouchableOpacityProps {
    title: string
    onPress: () => void
}

export function ConfirmButton({ title, onPress }: IConfirmButton) {
    return (
        <TouchableOpacity
            className="bg-green-500 p-2 rounded"
            onPress={onPress}
        >
            <Text className="text-center font-bold text-white">{title}</Text>
        </TouchableOpacity>
    );
}