import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart1 = ({ datas }) => {
  const data = {
    labels: datas[0],
    datasets: [
      {
        data: datas[1],
        borderColor: 'rgb(75, 64, 64)',
        tension: 0.4,
        fill: false,
        pointBackgroundColor: 'rgb(75, 64, 64)', 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // ✅ Enable tooltip
        backgroundColor: 'rgba(255, 255, 255, 0.9)', 
        titleColor: '#000', 
        bodyColor: '#000',  
        borderColor: '#ccc',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        display: false, // ✅ Hide x-axis
      },
      y: {
        display: false, // ✅ Hide y-axis
      },
    },
  };

  return <Line className="line1" data={data} options={options} />;
};

export default LineChart1;
