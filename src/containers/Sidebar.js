import React, { Component, PropTypes } from 'react';
import logo from '../assets/logo.svg';
import Github from '../assets/github-logo.png';
import LinkedIn from '../assets/linkedin-logo.png';
import Medium from '../assets/medium.png';
import Blog from '../assets/blog.png';

import '../App.css';

export default class Sidebar extends Component {
    render() {
        return ( 
            <div className="col-md-3 sidebar"> 
                <div className=" sidebar-bg">
                    <img src={logo} className="portfolio-logo" alt="logo"/>
                    <h2 className="portfolio-title"> Jarrett Bonner </h2>

                    <p className="portfolio-tagline"> Developer. </p>
                    <p className="portfolio-tagline"> Student. </p>
                    <p className="portfolio-tagline"> Freelancer. </p>

                    <table className="table-quick-links">
                        <th className="quick-links"><a href="https://github.com/Jzbonner"><img src={Github} className="quick-links-img" alt="github"/></a></th>
                        <th className="quick-links"><a href="https://www.linkedin.com/in/jarrett-bonner-28048339/"><img src={LinkedIn} className="quick-links-img" alt="linkedin"/></a></th>
                        <th className="quick-links"><a href="https://medium.com/@jarrett.bonner"><img src={Medium} className="quick-links-img" alt="medium"/></a></th>
                        <th className="quick-links"><a href="_blank"><img src={Blog} className="quick-links-img" alt="blog"/></a></th>
                    </table>
                </div>
            </div>
        )
    }
}  