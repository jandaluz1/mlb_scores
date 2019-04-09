import React, { Component } from 'react';
import axios from 'axios';
import Scoreboard from './Scoreboard';

export default class GameDay extends Component {
  state = { games: [] };
  async componentDidMount() {
    const { data } = await axios.get(
      'http://gd2.mlb.com/components/game/mlb/year_2019/month_04/day_09/master_scoreboard.json'
    );
    const games = data.data.games.game;
    this.setState({ games });
    this.poll();
  }

  poll() {
    setTimeout(async () => {
      const { data } = await axios.get(
        'http://gd2.mlb.com/components/game/mlb/year_2019/month_04/day_09/master_scoreboard.json'
      );
      const games = data.data.games.game;
      console.log('POLLING', games);
      this.setState({ games });
      this.poll();
    }, 15000);
  }
  render() {
    const { games } = this.state;
    // console.log(games);
    return (
      <div>
        <h1>GameDay</h1>
        {games[0] &&
          games.map(game => <Scoreboard game={game} key={game.id} />)}
      </div>
    );
  }
}
