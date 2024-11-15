import React from 'react'
import DashBoardHeader from './DashBoardComponents/DashBoardHeader'
import Sidebar from './DashBoardComponents/SideBar'
import UserInfo from './DashBoardComponents/UserInfo'


const Dashboard = () => {
  return (
    <div>
      <DashBoardHeader />
      {/* <Sidebar /> */}
      <div >
        <UserInfo />
      </div>


    </div>
  )
}

export default Dashboard

