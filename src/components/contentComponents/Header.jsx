// header
import React from "react";
import "../stylesheets/header.css";
import { NavLink, useNavigate } from "react-router-dom";

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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div>
        <button onClick={() => usenav("/login")}>Log-in</button>
      </div>
    </div>
  );
};

export default Header;
