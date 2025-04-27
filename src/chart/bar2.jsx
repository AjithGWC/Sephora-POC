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

const BarChart2 = ({ datas }) => {
  const data = {
    labels: datas[0],
    datasets: [
      {
        label: 'Votes',
        data: datas[1],
        backgroundColor: [
          '#3B0A45', '#1C1B1F', '#5C0A17', '#7A4E5D', '#8C6F74'
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 👈 important for full height/width flexibility
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        ticks: { color: '#4b5563', font: { size: 9 } },
        grid: { display: false },
      },
      y: {
        display: false,
        ticks: { color: '#4b5563', font: { size: 9 } },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="w-full h-full p-2"> {/* 👈 wrapper to make it full width and height */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart2;
