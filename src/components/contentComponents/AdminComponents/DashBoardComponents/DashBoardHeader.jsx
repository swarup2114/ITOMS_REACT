import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import "../../../stylesheets/dashboardheader.css"

const DashBoardHeader = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const [languageButton,setLanguageButton]=useState(false);
  const [account,setAccount]=useState(false);
  const [userInfo,setUserInfo]=useState(false)

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  const changeLanguage=()=>{
    setLanguageButton(!languageButton)
  }
  const changeAccount=()=>{
    setAccount(!account)
  }

  return (
    <div>
      <div className={`dashbaord-header ${isToggleOpen ? 'dashbaord-header-hidden' : ''}`}>
        <div>
          <button onClick={changeLanguage}>English <IoIosArrowDown /></button>

          {languageButton&& <div>
            <p onClick={changeLanguage}>Germany</p>
            <p onClick={changeLanguage}>French</p>
            <p onClick={changeLanguage}>Spain</p>
            <p onClick={changeLanguage}>Russian</p>
            <p onClick={changeLanguage}>Italy</p>
            </div>
          }
        </div>
        <div>
          <button onClick={changeAccount}>Ina Payments <IoIosArrowDown />
          {account&& <div>
            <p onClick={changeAccount}>Ina Payments</p>
          
            </div>
          }
          </button>
        </div>
        <div>
          <button>
            <span>
              <img src="https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-cartoon-user-avatar-vector-png-image_13572227.png" alt="user" />
            </span>
            swarup! <IoIosArrowDown />
          </button>
          {userInfo&& <div>
            <img src="https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-cartoon-user-avatar-vector-png-image_13572227.png" alt="user" />
            </div>
          }
        </div>
      </div>

      {/* Mobile Toggle Menu Icon */}
      <div className="menu">
        <CiMenuFries className="menu-icon" onClick={handleToggleOpen} />
      </div>
    </div>
  );
};

export default DashBoardHeader;
