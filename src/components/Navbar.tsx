import React, {FC} from "react";
import {NavLink, BrowserRouter} from "react-router-dom"

export const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px-1">
        <a href="#" className="brand-logo">React+Typescript</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/">Список дел</NavLink></li>
          <li><NavLink to="/info">Информация</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}