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
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import "../../stylesheets/DashboardPageStyles/title.css"

export default function BasicPie() {
  return (
   <div className='pie-charts'>
     <PieChart 
      series={[
        {
          data: [
            { id: 0, value: 100, label: 'series A' },
            { id: 1, value: 105, label: 'series B' },
            { id: 2, value: 200, label: 'series C' },
              { id: 3, value: 100, label: 'series A' },
            { id: 4, value: 105, label: 'series B' },
            { id: 5, value: 200, label: 'series C' },
          ],
        },
      ]}
      width={500}
      height={300}
      
    />
   </div>
  );
}
