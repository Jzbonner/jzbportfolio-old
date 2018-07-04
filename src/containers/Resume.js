import React, { Component } from 'react';
import Footer from './Footer';

import '../App.css';

{/* 
    Add Paper Element for Resume Hover Layout. https://material-ui.com/demos/paper/
    And utilize the HTML download attribute https://www.w3schools.com/tags/att_a_download.asp
    for a PDF of the Resume 

    SIDENOTE: Update Resume design for 2018
*/}

export default class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <div className="row">
                    <div className="col-lg-12">
                        Image of Resume with Overshadow here. 
                    </div> 
                </div> 
                <Footer />
            </div> 
        )
    }
}