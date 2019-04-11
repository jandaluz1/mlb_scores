import React, { Component } from 'react';
import axios from 'axios';
import Scoreboard from './Scoreboard';

export default class GameDay extends Component {
  state = { games: [] };
  async componentDidMount() {
    const { data } = await axios.get('/api/poll');
    this.setState({ games: data });
    await this.poll();
  }

  poll() {
    setTimeout(async () => {
      console.log('POLLING');
      const { data } = await axios.get('/api/poll');
      this.setState({ games: data });
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
