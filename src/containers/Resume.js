import React, { Component } from "react";
import ResumePic from "../assets/sidebar-icons/keyboard.png";
import resumePreview from "../assets/report.png";
import blogPreveiw from "../assets/processing.png";
import "../App.css";

{
  /* 
    TODO: Update Resume design for 2018 and link Grad Resume to page 
*/
}

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-section">
        <div className="row">
          <div className="col-lg-2 side-icon-bg">
            <img className="portfolio-side-icon" src={ResumePic} />
          </div>
          <div className="col-lg-9 description-bg">
            <ul className="resume-description">
              <li> Github Spotlight</li>
              <li> LinkedIn</li>
              <li> Recent Blog Post</li>
              <li> Book Reccomendation</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-4 resume-mid-section-container">
            <div className="row resume-mid-section-box-upper">
              <div className="col-lg-11">
                <p className="mid-section-title">CV/RESUME</p>
              </div>
            </div>
            <div className="row resume-mid-section-box-lower">
              <div className="col-lg-12">
                <a className="resume-links" href="https://docs.google.com/document/d/1VxIm4JczdkoOJcBylz5pvuIAzBPQv_zguVvN2OTfJB4/edit?usp=sharing">
                  <p className="mid-section-sub-title">⚫  Skillset and Credentials</p>
                  <img
                    className="resume-brand"
                    src={resumePreview}
                    alt="resume-brand"
                  />
                  <p className="click-me">Link to Resume Here</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
          <div className="col-lg-4 resume-mid-section-container">
            <div className="row resume-mid-section-box-upper">
              <div className="col-lg-11">
                <p className="mid-section-title">DEVELOPER HANDSHAKE</p>
              </div>
            </div>
            <div className="row resume-mid-section-box-lower">
              <div className="col-lg-12">
                <a className="resume-links" href="https://developer-handshake.github.io/">
                <p className="mid-section-sub-title">⚫  A Blog About Open Source</p>
                  <img
                    className="resume-brand"
                    src={blogPreveiw}
                    alt="resume-brand"
                  />
                  <p className="click-me">Link to Blog Here</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    );
  }
}
