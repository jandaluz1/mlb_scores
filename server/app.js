const express = require('express');
const morgan = require('morgan');
const app = express();

const client = require('./redisClient');

app.use(morgan('dev'));

app.use('/api', require('./api'));
app.use('*', (req, res) => {
  res.send('Testing Server');
});

app.listen(5000, () => {
  console.log('Listening on port 5000...');
});

client.on('connect', () => {
  console.log('Connected to redis');
});

client.on('error', err => {
  console.log('Redis error: ' + err);
});
