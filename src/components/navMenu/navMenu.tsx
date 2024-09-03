import React from "react";
import { Link } from "react-router-dom"
import MenuList from './menuList';

type handleClickType = (e: React.MouseEvent) => void

const NavMenu = () => {
  const handleClick: handleClickType = (e) => {
    e.preventDefault();
    alert('Login')
  }
  return (
    <nav>
      <ul>
        {MenuList.map((menuItem) => {
          return (<li><Link to={`${menuItem.url}`}>{menuItem.label}</Link></li>)
        })}
      </ul>
      <button type="button" onClick={handleClick}>Entrar</button>
    </nav>
  )
}

export default NavMenu
