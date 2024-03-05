import "./navbar.css";
import { menuItems } from "./menuItems";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar-items">
      <h1 className="navbar-logo">MRC</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <button>
          {" "}
          <i className={menuItems[5].icon}></i> Hemen Ara
        </button>
      </ul>
    </nav>
  );
}
