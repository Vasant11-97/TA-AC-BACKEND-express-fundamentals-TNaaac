// require modules

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// Midddlewares

app.use(logger('dev'));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.cookie('username', 'vasant');
  next();
});

app.use(express.static(__dirname + '/public'));

// Routes

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/users/:username', (req, res) => {
  var userName = req.params.username;
  res.send(userName);
});

app.get('/project', (req, res) => {
  res.sendFile(__dirname + '/project.html');
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page you are looking for is not found</h1>');
});

app.use((req, res, next) => {
  res.status(500).send('<h2>Client or Server error.</h2>');
});

// Server

app.listen(4000, () => {
  console.log('Server is listening on port 4k');
});
