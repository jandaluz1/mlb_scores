import React, { Component } from 'react';
import axios from 'axios';
import GameContainer from './GameContainer';
import './GameDay.scss';

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
    const liveGames = games.filter(
      game =>
        game.status.status === 'In Progress' || game.status.status === 'Warmup'
    );
    const upcomingGames = games.filter(
      game =>
        game.status.status === 'Pre-Game' || game.status.status === 'Preview'
    );
    const finals = games.filter(
      game =>
        game.status.status === 'Final' ||
        game.status.status === 'Game Over' ||
        game.status.status === 'Postponed'
    );
    console.log(liveGames, upcomingGames, finals);
    return (
      <div className="game-day">
        <h1>GameDay</h1>
        <GameContainer status="live" games={liveGames} />
        <GameContainer status="upcoming" games={upcomingGames} />
        <GameContainer status="final" games={finals} />
      </div>
    );
  }
}
