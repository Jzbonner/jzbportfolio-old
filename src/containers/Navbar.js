import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu'; 

import NavIndex from '../assets/source-code.png';
import '../App.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  render() {
    return (
      <Menu className="sidebar-slide">
        <li className="nav-item">
          <Link to="/Home" id="home" className="nav-link">
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
      </Menu>
    );
  }
}
