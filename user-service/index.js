const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('User Service Running');
});

app.listen(3000, () => {
  console.log('User service on port 3000');
});
