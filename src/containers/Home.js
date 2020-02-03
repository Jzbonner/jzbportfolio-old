import React, { Component } from "react";
import SkillBar from "react-skillbars";
import Calendar from 'react-github-contribution-calendar';
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

    var values_2018 = {
      "2018-01-01": 4,
      "2018-01-02": 3,
      "2018-01-03": 4,
      "2018-01-04": 3,
      "2018-01-05": 4,
      "2018-01-06": 3,
      "2018-01-07": 3,
      "2018-01-08": 4,
      "2018-01-09": 3,
      "2018-01-10": 4,
      "2018-01-11": 3,
      "2018-01-12": 4,
      "2018-01-13": 5,
      "2018-01-14": 4,
      "2018-01-15": 4,
      "2018-01-16": 5,
      "2018-01-17": 4,
      "2018-01-18": 5,
      "2018-01-19": 4,
      "2018-01-20": 5,
      "2018-01-21": 4,
      "2018-01-22": 5,
      "2018-01-23": 5,
      "2018-01-24": 6,
      "2018-01-25": 5,
      "2018-01-26": 4,
      "2018-01-27": 3,
      "2018-01-28": 4,
      "2018-01-29": 5,
      "2018-01-30": 4,
      "2018-01-31": 3
    }
    var values_2019 = {
      '2019-01-23': 3,
      '2019-01-26': 2,
      '2019-01-27': 3,
      '2019-01-28': 4,
      '2019-01-29': 4
    }
    var until_2018 = '2018-11-30';
    var until_2019 = '2019-11-30';

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
            <p className="github-info">@jzbonner (contributions in 2019)</p>
            <Calendar values={values_2019} until={until_2019} />
            <p className="github-info">@jzbonner (contributions in 2018)</p>
            <Calendar values={values_2018} until={until_2018} />
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    );
  }
}