import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function LivePrices() {
  const [prices, setPrices] = useState([]);
  const [dates, setDates] = useState([]);

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

  function retrieveCoinDeskScores() {
    axios.get('current')
      .then((res) => {
        const newPrices = [...prices];
        const newDates = [...dates];
        newPrices.push(res.data[0]);
        newDates.push(res.data[1]);
        setDates(newDates);
        setPrices(newPrices);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    retrieveCoinDeskScores();
  }, []);

  return (
    <>
      <button onClick={() => setLive(!live)}>Live</button>
      <Line
        data={data}
      />
    </>
  );
}

export default LivePrices;
