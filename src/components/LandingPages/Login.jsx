// login
import React, { useState } from "react";
import "../stylesheets/login.css";
import { useNavigate } from "react-router-dom";
import { GrValidate } from "react-icons/gr";
import Select, { components } from "react-select";
import { validateLogin } from "../../services/LoginValidate";
import { AuthenticateUser } from "../../services/LoginAuthenticateUser";
import { Token } from "../../services/Token"

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("")
  const [emailResponse, setEmailResponse] = useState({})
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("")
  const [passwordResponse, setPasswordResponse] = useState({})
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState("");
  const [tokenResponse, setTokenResponse] = useState({})
  const [tokenError, setTokenError] = useState("")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [step, setStep] = useState(1)
  const Option = (props) => (
    <components.Option {...props} className="country-option">
      {props.data.label}
    </components.Option>
  );
  const handleChange = (value) => {
    setSelectedOption(value);
  };
  const handleLoginEmail = async () => {
    if (emailRegex.test(email)) {
      try {
        const payload = {
          "event": {
            "eventData": {
              "loginId": email,
              "loginType": "EMAIL"
            },
            "eventType": "LOGIN",
            "eventSubType": "USER_ID_VALIDATE"
          }
        };
        const response = await validateLogin(payload);
        if (response.status == 200) {
          setStep(2)
          setEmailResponse(response.event)
          setEmailError("")
        } else {
          setEmailResponse("")
          setEmailError(response.response.data.message)
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    } else {
      setEmailError("Please Enter Valid Email")
    }
  };
  const handleLoginPassword = async () => {
    try {
      const payload = {
        "event": {
          "eventData": {
            "uid": emailResponse.eventData.uid,
            "password": password
          },
          "eventType": "LOGIN",
          "eventSubType": "USER_CRD_VALIDATE"
        }
      };
      const response = await AuthenticateUser(payload);
      if (response.status == 200) {
        setStep(3)
        setPasswordResponse(response.event)
        const tenants = response.event.eventData.userTenants;
        setOptions(tenants.map((tenant) => ({
          value: tenant.id,
          label: tenant.name,
        })))
        setPasswordError("")
      } else {
        setPasswordResponse("")
        setPasswordError(response.response.data.message)
      }
    } catch (error) {
      console.error('Login with password failed:', error);
    }
  };
  const handleLoginTenant = async () => {
    try {
      const payload = {
        "event": {
          "eventData": {
            "tid": selectedOption.value,
            "uid": passwordResponse.eventData.uid,
            "inaSecretKey": passwordResponse.eventData.inaSecretKey
          },
          "eventType": "LOGIN",
          "eventSubType": "GENERATE_TOKEN"
        }
      };
      const response = await Token(payload);
      if (response.status == 200) {
        navigate("/dashboard");
        setTokenResponse(response.event)
        setTokenError("")
      } else {
        setTokenResponse("")
        setTokenError(response.response.data.message)
      }
    } catch (error) {
      console.error('Login with password failed:', error);
    }
  };
  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      {/* <img src={selectedCountry.icon} alt="s-logo" className="selected-logo" /> */}
      {children}
    </components.SingleValue>
  );

  return (
    <div className="login-page">
      <div>
        <img
          src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/toms.png"
          alt="logo"
        />
      </div>
      {step == 1 && <div className="login-inputs">
        <h1>Welcome back</h1>
        <input
          className="email-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email "
        />
        <button onClick={handleLoginEmail}>
          {" "}
          <GrValidate /> Validate Email
        </button>
        {emailError &&
          <div style={{
            color: "black",
            border: "1px solid red",
            borderRadius: "20px",
            padding: "15px",
            backgroundColor: "#Ffcccb"
          }}>
            {" "}
            {emailError}
          </div>

        }

      </div>}
      {step == 2 && <div className="login-inputs">
        <h1>Welcome back</h1>
        <input
          className="email-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password "
        />
        <button onClick={handleLoginPassword}>
          {" "}
          <GrValidate /> Validate Password
        </button>
        {passwordError &&
          <div style={{
            color: "black",
            border: "1px solid red",
            borderRadius: "20px",
            padding: "15px",
            backgroundColor: "#Ffcccb"
          }}>
            {" "}
            {passwordError}
          </div>

        }
      </div>}
      {step == 3 && <div className="login-inputs">
        <h1>Welcome back</h1>
        <Select
          value={selectedOption}
          options={options}
          onChange={handleChange}
          styles={{
            control: (base) => ({
              ...base,
              width: "400px", // Set the width for the select input
              minWidth: "400px", // Optional: Ensure a minimum width
            }),
            menu: (base) => ({
              ...base,
              width: "400px", // Set the width for the dropdown menu
            }),
            option: (base) => ({
              ...base,
              width: "400px", // Set the width for each dropdown option
            }),
          }}
          components={{
            Option,
            SingleValue
          }}
        />
        <button onClick={handleLoginTenant}>
          {" "}
          <GrValidate /> Login
        </button>
      </div>}

    </div>
  );
};

export default Login;
