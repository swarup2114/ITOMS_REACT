import React from "react";
import * as FaIcons from "react-icons/fa";
import "../../stylesheets/userinfo.css";
import userImage from "../../../images/userImage.png"
import { PiCardsThreeFill } from "react-icons/pi";

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
              <PiCardsThreeFill
                style={{ backgroundColor: "#bfefff" }}
              />
              <h3>100</h3>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-details">
            <p>Merchants</p>
            <div className="card-stat">
              <FaIcons.FaStore style={{ backgroundColor: "#bfefff" }} />
              <h3>20</h3>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-details">
            <p>Applications</p>
            <div className="card-stat">
              <FaIcons.FaMobile style={{ backgroundColor: "#bfefff" }} />
              <h3>10</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
