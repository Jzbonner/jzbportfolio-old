import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Footer from './Footer';
import '../App.css';

const styles = theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  });

{/* 
    Add Expansion Panel Design from Material UI to coordinate the portfolio preview sections 
    https://material-ui.com/demos/expansion-panels/
*/}

class Portfolio extends Component {
    state = {
        expanded: null, 
    }; 

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false, 
        }); 
    };  

    render() {
        const { classes } = this.props; 
        const { expanded } = this.state; 

        return (
            <div className="portfolio">
                <p className="internship"> 
                    My time spent interning with Cisco Systems Inc. allowed me to work both independently and in group settings, 
                    while also developing my proficiency with Information Technology tools and resources. I have a strong passion 
                    for all things tech related, and that interest has allowed me to develop keen problem solving strategies 
                    to best approach the task at hand. 
                </p> 
                <p className="home-section-2"><i className="fab fa-staylinked"></i></p> 
                <p className="employment">
                    My time spent at UNC’s Office of Arts and Sciences Information Services Department as a WordPress technician, gave me 
                    firsthand experience working directly with clients to reach web service related goals. I was able to grow my communication 
                    skills, resolve customer complaints, and gain familiarity with Customer Relationship Management platforms (CRM). I utilized 
                    much of these skills during my time as an Information Technology Consultant and Customer Service Representative for Monster 
                    Marketer’s Inc. Working in the marketing and advertising realm, increased my knowledge of SEO technologies and Social Media/Web 
                    2.0 Applications. Combining these skills with my college related coursework in systems development and project management, allowed 
                    me to understand the daily intricacies of operating a business to business company.
                </p>

                <div className={classes.root}>
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Portfolio Project 1</Typography>
                            <Typography className={classes.secondaryHeading}>Summary 1</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Details for Portfolio Project 1 
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Portfolio Project 2</Typography>
                            <Typography className={classes.secondaryHeading}>Summary 2</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Details for Portfolio Project 2
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Portfolio Project 3</Typography>
                            <Typography className={classes.secondaryHeading}>Summary 3</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Details for Portfolio Project 3
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Portfolio Project 4</Typography>
                            <Typography className={classes.secondaryHeading}>Summary 4</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Details for Portfolio Project 4
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div> 
                <Footer />
            </div> 
        )
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
}; 

export default withStyles(styles)(Portfolio); 