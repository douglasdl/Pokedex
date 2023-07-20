import React from "react"

interface IPokemonInput {
    value: string
    onChangeText: (text: string) => void
    placeholder: string
    placeholderTextColor: string
}

export function PokemonInput({ value, onChangeText, placeholder, placeholderTextColor, ...rest }: IPokemonInput) {
    return (
        <input
            type="text" 
            className="flex-1 h-10 bg-gray-100 text-black p-2 items-center rounded border border-gray-200 w-full"
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChangeText(e.target.value)}
            
            {...rest}
        />
    )
}