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
                <img src={logo} className="portfolio-logo" alt="logo"/>
                <h2 className="portfolio-title"> Jarrett Bonner </h2>

                <p className="portfolio-tagline"> Developer. </p>
                <p className="portfolio-tagline"> Student. </p>
                <p className="portfolio-tagline"> Freelancer. </p>

                <table className="table-quick-links">
                    <th className="quick-links"><img src={Github} className="quick-links-img" alt="github"/></th>
                    <th className="quick-links"><img src={LinkedIn} className="quick-links-img" alt="linkedin"/></th>
                    <th className="quick-links"><img src={Medium} className="quick-links-img" alt="medium"/></th>
                    <th className="quick-links"><img src={Blog} className="quick-links-img" alt="blog"/></th>
                </table>

            </div>
        )
    }
}  