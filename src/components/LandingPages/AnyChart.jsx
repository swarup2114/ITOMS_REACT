// import React, { useState, useMemo } from 'react';
// import { Pie } from '@ant-design/plots';

// const DemoPie = ({ data, onReady }) => {
//     const totalValue = useMemo(() => {
//         return data.reduce((sum, item) => sum + item.value, 0);
//     }, [data]);
//     const customColors = ['#FF0000', '#FF33A6', '#FFC300', '#900C3F', '#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#33CCFF'];

//     // Dynamically map colors based on the data's index
//     const colorMapping = data.map((_, index) => customColors[index % customColors.length]);

//     const config = useMemo(
//         () => ({
//             data,
//             angleField: 'value',
//             colorField: 'type',
//             color: colorMapping,
//             radius: 0.8,
//             innerRadius: 0.6,
//             label: {
//                 text: `value`,
//                 content: '{type}',
//                 position: 'outside',
//                 style: {
//                     fontSize: 14, // Customize font size
//                     fontWeight: 'bold', // Customize font weight
//                     fill: '#0000FF', // Customize label color
//                 },
//             },
//             tooltip: {
//                 showTitle: true, // Disable default title
//                 showMarkers: true, // Disable markers in the tooltip
//                 // formatter: (datum) => ({
//                 //     name: datum.type,
//                 //     value: `${datum.value} (${((datum.value / totalValue) * 100).toFixed(2)}%)`, // Calculate and show percentage
//                 // }),
//                 formatter: (datum) => {
//                     console.log(datum);
//                     if (!datum || !datum.value) return { name: datum.type, value: 'N/A' };
//                     return {
//                         name: datum.type,
//                         value: `${datum.value} (${((datum.value / totalValue) * 100).toFixed(2)}%)`,
//                     };
//                 },


//             },
//             interactions: [
//                 { type: 'element-active' }, // Hover interaction to highlight
//             ],
//             onReady,
//         }),
//         [data, totalValue, onReady],
//     );
//     return <Pie {...config} />;
// };

// const DemoMemo = () => {
//     const [data, setData] = useState([
//         { type: 'first', value: 27 },
//         { type: 'second', value: 25 },
//         { type: 'third', value: 18 },
//         { type: 'fourth', value: 15 },
//         { type: 'fifth', value: 10 },
//         { type: 'sixth', value: 25 },
//         { type: 'seventh', value: 15 },
//         { type: 'eigth', value: 18 },
//         { type: 'ninth', value: 5 },
//     ]);

//     const updateData = () =>
//         setData((prevData) =>
//             prevData.map((d) => ({ ...d, value: Math.floor(Math.random() * 100) })),
//         );

//     return (
//         <div>
//             <DemoPie data={data} onReady={({ chart }) => { }} />
//         </div>
//     );
// };
// export default DemoMemo



// import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { Pie } from '@ant-design/plots';

// const DemoPie = () => {
//     const data = [
//         {
//             type: 'Ações',
//             value: 27,
//         },
//         {
//             type: 'Fundos Imobiliarios',
//             value: 40,
//         },
//         {
//             type: 'Renda Fixa',
//             value: 18,
//         },
//         {
//             type: 'Internacional',
//             value: 15,
//         },
//         {
//             type: 'Açõeshgfh',
//             value: 27,
//         },
//         {
//             type: 'Fundos Imobiliariosgfhgh',
//             value: 40,
//         },
//         {
//             type: 'Renda Fixahgj',
//             value: 18,
//         },
//         {
//             type: 'Internacionalhgjhgh',
//             value: 15,
//         },
//     ];
//     const config = {
//         appendPadding: 10,
//         data,
//         theme: 'dark',
//         angleField: 'value',
//         colorField: 'type',
//         radius: 0.8,
//         innerRadius: 0.64,
//         color: ({ type }) => {
//             // Map the `type` values to specific colors
//             const colorMap = {
//                 'Ações': '#FF5733',
//                 'Fundos Imobiliarios': '#33FF57',
//                 'Renda Fixa': '#3357FF',
//                 'Internacional': '#FF33A1',
//                 'Açõeshgfh': '#000000'
//             };
//             return colorMap[type] || '#000'; // Default color for unmatched types
//         },
//         // meta: {
//         //     value: {
//         //         formatter: (v) => `${v}%`,
//         //     },
//         // },
//         label: {
//             text: `value`,
//             content: '{type}',
//             position: 'outside',
//             style: {
//                 fontSize: 14, // Customize font size
//                 fontWeight: 'bold', // Customize font weight
//                 fill: '#0000FF', // Customize label color
//             },
//         },
//         statistic: {
//             title: {
//                 offsetY: -8,
//                 style: {
//                     color: '#fff',
//                 },
//             },
//             content: {
//                 style: {
//                     color: '#fff',
//                 },
//                 offsetY: -4,
//             },
//         },
//         pieStyle: {
//             lineWidth: 0,
//         },
//     };
//     return <Pie {...config} />;
// };

