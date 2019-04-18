import React, { Component } from 'react';
import '../main.scss';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>GameDay</h1>
        <input type="checkbox" id="burger-check" />
        <ul className="nav-links">
          <li>
            <a href="#">Live</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <label htmlFor="burger-check">
          <div id="burger">
            <div />
            <div />
            <div />
          </div>
        </label>
      </nav>
    );
  }
}

export default Navbar;
