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
        <NavLink to="/" className="link-styles">
          Home
        </NavLink>
        <NavLink to="/contact" className="link-styles">
          Contact
        </NavLink>
      </div>
      <div>
        <button onClick={() => usenav("/login")}>Log In</button>
      </div>
    </div>
  );
};

export default Header;
