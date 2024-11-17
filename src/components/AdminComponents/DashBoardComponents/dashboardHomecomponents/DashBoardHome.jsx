import React from 'react';
import PieChartContainer from './PieChartContainer';
import LineChart from './LineGraph';

const DashBoardHome = () => {
  return (
  <div>
      <PieChartContainer/>
      <LineChart className="line-chart" />
  </div>
  );
}

export default DashBoardHome;