// export default DemoPie;

// import React, { useEffect, useRef } from 'react';
// import * as echarts from 'echarts';

// const PieChart = () => {
//     const chartRef = useRef(null);  // Reference to the DOM element for the chart
//     const chartInstance = useRef(null);  // Reference to the ECharts instance

//     useEffect(() => {
//         // Initialize the ECharts instance
//         chartInstance.current = echarts.init(chartRef.current);

//         // Define the Pie chart options
//         const pieOption = {
//             // title: {
//             //     text: 'Sales Distribution',
//             //     subtext: '2024',
//             //     left: 'center',
//             // },
//             tooltip: {
//                 trigger: 'item',
//                 formatter: '{a} <br/>{b}: {c} ({d}%)',
//             },
//             legend: {
//                 orient: 'horizontal',
//                 center: 'center',
//                 data: ['Direct', 'Email', 'Affiliate', 'Video', 'a', 'c', 'd', '1', '2', '2222222', '2222'],
//             },
//             series: [
//                 {
//                     name: 'Sales',
//                     type: 'pie',
//                     radius: ['50%', '60%'],

//                     center: ['50%', '60%'],
//                     data: [
//                         { value: 335, name: 'Direct' },
//                         { value: 310, name: 'Email' },
//                         { value: 234, name: 'Affiliate' },
//                         { value: 135, name: 'Video' },
//                         { value: 1548, name: '2222' },
//                         { value: 335, name: '2222222' },
//                         { value: 310, name: '222' },
//                         { value: 234, name: '22' },
//                         { value: 135, name: '2' },
//                         { value: 1548, name: '1' },
//                         { value: 335, name: 'gfg' },
//                         { value: 310, name: 'fgf' },
//                         { value: 234, name: 'fgg' },
//                         { value: 135, name: 'jhhg' },
//                         { value: 1548, name: 'gghhfg' },
//                         { value: 335, name: '222762222' },
//                         { value: 310, name: '222767' },
//                         { value: 234, name: '2442' },
//                         { value: 135, name: '233' },
//                         { value: 1548, name: '14' },
//                     ],
//                     emphasis: {
//                         itemStyle: {
//                             shadowBlur: 10,
//                             shadowOffsetX: 0,
//                             shadowColor: 'rgba(0, 0, 0, 0.5)',
//                         },
//                     },
//                 },
//             ],
//         };

//         // Set the options to the chart instance
//         chartInstance.current.setOption(pieOption);

//         // Resize the chart when the window is resized
//         window.addEventListener('resize', () => {
//             chartInstance.current.resize();
//         });

//         // Cleanup the chart instance on unmount
//         return () => {
//             chartInstance.current.dispose();
//             window.removeEventListener('resize', () => {
//                 chartInstance.current.resize();
//             });
//         };
//     }, []); // Empty array ensures this effect runs only once (on mount)

