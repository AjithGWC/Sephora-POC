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

const LineChart1 = ({datas}) => {
  const data = {
    labels: datas[0],
    datasets: [
      {
        data: datas[1],
        borderColor: 'rgb(75, 64, 64)',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: 'Monthly Sales',
      },
      legend: {
        display: false,
      },
    },
    scales: {
        x: {
          grid: {
            display: false, // 🔥 Remove vertical grid lines
          },
          ticks: {
            color: '#4b5563', // 🔥 X-axis label color
          },
        },
        y: {
          grid: {
            display: false, // 🔥 Remove horizontal grid lines
          },
          ticks: {
            color: '#4b5563', // 🔥 X-axis label color
          },
        },
    },
  };

  return <Line className='line1' data={data} options={options} />;
};

export default LineChart1;
