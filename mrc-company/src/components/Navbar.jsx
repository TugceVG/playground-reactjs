import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar.css";
import logo from "../assets/logo3.png";
import { navItems } from "./navItems.js";

function Navbar() {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleHamburgerMenu = () => setIsHamburgerMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setClick(false);

  const getSelectedClassName = (navItem) => {
    const isSelected = navItem.url === pathname;
    return isSelected ? "nav-item selected" : "nav-item";
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src={logo} />
      </Link>
      <div
        onClick={toggleHamburgerMenu}
        className={isHamburgerMenuOpen ? "fas fa-times" : "fas fa-bars"}
      />
      <ul className={isHamburgerMenuOpen ? "nav-menu open" : "nav-menu"}>
        {navItems.map((navItem) => (
          <li className={getSelectedClassName(navItem)} key={navItem.id}>
            <Link
              to={navItem.url}
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
