var express = require('express');

var app = express();

var logger = require('morgan');

var cookieparser = require('cookie-parser');

app.use(logger('dev'));

app.use(cookieparser());

app.use((req, res, next) => {
  res.cookie('count', 1);
  next();
});

app.get('/user/:username', (req, res) => {
  var username = req.params.username;
  res.send(`<h1>${username}</h1>`);
});

app.get('/', (req, res) => {
  res.send('<h2>Welcome to Express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is Vasant');
});

app.use(express.urlencoded({ extended: false }));

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.use(express.json());

app.post('/json', (req, res) => {
  res.send(req.body);
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page you are looking for is not found</h1>');
});

app.use((req, res, next) => {
  res.status(500).send('<h2>Client or Server error.</h2>');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3k');
});
