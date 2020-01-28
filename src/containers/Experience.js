import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Ram from "../assets/sidebar-icons/ram.png";

import "../App.css";

const styles = {
  card: {
    backgroundColor: "rgba(245,245,245, 0.5)",
    border: "1px solid #9F9F9F",
    boxShadow: "1px 1px rgb(213,204,195)",
    height: 240,
    minWidth: 275,
    maxWidth: 385,
    marginBottom: 35,
    paddingBottom: 30
  },
  body: {
    fontSize: 14,
    fontFamily: "Encode Sans Semi Expanded",
    marginTop: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.9)"
  },
  headline: {
    fontSize: 16,
    fontFamily: "Encode Sans Semi Expanded",
    fontWeight: "bold"
  },
  title: {
    color: "black",
    borderTop: "2px solid grey",
    borderRadius: 2,
    padding: 4,
    marginBottom: 1,
    fontSize: 14,
    fontFamily: "Encode Sans Semi Expanded",
    textAlign: "left"
  },
  titleText: {
    color: "#05090F",
    fontSize: 13,
    fontFamily: "Encode Sans Semi Expanded",
    fontWeight: "bold",
    textAlign: "left"
  }
};

class Experience extends Component {
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <div className="experience container-fluid">
        {/* 
                Title and Card Components for Experience Section - Add an 
                additional card for freelance contract work experience 
            */}
        <div className="row">
          <div className="col-lg-2 side-icon-bg">
            <img className="portfolio-side-icon" src={Ram} />
            <br />
          </div>
          <div className="col-lg-4 description-ex-bg">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  REPLI, LLC {bull} <br /> Front-End Software Developer
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Suwanee, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  Oct '19 - Present
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Developed integrated static and dynamic web applications for
                    multifamily residence community organizations using PHP,
                    AWS, Docker, and Front-End technologies
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  DecoNetwork America {bull} <br /> Software Specialist
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Sugar Hill, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  May '19 - Nov '19
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Provided technical assistance, debugging support, and test
                    automation for a proprietary software solution for clients
                    in the printing and embroidery industry using Ruby on Rails
                    and MySQL
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Multiple Organizations {bull} <br /> Freelance Web Application
                  Developer
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Remote (Lawrenceville, GA)
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  Jan '18 - Present
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Created solutions for data organization and web-based issues
                    using a combination of JavaScript frameworks, middleware
                    engines and back-end query languages
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Microsoft - Visual Studio Team {bull} <br /> Contract Quality
                  Assurance Tester
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Remote (Durham, NC)
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  Nov '17 - Dec '17
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Aided in Q/A testing, stress testing and debugging of a prototype build of Visual Studio 2019.
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-lg-5 description-ex-2-bg">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Office of Arts and Sciences Information Services (OASIS){" "}
                  {bull} <br /> IT WordPress Technician
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  University of North Carolina (Chapel Hill)
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  Jan '13 - Jan '16
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Worked with department faculty to develop WordPress admin
                    panels and WordPress websites using custom HTML, CSS and
                    jQuery components
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Cisco Systems Inc. {bull} <br /> Junior/Senior Intern
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Lawrenceville, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  Jan '10 - Jan '12
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Shadowed Mechanical and Material Engineers on projects that
                    required developing cross platform IT and Network Security
                    solutions using Unix/Linux shell scripting
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Monster Marketers Inc. {bull} <br />
                  IT Consultant
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Lawrenceville, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  May '10 - Aug '10
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Facilitated client service interactions on relevant
                    marketing and advertising packages. Maintained customer
                    records using Microsoft Office and Google Suite.
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Flood Atlanta LLC {bull} <br />
                  Customer Service Representative
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Lawrenceville, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  May '09 - August '10
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Worked with a physical labor team to restore and renovate
                    water-damaged properties and communities.
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Experience);
