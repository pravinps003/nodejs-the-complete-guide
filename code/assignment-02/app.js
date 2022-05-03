const http = require('http');

const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
  console.log('In route /users middleware');
  res.send('<p>Users Page</p>');
});

app.use('/', (req, res, next) => {
  console.log('In default / middleware');
  res.send('<p>Home Page</p>');
});

app.listen(3000);
