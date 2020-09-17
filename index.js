const express = require('express');
const app = express();

app.get('/users', (req, res, next) => {
  console.log('Users path console log!');
  next();
});

app.get('/users', (req, res, next) => {
  res.send('Users Page!');
});

app.get('/', (req, res, next) => {
  console.log('Root path console log!');
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000...')
});