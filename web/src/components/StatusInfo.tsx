import React from "react";
import { IStatisticsItem, StatisticsItem } from "./StatisticsItem"

interface IStatusInfo {
    pokemonInfo: PokemonInfoDTO
}

export function StatusInfo({pokemonInfo}: IStatusInfo) {
    const statusInfoItems: IStatisticsItem[] = [
        {
            type: "HP",
            value: pokemonInfo.hp
        },
        {
            type: "Ataque",
            value: pokemonInfo.attack
        },
        {
            type: "Defesa",
            value: pokemonInfo.defense
        },
        {
            type: "Velocidade",
            value: pokemonInfo.speed
        },
        {
            type: "Ataque Especial",
            value: pokemonInfo.specialAttack
        },
        {
            type: "Defesa Especial",
            value: pokemonInfo.specialDefense
        },
    ]
    return (
        <div className="-mt-56 items-end justify-center flex-col ml-1">
            {
                statusInfoItems.map(item => {
                    return (
                        <StatisticsItem 
                            key={item.type}
                            type={item.type}
                            value={item.value}
                        />
                    )
                })
            }
        </div>
    )
}