import React, { Component } from 'react';
import Footer from './Footer'; 

import '../App.css';

export default class Home extends Component {
    render () {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">  
                        <p> Developer. Student. Freelancer. </p>                    
                    </div> 
                    <div className="col-lg-3">  
                        <p> Currently looking for employment and educational opportunities. </p> 
                    </div> 
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p> FrontEnd (HTML5, CSS3, Markup) </p>
                        <div className="container-skills">
                            <div className="skills frontend">90%</div>
                        </div>

                        <p> JavaScript (React), Babel (JSX) </p>
                        <div className="container-skills">
                            <div className="skills js">80%</div>
                        </div>

                        <p> Product Development, Management and Design </p>
                        <div class="container-skills">
                            <div className="skills product-manage">65%</div>
                        </div>

                        <p> Python (Data Science) and Financial Engineering </p>
                        <div class="container-skills">
                            <div className="skills python">65%</div>
                        </div>

                        <p> BackEnd (Restful API, JSON, SQL, and Machine Learning) </p>
                        <div class="container-skills">
                            <div className="skills backend">60%</div>
                        </div>
                    </div> 
                </div>

                <Footer />
            </div> 
        ) 
    }
}