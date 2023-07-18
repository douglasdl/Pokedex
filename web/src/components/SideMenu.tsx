import React, { useState } from "react";
import { MenuButton } from "./MenuButton";

export function SideMenu() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleButtonClick = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div
      className='flex h-full w-full flex-row items-center justify-evenly'
    >
      <MenuButton icon="home" color="#ffffff" size={60} active={currentPage === 'home'} onClick={() => handleButtonClick('home')} />
      <MenuButton icon="pokedex" color="#ffffff" size={60} active={currentPage === 'pokedex'} onClick={() => handleButtonClick('configuration')} />
      <MenuButton icon="pokedex2" color="#ffffff" size={60} active={currentPage === 'pokedex2'} onClick={() => handleButtonClick('graph')} />
    </div>
  )
}
