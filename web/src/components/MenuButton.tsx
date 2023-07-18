import React from "react";
import { NavLink } from "react-router-dom";

interface IMenuButton {
  icon?: 'home' | 'pokedex' | 'pokedex2'
  color: string
  size?: number
  active?: boolean
  onClick?: () => void;
}

export function MenuButton({
  icon = 'home',
  color,
  onClick
}: IMenuButton) {
  const link = icon === 'home' ? '/' : `/${icon.toLowerCase()}`

  function getIconComponent(icon: string) {
    switch (icon) {
      case 'pokedex':
        return <span color={color}>POKEDEX</span>
      case 'pokedex2':
        return <span color={color}>POKEDEX 2</span>
      case 'home':
      default:
        return <span color={color}>HOME</span>
    }
  }

  return (
    <NavLink to={link}>
      <div className="h16 w-16" onClick={onClick}>{getIconComponent(icon)}</div>
    </NavLink>
  )
}