//     return (
//         <div>
//             <h2>Pie Chart Example</h2>
//             <div
//                 ref={chartRef}
//                 style={{ width: '100%', height: '400px', marginTop: '20px' }}
//             />
//         </div>
//     );
// };

// export default PieChart;

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart = () => {
    const chartRef = useRef(null); // Reference to the DOM element for the chart
    const chartInstance = useRef(null); // Reference to the ECharts instance
    const lightColors = [
        "#FFB6C1", "#FFCCCB", "#FFDAB9", "#FFE4B5", "#FFEFD5",
        "#FFFACD", "#E0FFFF", "#AFEEEE", "#B0E0E6", "#ADD8E6",
        "#D8BFD8", "#DDA0DD", "#FFC0CB", "#F0E68C", "#E6E6FA",
        "#F5DEB3", "#FFF0F5", "#F0FFF0", "#F5F5DC", "#FDF5E6",
        "#FAF0E6", "#FFF5EE", "#E3F2FD", "#E8F5E9", "#F1F8E9",
        "#FFF8E1", "#FFEBEE", "#FCE4EC", "#E1F5FE", "#E3F2FD",
        "#E8F5E9", "#F1F8E9", "#F9FBE7", "#FFFDE7", "#FFF8E1",
        "#FFEBEE", "#FCE4EC", "#F3E5F5", "#EDE7F6", "#E8EAF6",
        "#E3F2FD", "#E8F5E9", "#E0F2F1", "#E0F7FA", "#E1F5FE",
        "#ECEFF1", "#FBE9E7", "#FFCCBC", "#FFCC80", "#FFF3E0"
    ];
    const ItemData = [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Affiliate', itemStyle: { color: '#3357FF' } },
        { value: 135, name: 'Video', itemStyle: { color: '#FF33A1' } },
        // { value: 1548, name: '2222', itemStyle: { color: '#FFAA33' } },
        // { value: 335, name: '2222222', itemStyle: { color: '#33AAFF' } },
        // { value: 310, name: '222', itemStyle: { color: '#AAFF33' } },
        // { value: 234, name: '22', itemStyle: { color: '#FF5733' } },
        // { value: 135, name: '2', itemStyle: { color: '#33FF57' } },
        // { value: 1548, name: '1', itemStyle: { color: '#3357FF' } },
        // { value: 335, name: 'gfg', itemStyle: { color: '#FF33A1' } },
        // { value: 310, name: 'fgf', itemStyle: { color: '#FFAA33' } },
        // { value: 234, name: 'fgg', itemStyle: { color: '#33AAFF' } },
        // { value: 135, name: 'jhhg', itemStyle: { color: '#AAFF33' } },
        // { value: 1548, name: 'gghhfg', itemStyle: { color: '#FF5733' } },
        // { value: 335, name: '222762222', itemStyle: { color: '#33FF57' } },
        // { value: 310, name: '222767', itemStyle: { color: '#3357FF' } },
        // { value: 234, name: '2442', itemStyle: { color: '#FF33A1' } },
        // { value: 135, name: '233', itemStyle: { color: '#FFAA33' } },
        // { value: 1548, name: '14', itemStyle: { color: '#33AAFF' } },
    ]

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
                top: '5%',
                data: [
                    'Direct', 'Email', 'Affiliate', 'Video', '2222', '2222222',
                    '222', '22', '2', '1', 'gfg', 'fgf', 'fgg',
                    'jhhg', 'gghhfg', '222762222', '222767', '2442', '233', '14',
                ],
            },

            series: [
                {
                    name: '',
                    type: 'pie',
                    radius: ['50%', '60%'],
                    center: ['50%', '60%'],
                    data: ItemData.map((item, index) => ({
                        ...item,
                        itemStyle: { color: lightColors[index % lightColors.length] }, // Assign color based on index
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
            {/* <h2>Pie Chart Example</h2> */}
            <div
                ref={chartRef}
                style={{ width: '100%', height: '400px', marginTop: '20px' }}
            />
        </div>
    );
};

export default PieChart;
