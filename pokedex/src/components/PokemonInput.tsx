import { TextInput, TextInputProps } from "react-native"

interface IPokemonInput extends TextInputProps {
    value: string
}

export function PokemonInput({ value, ...rest }: IPokemonInput) {
    return (
        <TextInput 
            {...rest}
            className="flex-1 h-10 bg-gray-100 text-black p-2 items-center rounded border border-gray-200"
            value={value}
        />
    )
}