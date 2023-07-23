import { api } from "@/libs/axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface IPokemonResult {
  name: string,
  url: string
}

interface IPokemonList {
  count: number
  next: string
  previous: string
  results: IPokemonResult[]
}

export function List() {
  const [pokemons, setPokemons] = useState<IPokemonResult[]>([])
  const [offset, setOffset] = useState<number>(0)
  const totalItems = 1010
  const itemsPerPage = 100

  function capitalizeName(name: string) {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  async function getPokemonsList() {
    try {
      const result = await api.get<IPokemonList>(`/?offset=${offset}&limit=${itemsPerPage}`);
      setPokemons(result.data.results);
    } catch (error) {
      console.error("Error fetching Pokemon list:", error);
    }
  }

  function handleLoadPrevious() {
    if (offset - itemsPerPage >= 0) {
      setOffset(offset - itemsPerPage);
    }
  }

  function handleLoadNext() {
    if (offset + itemsPerPage < totalItems) {
      setOffset(offset + itemsPerPage);
    }
  }

  useEffect(() => {
    getPokemonsList();
  }, [offset]);

  return (
    <div className="flex items-center justify-center h-full flex-col">
      <h1 className="text-yellow-500 text-3xl p-2">{`Pokemons List (${offset+1} ~ ${offset + itemsPerPage}`})</h1>
      <div className="my-4">
        <button
          onClick={handleLoadPrevious}
          disabled={offset === 0}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 disabled:bg-gray-700 disabled:text-gray-800 disabled:cursor-not-allowed"
        >
          {`Previous ${itemsPerPage}`}
        </button>
        <button
          onClick={handleLoadNext}
          disabled={offset + itemsPerPage >= totalItems}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-700 disabled:text-gray-800 disabled:cursor-not-allowed"
        >
          {`Next ${itemsPerPage}`}
        </button>
      </div>
      <ul className="flex w-full flex-wrap gap-2 mx-auto items-center justify-center">
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} className="w-1/5">
            <Link 
              to={`/details/${pokemon.name}`} 
              className="flex p-2  border border-gray-600 rounded-lg"
            >
              {capitalizeName(pokemon.name)}
            </Link>
        </li>
        ))}
      </ul>
    </div>
  );
}