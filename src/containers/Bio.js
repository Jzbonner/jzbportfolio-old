import React, { Component } from "react";
import UNC from "../assets/bio-icons/unc.png";
import MSFT from "../assets/bio-icons/mcrsft.png";
import Note from "../assets/sidebar-icons/graphics-card.png";
import Habitat from "../assets/bio-icons/habitat.png";
import Skills from "../assets/bio-icons/skills.png"; 

import "../App.css";

export default class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <div className="row">
          <div className="col-lg-2">
            <img className="portfolio-side-icon" src={Note} />
          </div>
          <div className="col-lg-8">
            <p className="general-interest">
              Through educational coursework at UNC-CH and employment experience
              in the industry, I have expanded my skill-set and interest to
              include data science competitions, freelance web development,
              foreign language (Spanish), quantitative analysis and data
              visualization
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-5">
            <table className="course-overview">
              <tbody>
                <tr>
                  <td className="course-title">INLS 202</td>
                  <td className="course-description">
                    Information Retrieval: Conceptual knowledge on information
                    retrieval techniques, information organization practices,
                    and data mining and analysis
                  </td>
                </tr>
                <tr>
                  <td className="course-title">
                    {" "}
                    INLS 500 <br />
                  </td>
                  <td className="course-description">
                    Human Computer Interaction: Focused on data visualization
                    and modeling, information search behavior, human-computer
                    interactions, and user interfaces
                  </td>
                </tr>
                <tr>
                  <td className="course-title">
                    {" "}
                    INLS 520 <br />
                  </td>
                  <td className="course-description">
                    Organization of Information: Implemented database modeles
                    and schemas, data structures and algorithms, terminological
                    control, and index language functions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-5">
            <img className="university-section-skills-logo" src={Skills} />
            <table className="university-section">
              <tbody>
                <tr>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={UNC} alt="unc_logo" />
                  </td>
                  <td className="university-name">
                    <p className="general-interest-education-secondary">
                      UNC-CH
                      <br /> INFORMATION SCIENCE
                      <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={MSFT} alt="unc_logo" />
                  </td>
                  <td className="university-name">
                    <p className="general-interest-education-secondary">
                      MSFT CERTIFIED TECHNOLOGY
                      <br /> SPECIALIST
                      <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={MSFT} alt="unc_logo" />
                  </td>
                  <td className="university-name">
                    <p className="general-interest-education-secondary">
                      MSFT TECHNOLOGY
                      <br />
                      ASSOCIATE
                      <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="university-logo">
                    <img
                      className="uni-logo-pic"
                      src={Habitat}
                      alt="unc_logo"
                    />
                  </td>
                  <td className="university-name">
                    <p className="general-interest-education-secondary">
                      HABITAT FOR HUMANITY
                      <br />
                      VOLUNTEER
                      <br />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-1" />
        </div>
        <div className="row">
            <div className="col-lg-3" />
            <div className="col-lg-7">
              <p className="general-interest-3">
                Gaining experience in life is about finding your <br />
                medium in a world of extremes{" "}
              </p>
            </div>
            <div className="col-lg-2" />
          </div>
      </div>
    );
  }
}
