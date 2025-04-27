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

const LineChart2 = ({ datas }) => {
  console.log(datas);

  const data = {
    labels: datas[0],
    datasets: [
      {
        data: datas[1],
        borderColor: 'rgb(75, 64, 64)',
        tension: 0.4,
        fill: false,
        pointBackgroundColor: 'rgb(75, 64, 64)', // point color
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
        enabled: true,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // light white
        titleColor: '#000', // black title
        bodyColor: '#000',  // black value
        borderColor: '#ccc', // light grey border
        borderWidth: 1,
        cornerRadius: 8, // optional: smooth round corners
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
  };

  return <Line className="line2 hgt" data={data} options={options} />;
};

export default LineChart2;
