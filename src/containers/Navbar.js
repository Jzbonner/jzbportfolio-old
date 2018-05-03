import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavIndex from '../assets/source-code.png';

export default class Navbar extends Component {
    render() {
        return (
          <nav class="navbar navbar-expand-md navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src={NavIndex} className="nav-index" alt="nav-index" />
            </a>            
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link to="/Bio" class="nav-link">
                    Bio <span class="sr-only">(current)</span>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/Experience" class="nav-link" href="#">
                    Experience
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/Portfolio" class="nav-link" href="#">
                    Portfolio
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/Resume" class="nav-link" href="#">
                    Resume
                    </Link>
                </li>
            </ul>
          </nav>
        )
    }
}