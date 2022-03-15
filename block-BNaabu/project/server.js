var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));

app.get('/admin', (req, res, next) => {
  if ((req.url = 'admin')) {
    return next('nauthorised');
  }
  next();
});

app.get('/', (req, res) => {
  res.send('This is the index page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.use((req, res, next) => {
  res.send('Page is not Found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});
