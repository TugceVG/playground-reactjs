import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo3.png";
import { Button } from "./Button";
import { navItems } from "./navItems.js";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navItems.map((navItem) => (
              <li className="nav-item" key={navItem.id}>
                <Link
                  to={navItem.url}
                  className={navItem.cName}
                  onClick={closeMobileMenu}
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
          {button && <Button buttonStyle="btn--outline">Hemen Ara</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
