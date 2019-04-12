import React, { Component } from 'react';
import './Scoreboard.scss';

class Scoreboard extends Component {
  firstBase = React.createRef();
  secondBase = React.createRef();
  thirdBase = React.createRef();

  resetBases = () => {
    this.firstBase.current.classList.remove('on-base');
    this.secondBase.current.classList.remove('on-base');
    this.thirdBase.current.classList.remove('on-base');
  };

  updateBases = runners => {
    this.resetBases();
    if ('runner_on_1b' in runners) {
      this.firstBase.current.classList.add('on-base');
    }
    if ('runner_on_2b' in runners) {
      this.secondBase.current.classList.add('on-base');
    }
    if ('runner_on_3b' in runners) {
      this.thirdBase.current.classList.add('on-base');
    }
  };

  componentDidMount() {
    // console.log(this.firstBase.current.classList);
    const { game } = this.props;
    if (game.status.status === 'In Progress') {
      const { runners_on_base } = game;
      this.updateBases(runners_on_base);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.game.status.status === 'In Progress') {
      if (
        this.props.game.status.o !== prevProps.game.status.o ||
        this.props.game.runners_on_base.status !==
          prevProps.game.runners_on_base.status
      ) {
        this.updateBases(this.props.game.runners_on_base);
      }
    }
  }
  render() {
    const { game } = this.props;
    return (
      <div id="scoreboard">
        <div id="teams">
          <div className="team" id="away">
            {game.away_name_abbrev}
          </div>
          <div className="team" id="away-score">
            {game.status.status === 'Preview' ? 0 : game.linescore.r.away}
          </div>
          <div className="team" id="home">
            {game.home_name_abbrev}
          </div>
          <div className="team" id="home-score">
            {game.status.status === 'Preview' ? 0 : game.linescore.r.home}
          </div>
        </div>
        <div id="field-box">
          <div id="field">
            <div className="base" id="first-base" ref={this.firstBase} />
            <div className="base" id="second-base" ref={this.secondBase} />
            <div className="base" id="third-base" ref={this.thirdBase} />
          </div>
        </div>
        <div id="info">
          {game.status.status === 'In Progress' && (
            <span>
              {game.status.inning_state.slice(0, 3)} {game.status.inning}
            </span>
          )}
          {game.status.status === 'Pre-Game' && (
            <span>
              {game.time} {game.time_zone}
            </span>
          )}
          {game.status.status === 'Preview' && (
            <span>
              {game.time} {game.time_zone}
            </span>
          )}
          {game.status.status === 'Warmup' && <span>Warmup</span>}
          {game.status.status === 'Final' && <span>Final</span>}
          {game.status.status === 'Game Over' && <span>Final</span>}
          {game.status.status === 'Postponed' && <span>Postponed</span>}
        </div>
        <div id="outs">
          {game.status.status === 'In Progress' && (
            <span>{game.status.o} out</span>
          )}
        </div>
      </div>
    );
  }
}

export default Scoreboard;
