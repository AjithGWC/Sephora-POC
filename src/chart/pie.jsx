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

const PieChart = () => {
  const data = {
    labels: ['E-Commerce', 'Store'],
    datasets: [
      {
        data: [300, 50],
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

  return <Pie className='pie' data={data} options={options} />;
};

export default PieChart;
