import React, { useState } from "react";
import { MenuButton } from "./MenuButton";

export function SideMenu() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleButtonClick = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div
      className='flex h-full w-full flex-row items-center justify-evenly bg-blue-800'
    >
      <div className="w-1/3">
        <MenuButton icon="home" color="#ffffff" size={60} active={currentPage === 'home'} onClick={() => handleButtonClick('home')} />
      </div>
      <div className="w-1/3">
        <MenuButton icon="list" color="#ffffff" size={60} active={currentPage === 'list'} onClick={() => handleButtonClick('list')} />
      </div>
      <div className="w-1/3">
        <MenuButton icon="details"   color="#ffffff" size={60} active={currentPage === 'details'} onClick={() => handleButtonClick('details')} />
      </div>
    </div>
  )
}
