import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Footer from './Footer';
import Bio from './Bio'; 
import Portfolio from './Portfolio';
import Experience from './Experience';
import Resume from './Resume'; 
import NavIndex from '../assets/source-code.png';

import '../App.css';

  {/*
    
    Hard coded example of how the toggleContent class would work, but I need it to
    actually siphon through the component names not just have a different class 
    for each one. 

    Should have some way to change displayComponent based on componentName. Answer 
    might be an array. 
  
  */}


export default class Viewport extends Component {
  constructor(props) {
    super(props)
    this.state = {
      componentName: '',
      displayComponent: <Bio />
    }

    this.handleToggleContent = this.handleToggleContent.bind(this)
  }

  handleToggleContent() {
    this.setState((currentState) => {
      return {
        componentName: '',
        displayComponent: <Portfolio />
      }
    }) 
  }

  render() {
    return (
    <div className="col-md-9 viewport">
        {/* Structure for Navbar; All the links should be onClick to trigger the event handler */}
        <div className="row">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="https://jzb-co.surge.sh">
              <img src={NavIndex} className="nav-index" alt="nav-index" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapseItems" aria-controls="navbarCollapseItems" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapseItems">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/Bio" onClick={this.handleToggleContent} className="nav-link">
                    Bio <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Experience" onClick={this.handleToggleContent} className="nav-link" href="#">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Portfolio" onClick={this.handleToggleContent} className="nav-link" href="#">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Resume" onClick={this.handleToggleContent} className="nav-link" href="#">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Structure for Content View and Footer */}
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <div className="content-view">
              {this.state.displayComponent}
            </div>
            <Footer />
          </div>
          <div className="col-md-1" />
        </div>
      </div>
    );
  }
}