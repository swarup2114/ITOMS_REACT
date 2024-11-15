import React from 'react';
import * as FaIcons from 'react-icons/fa';
import "../../../stylesheets/DashboardPageStyles/userinfo.css";

const UserInfo = () => {
  return (
   <div>
     <div className='user-info-data-conatiner'>
      <div className='card'>
        <div className="card-header">
          <img src="/userImage.png" alt="User" />
          <div className="card-info">
            <p>Hello ! </p>
            <h4>Swarup</h4>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className="card-details">
          <p>Terminals</p>
          <div className="card-stat">
            <FaIcons.FaTerminal style={{backgroundColor:"rgb(0, 123, 255)"}} />
            <h3>100</h3>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className="card-details">
          <p>Merchants</p>
          <div className="card-stat">
            <FaIcons.FaStore  style={{backgroundColor:"#198754"}} />
            <h3>20</h3>
          </div>
        </div>
      </div>
      <div className='card'>
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
