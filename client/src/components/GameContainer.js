import React from 'react';
import Scoreboard from './Scoreboard';
import '../main.scss';

const GameContainer = props => {
  const { games } = props;
  const { status } = props;
  return (
    <div>
      <h2>{status}</h2>
      <div className="games">
        {games.map(game => (
          <Scoreboard game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default GameContainer;
