/**
 * Link "placeholder" button to a single page application 
 * that displays system architecture of site and refer 
 * to it as site map. 
 */

import React, { Component } from "react";

import "../App.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="row footer">
        <a className="footer-link" href="mailto:jarrett.bonner@gmail.com">
          <p className="footer-title">
            <i className="fa fa-envelope" /> &nbsp; Contact Me{" "}
          </p>
        </a>
        <a className="footer-link" href="https://opensource.org/licenses/MIT">
          <p className="footer-title">
            <i className="fa fa-list-alt" /> &nbsp; MIT License{" "}
          </p>
        </a>
        <a className="footer-link" href="#">
          <p className="footer-title">
            <i className="fa fa-space-shuttle" /> &nbsp; SiteMap{" "}
          </p>
        </a>
      </div>
    );
  }
}
