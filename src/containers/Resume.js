import React, { Component } from 'react';
import Footer from './Footer';
import ResumePic from '../assets/resume.png';

import '../App.css';

{/* 
    TODO: Update Resume design for 2018 and link Grad Resume to page 
*/}

export default class Resume extends Component {
    render() {
        return (
            <div> 
                <div className="resume-section">
                    <h2 className="resume-title">Resume</h2> 
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