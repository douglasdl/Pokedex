import React from 'react';

interface IConfirmButton {
    title: string
    onPress: () => void
}

export function ConfirmButton({ title, onPress }: IConfirmButton) {
    return (
        <button
            className="bg-green-500 p-2 rounded"
            onClick={onPress}
        >
            <span className="text-center font-bold text-white">{title}</span>
        </button>
    );
}