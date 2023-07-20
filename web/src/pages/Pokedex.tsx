import React, { useEffect } from "react"

export function Pokedex() {


  useEffect(() => {
    console.log("Pokedex")
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-yellow-500">Pokedex</h1>
    </div>
  )
}
