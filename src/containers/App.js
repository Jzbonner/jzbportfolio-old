/* Pass prop value from the App.js constructor to the Navbar component
 * in order to modularize the layout of the application. Use state
 * management in order to properly set and get parameters.
 *
 * 1. Set scaffold (/collapse) to default and toggle onClick
 * 2. Pages directory for Bio, Experience, Resume, Portfolio
 * 3. Animation functionality through Material-U
 * 4. Skillbar functionality and design through progress-bar web
 * component
 * 5.  Clean up assets directory
 * */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Bio from './Bio';
import Home from './Home';
import Experience from './Experience';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Navbar from './Navbar';

import NavIndex from '../assets/source-code.png';
import '../App.css';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Home />,
  },
  {
    path: '/Home',
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Home />,
  },
  {
    path: '/Bio',
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Bio />,
  },
  {
    path: '/Experience',
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Experience />,
  },
  {
    path: '/Portfolio',
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Portfolio />,
  },
  {
    path: '/Resume',
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Resume />,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = [];
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            {/* 
                        Navbar Section with Link and BrowserRouter functionality 
                    */}
            <div className="col-lg-1">
              <Navbar />
            </div>
            {/*
                        Functionality layout for displaying the navbar/sidebar links to 
                        show the page content
                    */}
            <div className="col-lg-3">
              <div className="sidebar-view">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.sidebar}
                  />
                ))}
              </div>
            </div>
            {/*
                        Section for displaying the actual content that is triggered 
                        from the navbar/sidebar sections 
                    */}
            <div className="col-lg-8">
              <div className="content-view">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
