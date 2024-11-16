// login
import React, { useState } from "react";
import "../stylesheets/login.css";
import { useNavigate } from "react-router-dom";
import { GrValidate } from "react-icons/gr";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isUserAuthorized = () => {
    if (emailRegex.test(email)) {
      navigate("/dashboard");
    } else {
      alert("Invalid Email. Please enter a valid email address.");
    }
  };
  return (
    <div className="login-page">
      <div>
        <img
          src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/toms.png"
          alt="logo"
        />
      </div>
      <div className="login-inputs">
        <h1>Welcome back</h1>
        <input
          className="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email "
        />
        <button onClick={isUserAuthorized}>
          {" "}
          <GrValidate /> Validate Email
        </button>
      </div>
    </div>
  );
};

export default Login;
