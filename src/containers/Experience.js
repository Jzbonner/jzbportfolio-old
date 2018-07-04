import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Footer from './Footer';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'; 
import Typography from '@material-ui/core/Typography'; 

import '../App.css';


const styles = {
    card: { 
        backgroundColor: 'rgba(237,233,224, 0.5)', 
        minWidth: 275,
        marginBottom: 15, 
    },
    body: {
        fontSize: 14, 
        fontFamily: 'Encode Sans Semi Expanded',
    },
    bullet: {
        display: 'inline-block', 
        margin: '0 2px', 
        transform: 'scale(0.9)', 
    },
    headline: {
        fontSize: 18, 
        fontFamily: 'Encode Sans Semi Expanded',
        fontWeight: 'bold', 
    },
    title: {
        marginBottom: 12, 
        fontSize: 16, 
        fontFamily: 'Encode Sans Semi Expanded',
    }
};


class Experience extends Component {
    render() {
        const { classes } = this.props; 
        const bull = <span className={classes.bullet}>•</span>; 

        return (
            <div className="experience">
            {/* 
                Title and Card Components for Experience Section 
            */}
                <h2 className="employment-title"> Employment Experience </h2><br />
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.headline}>
                            Office of Arts and Sciences Information Services (OASIS) {bull} IT/WordPress Technician
                        </Typography> 
                        <Typography className={classes.title} color="textSecondary">
                            University of North Carolina (Chapel Hill, NC)
                        </Typography>
                        <Typography className={classes.body}>
                        <ul>
                            <li>Worked as a WordPress technician providing technology solutions and troubleshooting assistance services</li>
                            <li>Worked with UNC faculty and administration to build technological connections throughout the on-campus community</li>
                            <li>Gained proficient computer skills in HTML, WordPress, and Python; and enhanced my task management abilities in a professional work setting</li>
                        </ul> 
                        </Typography> 
                    </CardContent> 
                </Card> 
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.headline}>
                            Cisco Systems Inc. {bull} Junior/Senior Intern 
                        </Typography> 
                        <Typography className={classes.title} color="textSecondary">
                            Lawrenceville, GA
                        </Typography>
                        <Typography className={classes.body}>
                        <ul>
                            <li>Worked as a materials testing assistant in the mechanical engineering department</li> 
                            <li>Heat tested a number of different devices from set top boxes to wireless routers and modems</li> 
                            <li>Gained a fundamental understanding of IT security and Database environments (SQL & NoSQL)</li> 
                            <li>Gained knowledge on how to work with a team, how to lead a team, and the benefits and disadvantages of working solo versus in a group setting</li> 
                        </ul>
                        </Typography> 
                    </CardContent> 
                </Card> 
                <Card className={classes.card} >
                    <CardContent>
                        <Typography className={classes.headline}>
                            Monster Marketers Inc. {bull} IT Consultant/Customer Service Representative
                        </Typography>
                        <Typography className={classes.title} color="textSecondary">
                            Lawrenceville, GA
                        </Typography>
                        <Typography className={classes.body}>
                        <ul>
                            <li>Served customers by providing relevant product and advertising service information</li>
                            <li>Maintained and updated customer records and financial accounts</li>
                            <li>Developed interpersonal skills by communicating with customer clientele and company administration</li>
                            <li>Gained proficiency in an office setting as well as expertise in Microsoft Office</li>
                        </ul> 
                        </Typography> 
                    </CardContent>  
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.headline}>
                            Flood Atlanta Sub-Contracting Company {bull} Customer Service Representative 
                        </Typography> 
                        <Typography className={classes.title} color="textSecondary">
                            Lawrenceville, GA
                        </Typography> 
                        <Typography className={classes.body}>
                        <ul>
                            <li>Worked with a team to restore and renovate water-damaged properties</li>
                            <li>Worked with information databases for the purpose of storing details on company projects, customer records and financial documentation</li>
                            <li>Worked in a supporting role to the company and lead in organizing general labor projects</li>
                            <li>Gained fundamental construction and customer care/relations experience</li>
                            <li>Gained valuable experience with food preparation and food service via volunteering at local hospitals</li>
                        </ul>   
                        </Typography> 
                    </CardContent> 
                </Card> 
                <Footer />
            </div> 
        )
    }
}

Experience.propTypes = {
    classes: PropTypes.object.isRequired, 
};

export default withStyles(styles)(Experience); 