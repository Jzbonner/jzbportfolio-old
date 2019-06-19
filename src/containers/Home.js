import React, {Component} from 'react';
import Footer from './Footer';
import Student from '../assets/student.png';
import Profile from '../assets/profile.jpg';

import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <p className="home-section-1">
              {' '}
              Software Engineering is the toolset for building a better
              tomorrow. Web Application development, technical writing,
              quantitative analysis and data insights are fields that I have
              honed my skill set in. Previous academic experiences in computer
              and information science, internships at mechanical/electrical
              engineering firms, and freelance projects for clients have molded
              me with a keen interest in practical design and software
              development.
              <p className="home-section-2">
                <i className="fas fa-code-branch"></i>
              </p>
            </p>
          </div>
          <div className="col-lg-4 col-md-4">
            <img src={Profile} className="home-pic" alt="home-pic" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="container-skills">
              <div className="skills frontend">
                {' '}
                93% <i className="fas fa-marker"></i> FrontEnd
              </div>
            </div>
            <div className="container-skills">
              <div className="skills js">
                {' '}
                84% <i className="fas fa-marker"></i> JavaScript
              </div>
            </div>
            <div className="container-skills">
              <div className="skills product-manage">
                {' '}
                76% <i className="fas fa-marker"></i> Product Development
              </div>
            </div>
            <div className="container-skills">
              <div className="skills python">
                {' '}
                75% <i className="fas fa-marker"></i> Python
              </div>
            </div>
            <div className="container-skills">
              <div className="skills backend">
                {' '}
                72% <i className="fas fa-marker"></i> BackEnd
              </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <Footer />
      </div>
    );
  }
}
