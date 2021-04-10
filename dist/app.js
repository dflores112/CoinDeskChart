import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import LivePrices from './LivePrices.js'

function CoinChart() {
  const [prices, setPrices] = useState([]);
  const [dates, setDates] = useState([]);
  const [live, setLive] = useState(false);

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
    axios.get('historical')
      .then((res) => {
        setDates(Object.keys(res.data));
        setPrices(Object.values(res.data));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    retrieveCoinDeskScores();
  }, []);

  console.log(localStorage)

  return (
    <div className="Window">
      <div className="Container">
        <div className="Header">
          BitCoin Prices
        </div>
        <Line
          data={data}
        />
        <LivePrices/>
        <div className="Footer">
          Powered by CoinDesk
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(
  <CoinChart />,
  document.getElementById('app'),
);
