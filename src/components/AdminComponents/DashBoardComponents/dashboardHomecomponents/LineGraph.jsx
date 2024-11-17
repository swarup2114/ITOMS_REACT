import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  // Chart options and data
  const options = {
    chart: {
      type: 'line',    // Specifies the chart type (line chart)
      height: 350,     // Height of the chart
      zoom: {
        enabled: false,   // Disable zooming
      },
    },
    title: {
      text: 'Monthly Sales Data',  // Title of the chart
      align: 'left',              // Title alignment
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],  // X-axis labels (removed empty string)
    
    },
    grid: {
      borderColor: '#f1f1f1',    // Gridline color
      strokeDashArray: 5,        // Dotted grid lines
    },
    stroke: {
      curve: 'smooth',           // Smooth curve for the line
    },
    markers: {
      size: 0,                   // Size of the markers on the line
      colors: ['#fff'],          // Marker color
      strokeColors: '#3e8e41',   // Stroke color for markers
      strokeWidth: 1,            // Stroke width for markers
    },
  };

  const series = [
    {
      name: 'Sales',           // Series name
      data: [0, 0, 0, 0, 0, 0, 0, 100, 0], // Data for the line
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={400} width="50%" />
    </div>
  );
};

export default LineChart;
