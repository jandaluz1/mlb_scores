import React from 'react';
import Scoreboard from './Scoreboard';
import './GameContainer.scss';

const GameContainer = props => {
  const { games } = props;
  const { status } = props;
  return (
    <div className="games">
      <h2>{status}</h2>
      {games.map(game => (
        <Scoreboard game={game} key={game.id} />
      ))}
    </div>
  );
};

export default GameContainer;
