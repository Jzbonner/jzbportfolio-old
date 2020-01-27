import React, { Component } from "react";
import ResumePic from "../assets/sidebar-icons/keyboard.png";
import GoogleDocsViewer from "react-google-docs-viewer";
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
                <li>Github Spotlight</li>
                <li>LinkedIn</li>
                <li>Recent Blog Post</li>
                <li>Book Reccomendation</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <GoogleDocsViewer 
                width="600px"
                height="780px"
                fileUrl="https://docs.google.com/document/d/1VxIm4JczdkoOJcBylz5pvuIAzBPQv_zguVvN2OTfJB4/edit?usp=sharing"
              />
            </div>
          </div>
        </div>
    );
  }
}
