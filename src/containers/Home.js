import React, { Component } from "react";
import SkillBar from "react-skillbars";
import GitHubCalendar from "react-github-calendar";
import cpu from "../assets/sidebar-icons/cpu.png";
import "../App.css";

import brain from "../assets/home-icons/brain.svg"

{
  /*Constant Variable for SkillBar attributes*/
}
const skills = [
  { type: "Front-end", level: 85 },
  { type: "JavaScript", level: 80 },
  { type: "Python", level: 72 },
  { type: "Back-end", level: 70 },
  { type: "UI/UX", level: 74 }
];

{
  /*Constant Variable for SkillBar attributes*/
}
const colors = {
  bar: "#FFAF4C",
  title: {
    text: {
      hue: {
        minimum: 80,
        maximum: 150
      },
      saturation: 20,
      level: {
        minimum: 60,
        maximum: 90
      }
    },
    background: {
      hue: 20,
      saturation: 80,
      level: 40
    }
  }
};

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 side-icon-bg">
            <img className="portfolio-side-icon" src={cpu} />
          </div>
          <div className="col-lg-9 description-bg">
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
            </p>
          </div>
        </div>

        {/* SkillBar Section */}
        <div className="row skillbars">
          <div className="col-lg-1" />
          <div className="col-lg-6">
            <SkillBar skills={skills} colors={colors} height={22} />
          </div>
          <div className="col-lg-3 home-brand-div">
            <img className="home-brand" src={brain} alt="home-brand"/>
          </div>
        </div>

        {/**Github Contribution Section */}
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-8 github-section">
            <GitHubCalendar
              username="Jzbonner"
              years={[2019, 2018]}
              fullYear={false}
              fontSize={12}
              blockSize={10}
              blockMargin={4}
              color="hsl(203, 82%, 33%)"
            />
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    );
  }
}