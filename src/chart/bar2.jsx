// BarChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart2 = ({datas}) => {
  const data = {
    labels: datas[0],
    datasets: [
      {
        label: 'Votes',
        data: datas[1],
        backgroundColor: [
          '#3B0A45', // Midnight Plum
          '#1C1B1F', // Velvet Noir
          '#5C0A17', // Crimson Wine
          '#7A4E5D', // Plum Mist
          '#8C6F74'  // Rosy Taupe
        ],
        borderRadius: 6, // Rounded bars (optional)
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: 'Color Preference Chart',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#4b5563',
          font: {
            size: 9, // 👈 Smaller font size for X-axis
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#4b5563',
          font: {
            size: 9, // 👈 Smaller font size for X-axis
          },
        },  grid: {
            display: false, // 👈 Remove Y-axis grid lines
        },       
      },
    },
  };

  return (
    // <div style={{ maxWidth: '600px', margin: '0 auto', padding: '5px', borderRadius: '12px', height: '100%' }}>
      <Bar className='bar2' data={data} options={options} />
    // </div>
  );
};

export default BarChart2;
