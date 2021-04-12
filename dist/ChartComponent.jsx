import React from 'React';
import { Line } from 'react-chartjs-2';

function ChartComponent(props) {
  const { dates, prices} = props;
  const data = {
    labels: dates,
    datasets: [
      {
        label: 'BitCoin Price',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: prices,
      },
    ],
  };

  return (
    <Line
      data={data}
    />
  );
}

export default ChartComponent;
