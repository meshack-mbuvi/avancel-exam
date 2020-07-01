import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
  const options = {
    legend: { display: false },
    title: {
      display: true,
      text:
        'Number of portable Media Players Sold WorldWide each year from 2006 to 2011',

      fontColor: 'white',
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Number sold(millions)',
          },
        },
      ],
    },
  };

  const data = {
    labels: [2015, 2016, 2017, 2018],
    datasets: [
      {
        label: 'Number sold(millions)',
        fill: false,
        lineTension: 0,
        borderColor: '#f7f7f7',
        borderWidth: 2,
        data: [35, 60, 40, 70],
      },
    ],
  };
  return <Line data={data} options={options} />;
};

export default ChartComponent;
