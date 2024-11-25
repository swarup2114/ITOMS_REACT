import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart = () => {
    const chartRef = useRef(null); // Reference to the DOM element for the chart
    const chartInstance = useRef(null); // Reference to the ECharts instance

    const lightColors = [
      "#F08080", "#FF6A6A",  // Darker pastels
      "#40E0D0", "#7FFFD4", "#4682B4", "#5F9EA0", "#8A2BE2", "#A9A9A9", // Darker blues/greens/purples
      "#FF1493", "#DAA520", "#A52A2A", "#8B4513", "#FF6347", "#B22222", // Darker reds/oranges
      "#228B22", "#6A5ACD", "#32CD32", "#FFD700", "#F4A300", "#BDB76B", // Darker greens/pinks
      "#A0522D", "#9932CC", "#800080", "#D2691E", "#D2B48C", "#DDA0DD", // Darker browns/pinks
      "#8B0000", "#800000", "#B8860B", "#FF6347", "#B3B3B3", "#A2A2A2"  // Darker reds/browns/grays
  ];
  
    const ItemData = [
        { value: 3335, name: 'Direct' },
        { value: 100, name: 'Email' },
        { value: 2000, name: 'phone' },
        { value: 390, name: 'sms' },
        { value: 340, name: 'chat' },
    ];

    useEffect(() => {
        // Initialize the ECharts instance
        chartInstance.current = echarts.init(chartRef.current);

        // Define the Pie chart options with custom colors
        const pieOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
            },
            legend: {
                orient: 'horizontal',
                top: '80%', // Adjust this to create space between pie chart and legend
                left: 'center', // Center the legend horizontally
                data: [
                    'Direct', 'Email', 'phone', 'phone', 'sms', 'chat'
                ],
            },
            series: [
                {
                    name: 'Sales',
                    type: 'pie',
                    radius: ['50%', '60%'],
                    center: ['50%', '40%'], // Adjust the pie chart position to give space for the legend
                    data: ItemData.map((item, index) => ({
                        ...item,
                        itemStyle: { color: lightColors[index % lightColors.length] },
                    })),
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                        },
                    },
                },
            ],
        };

        // Set the options to the chart instance
        chartInstance.current.setOption(pieOption);

        // Resize the chart when the window is resized
        window.addEventListener('resize', () => {
            chartInstance.current.resize();
        });

        // Cleanup the chart instance on unmount
        return () => {
            chartInstance.current.dispose();
            window.removeEventListener('resize', () => {
                chartInstance.current.resize();
            });
        };
    }, []); // Empty array ensures this effect runs only once (on mount)

    return (
        <div>
           
            <div 
                ref={chartRef}
                style={{
                    width: '100%',
                    height: '500px',
                
                    display: 'flex',
                    justifyContent:"center",
                    backgroundColor:"#f6f9fd"
                 
                }}
            />
        </div>
    );
};

export default PieChart;
