const axios = require('axios')

function getBitCoinScores(req,res){
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-01-01&end=2021-02-01')
  .then((data) => res.status(200).send(data.data.bpi))
  .catch((err) => res.status(400).send(err))
}

module.exports = {
  getBitCoinScores
};