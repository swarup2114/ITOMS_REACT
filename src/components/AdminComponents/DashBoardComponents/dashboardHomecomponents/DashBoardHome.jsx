import React from 'react';
import PieChartContainer from './PieChartContainer';
import LineChart from './LineGraph';
import PieChart from "../../../LandingPages/AnyChart"

const DashBoardHome = () => {
 

  return (
    <div className="dashboard-home" >
      {/* Pie Chart */}
      <div>
        <PieChartContainer />
      </div>

      {/* Line Charts */}
    
          <LineChart text="New Activated Mobiles" value={[0,1,2,3,4,5,0,0,0]} />
          <LineChart text="New  Mobiles" value={[0,1,2,3,0,5,0,2,0]} />
          <LineChart text=" Activated Mobiles" value={[0,1,2,0,14,5,0,4,0]} />
   
    </div>
  );
}

export default DashBoardHome;
