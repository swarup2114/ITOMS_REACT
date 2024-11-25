import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "../../../components/stylesheets/dashboardheader.css";

const DashBoardHeader = () => {
  const navigate = useNavigate();
  // const userResponse = JSON.parse(localStorage.getItem("TokenResponse"))
  const [isToggleOpen, setIsToggleOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null); // Track the active menu (language, account, user)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect if screen is mobile or not

  // Update the screen size detection on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // If screen width is <= 768px, set as mobile
    };

    window.addEventListener("resize", handleResize); // Listen for window resizing events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  // Toggle the active menu and close others
  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu)); // Toggle the selected menu
  };

  return (
    <div>
      {/* Apply conditional classes based on screen size */}
      <div
        className={`dashboard-header ${isToggleOpen ? "dashboard-header-hidden" : ""
          } ${isMobile ? "dashboard-header-mobile" : ""}`}
      >
        {/* Language Dropdown */}
        <div>
          <button onClick={() => toggleMenu("language")}>
            English <IoIosArrowDown />
          </button>
          <div
            className={`dropdown-menu ${activeMenu === "language" ? "open" : ""
              }`}
          >
            <p onClick={() => toggleMenu("language")}>Germany</p>
            <p onClick={() => toggleMenu("language")}>French</p>
            <p onClick={() => toggleMenu("language")}>Spain</p>
            <p onClick={() => toggleMenu("language")}>Russian</p>
            <p onClick={() => toggleMenu("language")}>Italy</p>
          </div>
        </div>

        {/* Account Dropdown */}
        <div>
          <button onClick={() => toggleMenu("account")}>
            Ina Payments <IoIosArrowDown />
          </button>
          <div
            className={`dropdown-menu ${activeMenu === "account" ? "open" : ""
              }`}
          >
            <p onClick={() => toggleMenu("account")}>Ina Payments</p>
          </div>
        </div>

        {/* User Info Dropdown */}
        <div>
          <button onClick={() => toggleMenu("user")}>
            <span>
              <img
                src="https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-cartoon-user-avatar-vector-png-image_13572227.png"
                alt="user"
              />
            </span>
            {userResponse.eventData.name}<IoIosArrowDown />
          </button>
          <div className={`user-info ${activeMenu === "user" ? "open" : ""}`}>
            <img
              src="https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-cartoon-user-avatar-vector-png-image_13572227.png"
              alt="user"
            />
            <h6>Swarup</h6>
            <p>swarupt@gmail.com</p>
            <button>Profile</button>
            <button onClick={() => {
              navigate("/");
            }}>Logout</button>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Menu Icon */}
      <div className={`menu ${isMobile ? "menu-mobile" : ""}`}>
        <CiMenuFries className="menu-icon" onClick={handleToggleOpen} />
      </div>
    </div>
  );
};

export default DashBoardHeader;
