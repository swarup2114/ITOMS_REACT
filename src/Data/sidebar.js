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
      { name: "User", icon: "FaChartBar" }, // Dropdown item icon
      { name: "Role", icon: "FaChartLine" },
      { name: "Alert", icon: "FaChartLine" },
      { name: "Tenants", icon: "FaChartLine" },
      { name: "Hierarchies", icon: "FaChartLine" },
      { name: "Merchant", icon: "FaChartLine" },
    ]
  },
  {
    id: 3,
    title: "TMS",
    icon: "FaLaptop", // Main menu icon
    items: [
      { name: "Terminal", icon: "FaUsers" }, // Dropdown item icon
      { name: "Deployment", icon: "FaUserShield" },
      { name: "Resources", icon: "FaUserShield" },
      { name: "Parameters", icon: "FaUserShield" }
      
    ]
  },
  {
    id: 4,
    title: "Device Management",
    icon: "FaMobileAlt", // Main menu icon
    items: [
      { name: "Device", icon: "FaWrench" }, // Dropdown item icon
      { name: "Model", icon: "FaShieldAlt" }
    ]
  },
  {
    id: 5,
    title: "Reports",
    icon: "FaRegAddressCard", // Main menu icon
    items: [
      { name: "Device Conn Report", icon: "FaFileAlt" }, 
      { name: "Device Heart Beat History", icon: "FaTachometerAlt" },
      { name: "Device Search Report", icon: "FaFileAlt" }, 
      { name: "Device Software Status", icon: "FaFileAlt" }, 
      { name: "Parameters Status", icon: "FaFileAlt" }, 
      { name: "Swap Device Status", icon: "FaFileAlt" }, 
      { name: "System Audit Report", icon: "FaFileAlt" }, 
    ]
  }
];
