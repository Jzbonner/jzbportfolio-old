import React, { Component } from 'react';
import Footer from './Footer'; 

import '../App.css';

export default class Bio extends Component {
    render() {
        return (
            <div className="bio"> 
                <div className="row">
                    <div className="col-lg-12">
                        <p> 
                            Educational Background - Name of High School; Extracurricular Activities; Freelance Beginnings
                            College Career - University of North Carolina (Bachelor's of Science in Information Science)
                            College Course Listing - INLS Courses that relate to Information and Computer Science
                            Skills Developed in College - Intermediate Spanish; Office Suite Proficiency; Volunteering; Coordinating an Internet Presence 
                            General Interest - Kaggle Data Science Competition, Hacker Rank Competition, Independent App Development, Quantitative Analysis and Quantum Computing 
                        </p> 

                        <p> 
                            Internship Background - Small blurb about Internships held in the past and connections made 
                            Employment Background - Small Blurb about Jobs held in the past and connections made
                        </p> 
                    </div>
                </div> 
                <Footer />
            </div>
        )
    }
}