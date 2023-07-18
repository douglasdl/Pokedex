import React, { useEffect } from "react"

export function Pokedex2() {


  useEffect(() => {
    console.log("Pokedex 2")
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-yellow-500">Pokedex2</h1>
    </div>
  )
}
