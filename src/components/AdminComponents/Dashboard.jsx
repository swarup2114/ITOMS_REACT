import React from "react";
import DashBoardHeader from "./DashBoardComponents/DashBoardHeader";
// import Sidebar from './DashBoardComponents/SideBar'
import UserInfo from "./DashBoardComponents/UserInfo";

// import FormPropsTextFields from "../../LandingScreens/AdminComponents/DashBoardComponents/DetailsUpdate";
import Sidebar from "./DashBoardComponents/SideBar";
import DataTable from "./Title";
import DashBoardHome from "./DashBoardComponents/dashboardHomecomponents/DashBoardHome";
const Dashboard = () => {
  return (
    <div>
      <DashBoardHeader />
      <Sidebar />
      <div className="dashboard-view">
        <UserInfo />
        <DashBoardHome />
      </div>
    </div>
  );
};

export default Dashboard;
