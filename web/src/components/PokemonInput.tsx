import React from "react"

interface IPokemonInput {
    value: string
}

export function PokemonInput({ value, ...rest }: IPokemonInput) {
    return (
        <input
            type="text" 
            {...rest}
            className="flex-1 h-10 bg-gray-100 text-black p-2 items-center rounded border border-gray-200 w-full"
            value={value}
        />
    )
}