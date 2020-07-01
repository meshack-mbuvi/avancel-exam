import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
  const legend = {
    display: false,
    position: 'top',
    labels: {
      fontSize: 14,
    },
  };

  const data = {
    labels: [2015, 2016, 2017, 2018],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <Line
      data={data}
      legend={legend}
      options={{
        title: {
          display: true,
          text: 'Average Rainfall per month',
          fontSize: 20,
        },
        legend: {
          display: true,
          position: 'right',
        },
      }}
    />
  );
};

export default ChartComponent;
