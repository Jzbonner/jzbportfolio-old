import React, { Component } from "react";
import ResumePic from "../assets/sidebar-icons/keyboard.png";
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
            <div className="col-lg-2">
              <img className="portfolio-side-icon" src={ResumePic} />
            </div>
            <div className="col-lg-3">
              <ul className="resume-description">
                <li>Resume</li>
                <li>Github Spotlight</li>
                <li>LinkedIn</li>
                <li>Recent Blog Post</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="resume-description">
                <li>Placeholder</li>
                <li>Book Reccomendation</li>
              </ul>
            </div>
          </div>
        </div>
    );
  }
}
