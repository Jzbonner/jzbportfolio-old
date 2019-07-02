import React, { Component } from "react";
import SkillBar from "react-skillbars"; 

import Footer from "./Footer";
import Profile from "../assets/profile.jpg";
import "../App.css";


const skills =[
  {type: "Front-end", level: 85},
  {type: "JavaScript", level: 80},
  {type: "Python", level: 72},
  {type: "Back-end", level: 70},
  {type: "UI/UX", level: 74}
];

const colors = { 

}; 



export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <p className="home-section-1">
              {" "}
              Software Engineering is the toolset for building a better
              tomorrow. Web Application development, technical writing,
              quantitative analysis and data insights are fields that I have
              honed my skill set in. Previous academic experiences in computer
              and information science, internships at mechanical/electrical
              engineering firms, and freelance projects for clients have molded
              me with a keen interest in practical design and software
              development.
              <p className="home-section-2">
                <i className="fas fa-code-branch" />
              </p>
            </p>
          </div>
          <div className="col-lg-4 col-md-4">
            <img src={Profile} className="home-pic" alt="home-pic" />
          </div>
        </div>
        {/**
          SKillbar section - **import React SKill Bar NPM package
        */}

        <div className="row">
          <div className="col-lg-9">
            <SkillBar skills={skills} height={19} /> 
          </div>
          <div className="col-lg-2" />
        </div>
        <Footer />
      </div>
    );
  }
}
