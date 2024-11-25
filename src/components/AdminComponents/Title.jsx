// import React from 'react'
// import "../../stylesheets/DashboardPageStyles/title.css"
// const Title = () => {
//   return (
//     <div className='title-card'>
//       <h2>Value</h2>
//       <p>Component Name</p>
//     </div>
//   )
// }

// export default Title


//--------------------------------------------------------------------------------------------------------
// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import "../../stylesheets/DashboardPageStyles/title.css"

// export default function BasicPie() {
//   return (
//    <div className='pie-charts'>
//      <PieChart 
//       series={[
//         {
//           data: [
//             { id: 0, value: 100, label: 'series A' },
//             { id: 1, value: 105, label: 'series B' },
//             { id: 2, value: 200, label: 'series C' },
//               { id: 3, value: 100, label: 'series A' },
//             { id: 4, value: 105, label: 'series B' },
//             { id: 5, value: 200, label: 'series C' },
//           ],
//         },
//       ]}
//       width={500}
//       height={300}
      
//     />
//    </div>
//   );
// }


// //==========================================================================================================
// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Tooltip } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

// const data = [
//   {
//     userName: "sandeepReddy",
//     email: "sandeep@inapayments.com",
//     createdDate: "2024-10-22",
//     status: "ACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "HariharanathElluru",
//     email: "harimanie@gmail.com",
//     createdDate: "2024-10-26",
//     status: "ACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Sandeep ReddyMukku",
//     email: "sandeepreddymukku3108@gmail.com",
//     createdDate: "2024-11-12",
//     status: "ACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Ravi Kumar",
//     email: "ravi.kumar@inapayments.com",
//     createdDate: "2024-08-15",
//     status: "INACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Priya Sharma",
//     email: "priya.sharma@gmail.com",
//     createdDate: "2024-09-10",
//     status: "ACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Anand Raj",
//     email: "anand.raj@inapayments.com",
//     createdDate: "2024-07-01",
//     status: "INACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Nina Patel",
//     email: "nina.patel@example.com",
//     createdDate: "2024-03-22",
//     status: "ACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Mohit Sharma",
//     email: "mohit.sharma@inapayments.com",
//     createdDate: "2024-06-18",
//     status: "ACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Sonali Mehta",
//     email: "sonali.mehta@gmail.com",
//     createdDate: "2024-02-14",
//     status: "INACTIVE",
//     tenants: "visibility",
//   },
//   {
//     userName: "Amit Desai",
//     email: "amit.desai@inapayments.com",
//     createdDate: "2024-01-25",
//     status: "ACTIVE",
//     tenants: "visibility",
//   }
// ];

// function UserTable() {
//   const [page, setPage] = useState(0); // Current page
//   const [rowsPerPage, setRowsPerPage] = useState(5); // Rows per page
//   const [status, setStatus] = useState(data.map(user => user.status)); // Local state to handle toggle changes

//   // Handle page change
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   // Handle rows per page change
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0); // Reset to first page when changing rows per page
//   };

//   // Toggle the status of a user
//   const handleStatusToggle = (index) => {
//     setStatus((prevStatus) => {
//       const newStatus = [...prevStatus];
//       newStatus[index] = newStatus[index] === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
//       return newStatus;
//     });
//   };

//   // Slice the data to display only the rows for the current page
//   const currentRows = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//         <TableRow sx={{ backgroundColor: '#1976d2', color: 'white' }}>
//             <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>User Name</TableCell>
//             <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Email</TableCell>
//             <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Created Date</TableCell>
//             <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Status</TableCell>
//             <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Tenants</TableCell>
//             <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Actions</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {currentRows.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{row.userName}</TableCell>
//               <TableCell>{row.email}</TableCell>
//               <TableCell>{row.createdDate}</TableCell>
//               <TableCell>
//                 {status[index] === 'ACTIVE' ? (
//                   <span style={{ color: 'green' }}>{status[index]}</span>
//                 ) : (
//                   <span style={{ color: 'red' }}>{status[index]}</span>
//                 )}
//               </TableCell>
//               <TableCell>
//                 <Tooltip title="View Tenants">
//                   <RemoveRedEyeIcon />
//                 </Tooltip>
//               </TableCell>
//               <TableCell>
//                 <Tooltip title="Edit">
//                   <EditIcon />
//                 </Tooltip>
//                 <Tooltip title={status[index] === 'ACTIVE' ? "Deactivate" : "Activate"}>
//                   <span onClick={() => handleStatusToggle(index)}>
//                     {status[index] === 'ACTIVE' ? <ToggleOnIcon /> : <ToggleOffIcon />}
//                   </span>
//                 </Tooltip>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 25]}
//         component="div"
//         count={data.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </TableContainer>
//   );
// }

// export default UserTable;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 150 },
//   { name: 'Group F', value: 250 },
// ];

// const generateRandomHexColor = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   return `#${randomColor.padStart(6, '0')}`;
// };

// const generateColors = (numColors) => {
//   const colors = [];
//   for (let i = 0; i < numColors; i++) {
//     colors.push(generateRandomHexColor());
//   }
//   return colors;
// };

// const PieChartExample = () => {
//   const colors = generateColors(data.length);

//   return (
//     <ResponsiveContainer width="100%" height={500}>
//       <PieChart>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={100}
//           outerRadius={120}
//           fill="#8884d8"
//           paddingAngle={0}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//         <Legend />
//       </PieChart>
//     </ResponsiveContainer>
//   );
// };

// export default PieChartExample;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import ReactApexChart from 'react-apexcharts';

// const LineChart = () => {
//   // Chart options and data
//   const options = {
//     chart: {
//       type: 'line',    // Specifies the chart type (line chart)
//       height: 350      // Height of the chart
//     },
//     title: {
//       text: 'Monthly Sales Data',  // Title of the chart
//       align: 'left'              // Title alignment
//     },
//     xaxis: {
//       categories: ['', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']  // X-axis labels
//     },
   
//     grid: {
//       borderColor: '#f1f1f1',    // Gridline color
//       strokeDashArray: 5,        // Dotted grid lines
//     },
//     stroke: {
//       curve: 'smooth',           // Smooth curve for the line
//     },
//     markers: {
//       size: 0,                   // Size of the markers on the line
//       colors: ['#fff'],          // Marker color
//       strokeColors: '#3e8e41',   // Stroke color for markers
//       strokeWidth: 1,            // Stroke width for markers
//     },
//   };

//   const series = [
//     {
//       name: 'Sales',           // Series name
//       data: [0, 0, 0, 0, 0, 0, 0, 100, 0] // Data for the line
//     }
//   ];

//   return (
//     <div id="chart">
//       <ReactApexChart options={options} series={series} type="line" height={350} />
//     </div>
//   );
// };

// export default LineChart;

////===============================================================================================================================================================================
import React, { useState } from 'react';
// import './LoginPage.css';
import loginpng from "../../Assests/LOGIN-IMAGE.png"

const LoginPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={loginpng} alt="Login" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
