import React, { Component } from 'react';
import Footer from './Footer'; 

import '../App.css';

export default class Bio extends Component {
    render() {
        return (
            <div className="bio"> 
                <div className="row">
                    <div className="col-lg-12">
                        <p className="general-interest"> 
                        Aside from defining myself academically, I have always strived to be a well rounded person 
                        in both extracurricular activities as well as those that would further my academic career. 
                        My interest in Computer and Data Science grew from the course work I was able to complete 
                        during my undergraduate career. 
                        </p> 

                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        College Career - University of North Carolina (Bachelor's of Science in Information Science)
                                    </td> 
                                </tr> 
                                <tr>
                                    <td> Course 1 </td>
                                    <td> Info on Course </td>
                                </tr>
                                <tr>
                                    <td> Course 2 </td>
                                    <td> Info on Course </td>
                                </tr>
                                <tr>
                                    <td>Course 3</td>
                                    <td> Info on Course </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="general-interest-2">
                        Gaining experience in life is about finding your medium in a world of extremes. I have often 
                        found direction by volunteering my time to aid in community organized projects and services. 

                        {/* 
                        
                            Create an unorganized list of all the volunteer work and community 
                            service work from resume 

                        */}

                        {/* Block Quote the Following */}
                        General Interest - Intermediate Spanish, Kaggle Data Science Competition, Hacker Rank Competition, 
                        Independent App Development, Quantitative Analysis and Quantum Computing 
                        </p> 

                        <p className="internship"> 
                        Internship Background - Small blurb about Internships held in the past and connections made 
                        </p> 

                        <p className="employment">
                        Employment Background - Small Blurb about Jobs held in the past and connections made
                        </p>

                    </div>
                </div> 
                <Footer />
            </div>
        )
    }
}