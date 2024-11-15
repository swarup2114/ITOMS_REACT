export const sidebarData = [
  {
    id: 1,
    title: "Home",
    icon: "FaHome", // Main menu icon
  
  },
  {
    id: 2,
    title: "Administration",
    icon: "FaRegUser", // Main menu icon
    items: [
      { name: "Overview", icon: "FaChartBar" }, // Dropdown item icon
      { name: "Statistics", icon: "FaChartLine" }
    ]
  },
  {
    id: 3,
    title: "TMS",
    icon: "FaLaptop", // Main menu icon
    items: [
      { name: "All Users", icon: "FaUsers" }, // Dropdown item icon
      { name: "Roles", icon: "FaUserShield" }
    ]
  },
  {
    id: 4,
    title: "Device Management",
    icon: "FaMobileAlt", // Main menu icon
    items: [
      { name: "General", icon: "FaWrench" }, // Dropdown item icon
      { name: "Security", icon: "FaShieldAlt" }
    ]
  },
  {
    id: 5,
    title: "Reports",
    icon: "FaRegAddressCard", // Main menu icon
    items: [
      { name: "Reports", icon: "FaFileAlt" }, // Dropdown item icon
      { name: "Performance", icon: "FaTachometerAlt" }
    ]
  }
];
