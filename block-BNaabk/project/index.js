var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.end('Welcome to home page');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});
