import React, { Component } from 'react';
import Footer from './Footer';

import '../App.css';

{/* 
    Add Expansion Panel Design from Material UI to coordinate the portfolio preview sections 
    https://material-ui.com/demos/expansion-panels/
*/}

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <p className="internship"> 
                Internship Background - Small blurb about Internships held in the past and connections made 
                </p> 
                <p className="employment">
                Employment Background - Small Blurb about Jobs held in the past and connections made
                </p>
                <Footer />
            </div> 
        )
    }
}