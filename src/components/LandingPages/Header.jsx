import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../../Assests/logo.png";
import "../stylesheets/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const usenav = useNavigate();

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="link-styles" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/contact" className="link-styles" onClick={() => setMenuOpen(false)}>
          Contact
        </NavLink>
        <div className="login-btn">
          <button onClick={() => usenav("/login")}>
            <RiLoginBoxLine /> Log In
          </button>
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <RiMenu3Line size={30} />
      </div>
    </div>
  );
};

export default Header;
