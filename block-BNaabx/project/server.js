var express = require('express');
var app = express();

// Custom Morgan Logger

app.use((req, res, next) => {
  let now = new Date();
  console.log(req.method, req.path, now);
  next();
});

// Custom parse json data

app.post('/form', (req, res, next) => {
  let data = req.body;
  console.log(data);
  res.send(JSON.parse(data));
  next();
});

// Custom static method

var staticCustom = (res, req, next) => {
  if (req.url.split('.').pop() === 'css') {
    res.send(__dirname + 'filename');
  }
};
app.use(staticCustom);

// Server

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});
