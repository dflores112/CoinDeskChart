const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const coinBaseControls = require('./controllers.js');

app.use('/', express.static(path.join(__dirname, '../dist/src')));

app.get('/historical', coinBaseControls.getBitCoinScores);
app.get('/current', coinBaseControls.getBitCoinCurrentPrice);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
