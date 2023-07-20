import React from 'react';

interface INavigationButton {
    title: string
    onPress: () => void
}

export function NavigationButton({ title, onPress }: INavigationButton) {
    return (
        <button
            className="bg-green-600 p-2 rounded"
            onClick={onPress}
        >
            <span className="text-center font-bold text-white">{title}</span>
        </button>
    );
}