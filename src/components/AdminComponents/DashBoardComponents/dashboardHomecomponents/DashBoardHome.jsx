import React from 'react';
import PieChartContainer from './PieChartContainer';
import LineChart from './LineGraph';

const DashBoardHome = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <PieChartContainer />
      <LineChart className="line-chart" />
      <LineChart className="line-chart" />
      <LineChart className="line-chart" />
    </div>
  );
}

export default DashBoardHome;
