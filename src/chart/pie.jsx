// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({datas}) => {
  const data = {
    labels: datas[0],
    datasets: [
      {
        data: datas[1],
        backgroundColor: ['#7A4E5D', '#8C6F74'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };
  console.log(":::::::::::");
  
  return (
    <div className='text-center h-[95%] flex justify-center'>
        <Pie className='pie' data={data} options={options} />
    </div>
  );
};

export default PieChart;
