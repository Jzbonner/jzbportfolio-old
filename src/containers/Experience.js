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
    minWidth: 275,
    maxWidth: 385,
    marginBottom: 20
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
          <div className="col-lg-2">
            <img className="portfolio-side-icon" src={Ram} />
            <br />
          </div>
          <div className="col-lg-5">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  DecoNetwork America {bull} <br /> Software Specialist
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Sugar Hill, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  May '19 - Present
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Provide technical assistance and customer support for
                    routine and failure situations. Maintain software systems
                    and management protocols. Implement, test, and upgrade
                    systems across the organization. Document software systems,
                    user methods, and procedures for reference resources and
                    daily operation efficiency.
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
                    Solved engineering problems by applying analysis and problem
                    solving skills using JavaScript Frameworks, Middleware
                    Engines and Back-End Database Architecture. Developed web
                    applications for obtaining, processing, and storing
                    generated data from online ecosystems
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
                    Worked with Microsoft personnel in order to fully test and
                    demonstrate full IDE functionality for Visual Studio 2019.
                    Completed routine testing and debugging protocols and
                    documented/communicated results to executive team leaders.
                  </p>
                </Typography>
              </CardContent>
            </Card>
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
                    Gained proficient computer skills in HTML, WordPress, and
                    Python; and enhanced my task management abilities in a
                    professional work setting. Worked with UNC faculty and
                    administration to build technological connections throughout
                    the on-campus community
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-lg-5">
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
                    Achievements/Tasks Worked as a materials testing assistant
                    in the mechanical engineering department Gained a
                    fundamental understanding of IT security and SQL
                    environments such as Microsoft Access and MySQL
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Monster Marketers Inc. {bull} <br />IT Consultant
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Lawrenceville, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  May '10 - Aug '10
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Served customers by providing relevant product and
                    advertising service information. Maintained and updated
                    customer records. Developed interpersonal skills by
                    communicating with customer clientele and company
                    administration. Gained proficiency in an office setting as
                    well as expertise in Microsoft Office
                  </p>
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.headline}>
                  Flood Atlanta LLC {bull} <br />Customer Service
                  Representative
                </Typography>
                <Typography className={classes.title} color="textSecondary">
                  Lawrenceville, GA
                </Typography>
                <Typography className={classes.titleText} color="textSecondary">
                  May '09 - August '10
                </Typography>
                <Typography className={classes.body}>
                  <p>
                    Worked with a team to restore and renovate water-damaged
                    properties. Worked with information databases for the
                    purpose of storing details on company projects, customer
                    records and financial documentation. Worked in a supporting
                    role to the company and lead in organizing general labor
                    projects.
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
