import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Bio from './Bio'; 
import Portfolio from './Portfolio';
import Experience from './Experience';
import Resume from './Resume'; 

/* 

Need to use Route Config from React Router Dom v4 in order to properly nest and trigger changing 
content views for Bio, Portfolio, Experience and Resume

*/

import '../App.css';

export default class Content extends Component {
    render() {
        return (
            <Router>
                <div className="content-view"> 
                    <Bio />             
                </div>
            </Router>
        )
    }
}