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

const LineChart1 = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56],
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
            color: '#ffff', // 🔥 X-axis label color
          },
        },
        y: {
          grid: {
            display: false, // 🔥 Remove horizontal grid lines
          },
          ticks: {
            color: '#ffff', // 🔥 X-axis label color
          },
        },
    },
  };

  return <Line className='' data={data} options={options} />;
};

export default LineChart1;
