import React from "react";

export interface IStatisticsItem {
    type: "HP" | "Ataque" | "Defesa" | "Velocidade" | "Defesa Especial" | "Ataque Especial"
    value: number 
}

export function StatisticsItem({ type, value }: IStatisticsItem) {
    const totalSquares = 10
    const blackSquares = "■".repeat(Math.floor((value / 200) * totalSquares)); 
    const whiteSquares = "□".repeat(totalSquares - Math.floor((value / 200) * totalSquares));
    console.log(type, ": " , value)
    return (
        <p className="text-black text-xs text-right mb-1">
            {type}: {value} {blackSquares}{whiteSquares}
        </p>
    )
}