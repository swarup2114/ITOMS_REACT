// header
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import "../stylesheets/header.css";

const Header = () => {
  const usenav = useNavigate();

  return (
    <div className="header">
      <div>
        <img
          src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/ina-logo.png"
          alt="logo"
        />
      </div>
      <div className="links">
        <NavLink to="/" className="link-styles">
          Home
        </NavLink>
        <NavLink to="/contact" className="link-styles">
          Contact
        </NavLink>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={() => usenav("/login")}>
        <RiLoginBoxLine /> Log In
      </button>
    </div>
    </div>
  );
};

export default Header;
