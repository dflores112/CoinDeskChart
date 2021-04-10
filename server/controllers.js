const axios = require('axios');

module.exports = {

  getBitCoinScores: (req, res) => {
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-03-08&end=2021-04-08')
      .then((data) => res.status(200).send(data.data.bpi))
      .catch((err) => res.status(400).send(err));
  },
  getBitCoinCurrentPrice: (req, res) => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
      .then((data) => res.status(200).send([data.data.bpi.USD.rate_float, data.data.time.updated.substring(0,21)]))
      .catch((err) => res.status(400).send(err));
  },
};
