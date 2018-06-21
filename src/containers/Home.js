import React, { Component } from 'react';
import Footer from './Footer'; 
import Student from '../assets/student.png'; 

import '../App.css';

export default class Home extends Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4">  
                        <img src={Student} className="home-pic" alt="home-pic" />                             
                    </div> 
                    <div className="col-lg-7 col-md-7">  
                        <p className="home-section-1"> Always striving to create something from nothing, software engineering has 
                            given me the ability to bring my ideas to life. Both educational and employment
                            opportunities have played a pivotal role in developing my technical skill-set as 
                            well as the soft-skills necessary to be a key asset to any industry project or team. 
                            <p className="home-section-2"><i className="fab fa-staylinked"></i></p> 
                            I have had the privilege of working with a number of professionals in the field of
                            computer and information science, mechanical engineering, statistics, and financial 
                            analysis. I hope to inspire those who are also looking to embark on a career in 
                            information technology. I am always available to bring my experiences to future 
                            projects, products and services.
                        </p> 
                    </div> 
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="skills-title"> FrontEnd (HTML5, CSS3, Bootstrap and Markup) </p>
                        <div className="container-skills">
                            <div className="skills frontend">95%</div>
                        </div>

                        <p className="skills-title"> JavaScript (React, Angular, and Vue) and Babel (JSX) </p>
                        <div className="container-skills">
                            <div className="skills js">80%</div>
                        </div>

                        <p className="skills-title"> Product Development (Tableau, Bokeh and Excel) </p>
                        <div className="container-skills">
                            <div className="skills product-manage">65%</div>
                        </div>

                        <p className="skills-title"> Python (Data Science) and Financial Engineering (Quantitative Analysis) </p>
                        <div className="container-skills">
                            <div className="skills python">65%</div>
                        </div>

                        <p className="skills-title"> BackEnd (Restful API, JSON, SQL, and Machine Learning) </p>
                        <div className="container-skills">
                            <div className="skills backend">60%</div>
                        </div>
                    </div> 
                </div>
                <Footer />
            </div> 
        ) 
    }
}