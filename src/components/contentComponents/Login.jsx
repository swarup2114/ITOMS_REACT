// login
import React, { useState } from "react";
import "../stylesheets/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const usenav = useNavigate();
  const userEmail = "swarup";
  const [email, setEmail] = useState("");
  // const [useAuth,setUserAuth]=useState(false)

  const isUserAutharized = () => {
    if (email === userEmail) {
      usenav("/dashboard");
    } else {
      alert("User Invalid");
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
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email "
        />
        <button onClick={isUserAutharized}>Validate Account</button>
      </div>
    </div>
  );
};

export default Login;
