import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "../App.css";  

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  handleStateChange() {
    this.setState({ menuOpen: this.state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <Menu
        width={"200px"}
        className="sidebar-slide"
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
      >
        <li onClick={() => this.closeMenu()} className="nav-item">
          <Link to="/Home" id="home" className="nav-link">
            <p className="nav-id">
              <i id="icon" className="fas fa-circle-notch" /> HOME{" "}
            </p>
          </Link>
        </li>
        <li onClick={() => this.closeMenu()} className="nav-item">
          <Link to="/Bio" className="nav-link">
            <p className="nav-id">
              <i id="icon" className="far fa-user-circle" /> BIO{" "}
            </p>
          </Link>
        </li>
        <li onClick={() => this.closeMenu()} className="nav-item">
          <Link to="/Experience" className="nav-link">
            <p className="nav-id">
              <i id="icon" className="fas fa-flask" /> EXPERIENCE{" "}
            </p>
          </Link>
        </li>
        <li onClick={() => this.closeMenu()} className="nav-item">
          <Link to="/Portfolio" className="nav-link">
            <p className="nav-id">
              <i id="icon" className="far fa-file-alt" /> PORTFOLIO{" "}
            </p>
          </Link>
        </li>
        <li onClick={() => this.closeMenu()} className="nav-item">
          <Link to="/Resume" className="nav-link">
            <p className="nav-id">
              <i id="icon" className="fas fa-align-right" /> RESUME{" "}
            </p>
          </Link>
        </li>
      </Menu>
    );
  }
}
