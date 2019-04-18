const express = require('express');
const router = express.Router();
const axios = require('axios');
const redis = require('redis');
const client = require('../redisClient');

const mlbApi = axios.create({
  baseURL: 'http://gd2.mlb.com/components/game/mlb',
  timeout: 2000
});

const redisMiddleware = (req, res, next) => {
  client.get('live', (err, reply) => {
    if (err) {
      console.error(err);
      throw err;
    }
    if (reply) {
      res.send(JSON.parse(reply));
    } else {
      next();
    }
  });
};

router.get('/poll', redisMiddleware, async (req, res) => {
  const datetime = new Date();
  const year = datetime.getFullYear().toString();
  const month = (0 + (datetime.getMonth() + 1).toString()).slice(-2);
  const day = datetime.getDate().toString();
  console.log(datetime);

  const { data } = await mlbApi.get(
    `/year_${year}/month_${month}/day_${day}/master_scoreboard.json`
  );
  client.set(
    'live',
    JSON.stringify(data.data.games.game),
    'EX',
    15,
    redis.print
  );
  res.json(data.data.games.game);

  // res.json(data.data.games.game);
});

module.exports = router;
