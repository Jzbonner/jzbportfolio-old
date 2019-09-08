import React, { Component } from "react";
import logo from "../assets/logo-icons/logo.svg";

import Github from "../assets/logo-icons/github-logo.png";
import LinkedIn from "../assets/logo-icons/linkedin-logo.png";
import Medium from "../assets/logo-icons/medium.png";
import Blog from "../assets/logo-icons/blog.png";

import "../App.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <table className="table-markee">
          <tbody>
            <tr>
              <td className="portfolio-id">
                <img src={logo} className="portfolio-logo" alt="logo" />
              </td>
              <td className="portfolio-id">
                <h1 className="sidebar-title">JARRETT</h1>
                <h4 className="sidebar-sub-title">BONNER</h4>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table-quick-links">
          <tbody>
            <tr>
              <td className="quick-links">
                <a
                  href="https://github.com/Jzbonner"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Github"
                >
                  <img src={Github} className="quick-links-img" alt="github" />
                </a>
              </td>
              <td className="quick-links">
                <a
                  href="https://www.linkedin.com/in/jarrett-bonner-28048339/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="LinkedIn"
                >
                  <img
                    src={LinkedIn}
                    className="quick-links-img"
                    alt="linkedin"
                  />
                </a>
              </td>
              <td className="quick-links">
                <a
                  href="https://medium.com/@jarrett.bonner"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Medium"
                >
                  <img src={Medium} className="quick-links-img" alt="medium" />
                </a>
              </td>
              <td className="quick-links">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Blog Soon Come"
                >
                  <img src={Blog} className="quick-links-img" alt="blog" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
 