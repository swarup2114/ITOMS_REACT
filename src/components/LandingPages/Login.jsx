import React, { useState } from "react";
import "../stylesheets/login.css";
import { useNavigate } from "react-router-dom";
import { GrValidate } from "react-icons/gr";
import Select, { components } from "react-select";
import { validateLogin } from "../../services/LoginValidate";
import { AuthenticateUser } from "../../services/LoginAuthenticateUser";
import { Token } from "../../services/Token";
import { useDispatch, useSelector } from "react-redux";
import { setUserId, setInaSecretKey, setTenantId } from "../../Redux/AuthSlice";
import loginBg from "../../images/login_bg.jpeg"
import LoginIcon from "../../images/login_icon.jpeg"

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, inaSecretKey, tenantId } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [tokenError, setTokenError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [step, setStep] = useState(1);

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
          event: {
            eventData: {
              loginId: email,
              loginType: "EMAIL",
            },
            eventType: "LOGIN",
            eventSubType: "USER_ID_VALIDATE",
          },
        };
        const response = await validateLogin(payload);
        if (response.status == 200) {
          setStep(2);
          dispatch(setUserId({ userId: response.event.eventData.uid }));
          setEmailError("");
        } else {
          setEmailError(response.response?.data?.message || "Failed to validate email.");
        }
      } catch (error) {
        setEmailError("Login failed: " + (error.response?.data?.message || "Unknown error."));
      }
    } else {
      setEmailError("Please Enter Valid Email");
    }
  };

  const handleLoginPassword = async () => {
    if (!userId) {
      setPasswordError("User ID is missing. Please validate email first.");
      return;
    }
    try {
      const payload = {
        event: {
          eventData: {
            uid: userId,
            password: password,
          },
          eventType: "LOGIN",
          eventSubType: "USER_CRD_VALIDATE",
        },
      };
      const response = await AuthenticateUser(payload);
      if (response.status == 200) {
        setStep(3);
        const tenants = response.event.eventData.userTenants;
        setOptions(
          tenants.map((tenant) => ({
            value: tenant.id,
            label: tenant.name,
          }))
        );
        dispatch(setTenantId({ tenantId: response.event.eventData.userTenants }))
        dispatch(setInaSecretKey({ inaSecretKey: response.event.eventData.inaSecretKey }));
        setPasswordError("");
      } else {
        setPasswordError(response.response?.data?.message || "Failed to validate password.");
      }
    } catch (error) {
      setPasswordError("Login failed: " + (error.response?.data?.message || "Unknown error."));
    }
  };

  const handleLoginTenant = async () => {
    if (!selectedOption) {
      setTokenError("Please select a tenant.");
      return;
    }
    try {
      const payload = {
        "event": {
          "eventData": {
            "tid": selectedOption.value,
            "uid": userId,
            "inaSecretKey": inaSecretKey
          },
          "eventType": "LOGIN",
          "eventSubType": "GENERATE_TOKEN"
        }
      };
      const response = await Token(payload);
      if (response.status == 200) {
        dispatch(setTenantId({ tenantId: selectedOption.value }));
        navigate("/dashboard");
        setTokenError("");
      } else {
        setTokenError(response.response?.data?.message || "Failed to generate token.");
      }
    } catch (error) {
      setTokenError("Login failed: " + (error.response?.data?.message || "Unknown error."));
    }
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>{children}</components.SingleValue>
  );

  return (
    // <div className="login-page">
    //   <div>
    //     <img
    //       src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/toms.png"
    //       alt="logo"
    //     />
    //   </div>
    //   {step === 1 && (
    //     <div className="login-inputs">
    //       <h1>Welcome back</h1>
    //       <input
    //         className="email-input"
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Enter Your Email"
    //       />
    //       <button onClick={handleLoginEmail}>
    //         <GrValidate /> Validate Email
    //       </button>
    //       {emailError && (
    //         <div
    //           style={{
    //             color: "black",
    //             border: "1px solid red",
    //             borderRadius: "20px",
    //             padding: "15px",
    //             backgroundColor: "#Ffcccb",
    //           }}
    //         >
    //           {emailError}
    //         </div>
    //       )}
    //     </div>
    //   )}
    //   {step === 2 && (
    //     <div className="login-inputs">
    //       <h1>Welcome back</h1>
    //       <input
    //         className="email-input"
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Enter Your Password"
    //       />
    //       <button onClick={handleLoginPassword}>
    //         <GrValidate /> Validate Password
    //       </button>
    //       {passwordError && (
    //         <div
    //           style={{
    //             color: "black",
    //             border: "1px solid red",
    //             borderRadius: "20px",
    //             padding: "15px",
    //             backgroundColor: "#Ffcccb",
    //           }}
    //         >
    //           {passwordError}
    //         </div>
    //       )}
    //     </div>
    //   )}
    //   {step === 3 && (
    //     <div className="login-inputs">
    //       <h1>Welcome back</h1>
    //       <Select
    //         value={selectedOption}
    //         options={options}
    //         onChange={handleChange}
    //         styles={{
    //           control: (base) => ({
    //             ...base,
    //             width: "400px",
    //           }),
    //           menu: (base) => ({
    //             ...base,
    //             width: "400px",
    //           }),
    //           option: (base) => ({
    //             ...base,
    //             width: "400px",
    //           }),
    //         }}
    //         components={{
    //           Option,
    //           SingleValue,
    //         }}
    //       />
    //       <button onClick={handleLoginTenant}>
    //         <GrValidate /> Login
    //       </button>
    //       {tokenError && (
    //         <div
    //           style={{
    //             color: "black",
    //             border: "1px solid red",
    //             borderRadius: "20px",
    //             padding: "15px",
    //             backgroundColor: "#Ffcccb",
    //           }}
    //         >
    //           {tokenError}
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </div>
    <div className="entire-login-flow">
      <div className="login-page">
        <div className="login-container">
          {/* Left Section */}
          <div className="illustration">
            <img
              src={loginBg}
              alt="Illustration"
              className="illustration-image"
            />
          </div>

          {/* Right Section */}
          <div className="login-form">
            <div className="avatar">
              <img
                src={LoginIcon}
                alt="User "
                className="avatar-image"
              />
            </div>
            <h1>WELCOME</h1>
            <form className="form-style">
              {step === 1 &&
                <>
                  <div className="input-group">
                    {/* <i className="icon-user"></i> */}
                    {/* <input type="text" placeholder="Enter Your EmailID" /> */}
                    <input
                      className="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <button type="submit" className="login-button" onClick={(e) => {
                    e.preventDefault();
                    handleLoginEmail();
                  }}>
                    Validate Email
                  </button>
                </>
              }
              {step === 2 &&
                <>
                  <div className="input-group">
                    <i className="icon-user"></i>
                    <input
                      className="email-input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                    />

                  </div>
                  <button type="submit" className="login-button" onClick={(e) => {
                    e.preventDefault();
                    handleLoginPassword();
                  }}>
                    Login
                  </button>
                </>
              }
              {step === 3 && (
                <div className="login-inputs">
                  <h1>Welcome back</h1>
                  <Select
                    value={selectedOption}
                    options={options}
                    placeholder="Select Tenant"
                    onChange={handleChange}
                    styles={{
                      control: (base) => ({
                        ...base,
                        width: "430px",
                      }),
                      menu: (base) => ({
                        ...base,
                        width: "430px",
                      }),
                      option: (base) => ({
                        ...base,
                        width: "430px",
                      }),
                    }}
                    components={{
                      Option,
                      SingleValue,
                    }}
                  />
                  <button className="login-button-tenant" onClick={(e) => {
                    e.preventDefault();
                    handleLoginTenant();
                  }}>
                    <GrValidate /> Login
                  </button>
                  {tokenError && (
                    <div
                      style={{
                        color: "black",
                        border: "1px solid red",
                        borderRadius: "20px",
                        padding: "15px",
                        backgroundColor: "#Ffcccb",
                      }}
                    >
                      {tokenError}
                    </div>
                  )}
                </div>
              )}
              {/* <div className="input-group">
                    <i className="icon-lock"></i>
                    <input type="password" placeholder="Password" />
                </div> */}
              {/* <div className="options">
                    <a href="/forgot-password">Forgot Password?</a>
                </div> */}


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
