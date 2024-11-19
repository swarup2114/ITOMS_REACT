import React from 'react';
import PieChartContainer from './PieChartContainer';
import LineChart from './LineGraph';
import PieChart from "../../../LandingPages/AnyChart"

const DashBoardHome = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {/* <PieChartContainer /> */}
      <div style={{ width: '40vw' }}>
        <PieChart />
      </div>
      <LineChart className="line-chart" />
      <LineChart className="line-chart" />
      <LineChart className="line-chart" />
    </div>
  );
}

export default DashBoardHome;
