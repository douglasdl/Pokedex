import React from "react";
import { NavLink } from "react-router-dom";

interface IMenuButton {
  icon?: 'home' | 'list' | 'details'
  color: string
  size?: number
  active?: boolean
  onClick?: () => void;
  pokemonName?: string;
}

export function MenuButton({
  icon = 'home',
  color,
  pokemonName = 'bulbasaur',
  onClick
}: IMenuButton) {
  const link = icon === 'home' ? '/' : icon === 'details' && pokemonName ? `/details/${pokemonName}` : `/${icon.toLowerCase()}`;

  function getIconComponent(icon: string) {
    switch (icon) {
      case 'list':
        return <span color={color}>LIST</span>
      case 'details':
        return <span color={color}>DETAILS</span>
      case 'home':
      default:
        return <span color={color}>HOME</span>
    }
  }

  return (
    <NavLink to={link}>
      <div className="p-4 h16 w-full hover:font-bold hover:bg-black/25 border-t-2 border-b-2 border-transparent hover:border-b-white" onClick={onClick}>{getIconComponent(icon)}</div>
    </NavLink>
  )
}