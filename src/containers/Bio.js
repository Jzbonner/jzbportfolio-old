import React, { Component } from "react";
import UNC from "../assets/unc_logo.png";
import MSFT from "../assets/mcrsft.png";
import Note from "../assets/notebook.png";

import "../App.css";

export default class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <div className="row">
          <div className="col-lg-2">
            <img className="portfolio-side-icon" src={Note} />
          </div>
          <div className="col-lg-9">
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
          <div className="col-lg-10">
            <table className="university-section">
              <tbody>
                <tr>
                  <td className="university-name">
                    <p className="general-interest-education">
                      UNC CHAPEL HILL
                      <br /> MAJORED IN INFORMATION SCIENCE
                      <br />
                    </p>
                  </td>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={UNC} alt="unc_logo" />
                  </td>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={MSFT} alt="unc_logo" />
                  </td>
                  <td className="university-name">
                    <p className="general-interest-education">
                    MICROSOFT CERTIFIED TECHNOLOGY SPECIALIST
                    <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="university-name">
                    <p className="general-interest-education">
                      MICROSOFT TECHNOLOGY ASSOCIATE
                      <br />
                    </p>
                  </td>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={MSFT} alt="unc_logo" />
                  </td>
                  <td className="university-logo">
                    <img className="uni-logo-pic" src={MSFT} alt="unc_logo" />
                  </td>
                  <td className="university-name">
                    <p className="general-interest-education">
                      MICROSOFT CERTIFIED TECHNOLOGY SPECIALIST
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
          <div className="col-lg-12">
            {/* Course Listing Section */}
            <table className="course-overview">
              <tbody>
                <tr>
                  <td className="course-title">
                    {" "}
                    INLS 202 <br />
                    Retrieval and Organizing Systems
                  </td>
                  <td className="course-description">
                    Conceptual knowledge on information retrieval techniques,
                    information organization practices, and data mining and
                    analysis
                  </td>
                </tr>
                <tr>
                  <td className="course-title">
                    {" "}
                    INLS 203/500 <br />
                    Human Information Behaviors <br />
                    and Interactions{" "}
                  </td>
                  <td className="course-description">
                    Focus on data visualization and task modeling, information
                    search behavior, human-computer interactions, user
                    interfaces, and sentiment analysis.
                  </td>
                </tr>
                <tr>
                  <td className="course-title">
                    {" "}
                    INLS 520 <br />
                    Organization of Information{" "}
                  </td>
                  <td className="course-description">
                    Practice implementing database modeling and schemas, data
                    structures and algorithms, terminological control, and index
                    language functions
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <p className="general-interest-3">
              - Gaining experience in life is about <br />
              finding your medium in a<br /> world of extremes{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
