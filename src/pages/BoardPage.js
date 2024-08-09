import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import WordcloudComponent from '../components/CloudChart';

Chart.register(...registerables);

const BoardPage = () => {
  const [timeRange, setTimeRange] = useState('3M');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const generateData = (range) => {
    let labels = [];
    let dataLength;
    
    switch(range) {
      case '1D':
        labels = Array.from({ length: 24 }, (_, i) => `${i+1}h`);
        dataLength = 24;
        break;
      case '1M':
        labels = Array.from({ length: 30 }, (_, i) => `${i+1}d`);
        dataLength = 30;
        break;
      case '3M':
        labels = Array.from({ length: 90 }, (_, i) => `${i+1}d`);
        dataLength = 90;
        break;
      case '6M':
        labels = Array.from({ length: 180 }, (_, i) => `${i+1}d`);
        dataLength = 180;
        break;
      case '1Y':
        labels = Array.from({ length: 365 }, (_, i) => `${i+1}d`);
        dataLength = 365;
        break;
      default:
        labels = Array.from({ length: 90 }, (_, i) => `${i+1}d`);
        dataLength = 90;
    }

    const data = {
      labels,
      datasets: [
        {
          label: '현재가격',
          data: Array.from({ length: dataLength }, () => Math.random() * 100),
          borderColor: 'red',
          fill: false,
        },
        {
          label: '예측가격',
          data: Array.from({ length: dataLength }, () => Math.random() * 100),
          borderColor: 'gray',
          fill: false,
        },
      ],
    };

    return data;
  };

  useEffect(() => {
    setChartData(generateData(timeRange));
  }, [timeRange]);

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
      <Line data={chartData} options={options} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {['1D', '1M', '3M', '6M', '1Y'].map((label, index) => (
          <button
            key={index}
            onClick={() => setTimeRange(label)}
            style={{
              padding: '10px 20px',
              margin: '0 5px',
              background: timeRange === label ? 'lightgreen' : 'white',
              border: '1px solid lightgray',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      </div>
      <WordcloudComponent />
    </div>
  );
}

export default BoardPage
