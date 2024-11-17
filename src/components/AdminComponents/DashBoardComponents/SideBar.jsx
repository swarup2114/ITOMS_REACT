import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import "../../../components/stylesheets/sidebar.css";
import { sidebarData } from "../../../../src/Data/sidebar";

// Function to get the icon dynamically
const getIcon = (iconName) => {
  const IconComponent = FaIcons[iconName] || FaIcons.FaRegUser; // Default to FaRegUser if not found
  return <IconComponent />;
};

const Sidebar = () => {
  const [activeMenuId, setActiveMenuId] = useState(null);

  const toggleDropdown = (menuId) => {
    setActiveMenuId((prevState) => (prevState === menuId ? null : menuId));
  };

  return (
    <div className="sidebar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="http://inatms.s3-website-us-east-1.amazonaws.com/assets/img/logo-only.png"
          alt="logo"
        />
        <h2>ITOMS</h2>
      </div>

      {sidebarData.map((menu) => (
        <div className="sidebar-item" key={menu.id}>
          <div
            className="sidebar-header"
            onClick={() => {
              // Only toggle dropdown if there are items in the menu
              if (menu.items && menu.items.length > 0) {
                toggleDropdown(menu.id);
              }
            }}
          >
            {/* Main menu item icon and title */}
            <div>
              <span className="sidebar-item-icon">{getIcon(menu.icon)}</span>
              <span className="sidebar-item-title">{menu.title}</span>
            </div>
            {/* Show chevron only if there are items */}
            {menu.items && menu.items.length > 0 && (
              <FaChevronDown
                className={`chevron ${activeMenuId === menu.id ? "open" : ""}`}
              />
            )}
          </div>

          {activeMenuId === menu.id && menu.items && (
            <div className="dropdown-menu">
              <ul>
                {menu.items.map((item, index) => (
                  <li key={index}>
                    {/* Dropdown item icon */}
                    <span className="sidebar-item-icon">
                      {getIcon(item.icon)}{" "}
                      {/* Render icon for dropdown items */}
                    </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
