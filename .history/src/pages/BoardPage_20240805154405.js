import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const BoardPage = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: '현재가격',
        data: Array.from({ length: 30 }, () => Math.random() * 100),
        borderColor: 'red',
        fill: false,
      },
      {
        label: '예측가격',
        data: Array.from({ length: 30 }, () => Math.random() * 100),
        borderColor: 'gray',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {['1D', '1M', '3M', '6M', '1Y'].map((label, index) => (
          <button
            key={index}
            style={{
              padding: '10px 20px',
              margin: '0 5px',
              background: index === 2 ? 'lightgreen' : 'white', // Highlight '3M' button
              border: '1px solid lightgray',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BoardPage
