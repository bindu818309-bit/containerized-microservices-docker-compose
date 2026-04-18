const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('gateway Service Running');
});

app.listen(3000, () => {
  console.log('Gateway service on port 3000');
});
