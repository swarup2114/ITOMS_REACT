import React from "react";
import * as FaIcons from "react-icons/fa";
import "../../stylesheets/userinfo.css";
import userImage from "../../../images/userImage.png"

const UserInfo = () => {
  const userResponse = JSON.parse(localStorage.getItem("TokenResponse"))

  // console.log(userName, "JSON.parse(userName).name")
  return (
    <div>
      <div className="user-info-data-conatiner">
        <div className="card">
          <div className="card-header">
            <img src={userImage} alt="User" />
            <div className="card-info">
              <p>Hello ! </p>
              <h4>{userResponse.eventData.name}</h4>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-details">
            <p>Terminals</p>
            <div className="card-stat">
              <FaIcons.FaTerminal
                style={{ backgroundColor: "rgb(0, 123, 255)" }}
              />
              <h3>100</h3>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-details">
            <p>Merchants</p>
            <div className="card-stat">
              <FaIcons.FaStore style={{ backgroundColor: "#198754" }} />
              <h3>20</h3>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-details">
            <p>Applications</p>
            <div className="card-stat">
              <FaIcons.FaMobile />
              <h3>10</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
