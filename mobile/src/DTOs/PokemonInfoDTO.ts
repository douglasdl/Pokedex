import { TypeDTO } from "./TypeDTO"

export type PokemonInfoDTO = {
  id: number
  name: string
  image: string
  hp: number
  attack: number
  defense: number
  speed: number
  specialAttack: number
  specialDefense: number
  type1: TypeDTO
  type2: TypeDTO
}