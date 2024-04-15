import { Text } from "react-native"

export interface IStatisticsItem {
    type: "HP" | "Ataque" | "Defesa" | "Velocidade" | "Defesa Especial" | "Ataque Especial"
    value: number 
}

export function StatisticsItem({ type, value }: IStatisticsItem) {
    const MAX_VALUE = 250
    const totalSquares = 10
    const blackSquares = "■".repeat(Math.floor((value / MAX_VALUE) * totalSquares)); 
    const whiteSquares = "□".repeat(totalSquares - Math.floor((value / MAX_VALUE) * totalSquares));

    return (
        <Text className="text-black text-xs text-right mb-1">
            {type}: {value} {blackSquares}{whiteSquares}
        </Text>
    )
}