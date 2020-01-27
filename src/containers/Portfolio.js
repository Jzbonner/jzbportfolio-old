import React, { Component } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import python from "../assets/portfolio-icons/python.png";
import css from "../assets/portfolio-icons/css-3.png";
import html from "../assets/portfolio-icons/html-5.png";
import js from "../assets/portfolio-icons/javascript.png";
import react from "../assets/portfolio-icons/react.png";
import git from "../assets/portfolio-icons/git.png";
import nodejs from "../assets/portfolio-icons/nodejs.png";
import sql from "../assets/portfolio-icons/sql.png";
import linux from "../assets/portfolio-icons/linux.png";
import android from "../assets/portfolio-icons/android.png";
import photoshop from "../assets/portfolio-icons/photoshop.png";
import office from "../assets/portfolio-icons/office.png";
import drive from "../assets/portfolio-icons/drive.png";
import briefcase from "../assets/sidebar-icons/hard-drive.png";
import php from "../assets/portfolio-icons/php.png";
import docker from "../assets/portfolio-icons/docker.png";
import "../App.css";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "rgba(255,157,60, 0.0)",
    paddingBottom: "24px",
    marginTop: "45px"
  },
  design: {
    borderRadius: "3px",
    backgroundColor: "rgba(234,212,194, 0.4)",
    marginBottom: "24px",
    boxshadow: "0px 0px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontFamily: "Encode Sans Semi Expanded",
    fontWeight: "bold",
    flexBasis: "33.33%",
    flexShrink: 0,
    padding: 8,
    textAlign: "right"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginTop: 5,
    paddingLeft: 15,
    paddingTop: 11
  },
  description: {
    fontFamily: "Encode Sans Semi Expanded"
  }
});

class Portfolio extends Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className="portfolio container-fluid">
        <div className="row">
          <div className="col-lg-2 side-icon-bg">
            <img className="portfolio-side-icon" src={briefcase} />
          </div>
          <div className="col-lg-9 description-bg">
            <p className="internship">
              My internship and employment experiences have allowed me the
              opportunity to develop a skill-set geared towards the tech
              industry. Having worked with a plethora of technologies and
              operational systems, I have become well equipped with handling a
              multitude of task from networking architecture and web development
              to help-desk operations and account management.
            </p>
          </div>
          <div className="col-lg-1" />
        </div>
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-5">
            <table className="portfolio-skills">
              <tbody>
                <tr>
                  <td>
                    <img className="portfolio-skills-icon" src={office} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={js} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={docker} />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="portfolio-skills-icon" src={css} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={nodejs} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={git} />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="portfolio-skills-icon" src={react} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={sql} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={linux} />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="portfolio-skills-icon" src={photoshop} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={android} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={drive} />{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="portfolio-skills-icon" src={php} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={python} />{" "}
                  </td>
                  <td>
                    <img className="portfolio-skills-icon" src={html} />{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-lg-5">
            <div className={classes.root}>
              <ExpansionPanel
                className={classes.design}
                expanded={expanded === "panel1"}
                onChange={this.handleChange("panel1")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    <i className="fas fa-hand-holding-usd fit-icon" />
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Full Stack
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.description}>
                    Project Details Coming Soon...
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                className={classes.design}
                expanded={expanded === "panel2"}
                onChange={this.handleChange("panel2")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    <i className="fas fa-mobile fit-icon" />
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    React Native
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.description}>
                    Project Details Coming Soon...
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                className={classes.design}
                expanded={expanded === "panel3"}
                onChange={this.handleChange("panel3")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    <i className="fas fa-database fit-icon" />
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Big Data
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.description}>
                    Project Details Coming Soon...
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                className={classes.design}
                expanded={expanded === "panel4"}
                onChange={this.handleChange("panel4")}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    <i className="fas fa-fingerprint fit-icon" />
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Business Intelligence
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.description}>
                    Project Details Coming Soon...
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Portfolio);
