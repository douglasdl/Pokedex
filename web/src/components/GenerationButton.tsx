import React from 'react';

interface IGenerationButton {
    title: string
    onPress: () => void
}

export function GenerationButton({ title, onPress, ...rest }: IGenerationButton) {
    return (
        <button
            className="bg-green-500 py-2 rounded px-3"
            onClick={onPress}
            {...rest}
        >
            <span className="text-center font-bold text-white">{title}</span>
        </button>
    );
}