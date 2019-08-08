/* 
TODO: 
 * 1. Redesign font layout on Bio page 
 * 2. Add content to Experience Page 
 * 3. Trim paragraph text on Portfolio Page
 * 5. Clean up assets directory
 * 6. Add links to Resume page 
*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Bio from "./Bio";
import Home from "./Home";
import Experience from "./Experience";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import Footer from "./Footer"; 

import "../App.css";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Home />
  },
  {
    path: "/Home",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Home />
  },
  {
    path: "/Bio",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Bio />
  },
  {
    path: "/Experience",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Experience />
  },
  {
    path: "/Portfolio",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Portfolio />
  },
  {
    path: "/Resume",
    exact: true,
    sidebar: () => <Sidebar />,
    main: () => <Resume />
  }
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
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
