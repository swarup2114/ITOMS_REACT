import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({text,value}) => {

  const options = {
    chart: {
      type: 'line',
      height: 350,
      zoom: { enabled: false },
    },
    title: {
      text: text,
      align: 'left',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    grid: {
      borderColor: '#f1f1f1',
      strokeDashArray: 5,
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 0,
      colors: ['#fff'],
      strokeColors: '#3e8e41',
      strokeWidth: 1,
    },
  };

  const series = [
    {
      name: 'Sales',
      data: [...value],
    },
  ];

  return (
    <div className="line-chart">
      <ReactApexChart options={options} series={series} type="line" height={500} />
    </div>
  );
};

export default LineChart;
