import React, { Component } from 'react';

import Footer from './Footer';
import ResumePic from '../assets/resume.png';

import '../App.css';

{/* 
    Add Hover Functionality to Paper Material UI using the onMouseEnter event and onMouseLeave event. 
    Check out this documentation for reference: https://material-ui.com/utils/popover/

    SIDENOTE: Update Resume design for 2018
*/}

export default class Resume extends Component {
    render() {
        return (
            <div> 
                <div className="resume-section">
                    <a className="resume-link" href="https://github.com/Jzbonner/jzb-co/blob/master/src/assets/jzb-resume.docx?raw=true" download> 
                        <div className="row">
                            <div className="col-md-3">
                                <img className="resume-pic" src={ResumePic} alt="resume" />
                            </div> 
                            <div className="col-md-6">   
                                <p className="resume-description">
                                    For a more customary look at my skills <br/>
                                    click here to access my resume.<br/> 
                                    Feel free to contact me for services<br/> 
                                    or employment opportunities.
                                </p>
                            </div>
                        </div>                                       
                    </a>
                </div> 
                <Footer />
            </div> 
        )
    }
}