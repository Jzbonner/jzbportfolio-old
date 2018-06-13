import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 
import Sidebar from './Sidebar';
import Bio from './Bio';
import Home from './Home';
import Experience from './Experience';
import Resume from './Resume'; 
import Portfolio from './Portfolio'; 

import NavIndex from '../assets/source-code.png';
import '../App.css';


const routes = [
    {
        path : "/", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Home />,
    }, 
    {
        path : "/Home", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Home />,
    }, 
    {
        path : "/Bio", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Bio />,
    },
    {
        path : "/Experience", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Experience />,
    }, 
    {
        path : "/Portfolio", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Portfolio />,
    },
    {
        path : "/Resume", 
        exact: true, 
        sidebar: () => <Sidebar />,
        main: () => <Resume />,
    },  
]; 

export default class App extends Component {
    render() {
        return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    {/*
                        Navbar Section with Link and BrowserRouter functionality 
                    */}
                    <div className="col-md-2">
                        <nav className="navbar navbar-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapseItems" aria-controls="navbarCollapseItems" aria-expanded="false" aria-label="Toggle navigation">
                                <img src={NavIndex} className="nav-index" alt="nav-index" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapseItems">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                    <Link to="/Home" className="nav-link">
                                        Home
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Bio" className="nav-link">
                                        Bio
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Experience" className="nav-link">
                                        Experience
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Portfolio" className="nav-link">
                                        Portfolio
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Resume" className="nav-link">
                                        Resume
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/*
                        Section for displaying the navbar/sidebar links to display the 
                        actual content; this section needs to be bootstrapped to provide 
                        more of a grid layout for the UI of the page

                        Also update the CSS file to actually work in tandem with the new layout
                        Should have the navbar/sidebar be one feature that is responsive to 
                        smaller displays via media queries. 

                    */}
                    <div className="col-md-3">
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
                    <div className="col-md-7">
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
        )
    }
};
