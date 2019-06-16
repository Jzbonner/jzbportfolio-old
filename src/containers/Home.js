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
              quantitative analysis and data insights are fields that hone my
              skill set in. Previous academic experiences in computer and
              information science, internships at mechanical/electrical
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
                <i className="fas fa-marker"></i> FrontEnd (HTML5, CSS3, Git,
                and Markdown) 93%
              </div>
            </div>
            <div className="container-skills">
              <div className="skills js">
                {' '}
                <i className="fas fa-marker"></i> JavaScript (React, Angular,
                Vue, Babel and JSX) 84%
              </div>
            </div>
            <div className="container-skills">
              <div className="skills product-manage">
                {' '}
                <i className="fas fa-marker"></i> Product Development (Tableau,
                Bokeh and Excel) 76%
              </div>
            </div>
            <div className="container-skills">
              <div className="skills python">
                {' '}
                <i className="fas fa-marker"></i> Python (Data Science and
                Quantitative Analysis) 75%
              </div>
            </div>
            <div className="container-skills">
              <div className="skills backend">
                {' '}
                <i className="fas fa-marker"></i> BackEnd (APIs, JSON, SQL, and
                Machine Learning) 72%
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
