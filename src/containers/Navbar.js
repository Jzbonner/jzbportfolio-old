import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import NavIndex from '../assets/source-code.png';
import '../App.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapseItems"
          aria-controls="navbarCollapseItems"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <img src={NavIndex} className="nav-index" alt="nav-index" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapseItems">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/Home" className="nav-link">
                <p className="nav-id">
                  <i id="icon" className="fas fa-circle-notch"></i> Home{' '}
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Bio" className="nav-link">
                <p className="nav-id">
                  <i id="icon" className="far fa-user-circle"></i> Bio{' '}
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Experience" className="nav-link">
                <p className="nav-id">
                  <i id="icon" className="fas fa-flask"></i> Experience{' '}
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Portfolio" className="nav-link">
                <p className="nav-id">
                  <i id="icon" className="far fa-file-alt"></i> Portfolio{' '}
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Resume" className="nav-link">
                <p className="nav-id">
                  <i id="icon" className="fas fa-align-right"></i> Resume{' '}
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
