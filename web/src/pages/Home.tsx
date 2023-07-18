import React, { useEffect } from "react"

export function Home() {


  useEffect(() => {
    console.log("HOME")
  }, [])

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-yellow-500">Home</h1>
    </div>
  )
}
