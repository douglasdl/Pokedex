import React from "react";
import { IStatisticsItem, StatisticsItem } from "./StatisticsItem"

export interface PokemonInfoProps {
    id: number;
    name: string;
    image: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
    type1: string;
    type2: string;
}

interface IStatusInfo {
    pokemonInfo: PokemonInfoProps
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
        <div className="-mt-52 items-end justify-center flex-col ml-1">
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