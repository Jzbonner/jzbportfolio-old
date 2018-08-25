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
        backgroundColor: 'rgba(255,157,60, 0.3)', 
    },
    design: {
        backgroundColor: '#e8f5e9',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontFamily: 'Encode Sans Semi Expanded',
        fontWeight: 'bold',
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
                <h2 className="portfolio-title">Projects</h2> 
                <p className="internship"> 
                    Internships provide opportunities to learn and grown from within the industry. Understanding the 
                    inner workings of a business gives you the opportunity to see the micro processes that culminate 
                    into a fully functioning corporation. My internship experience not only allowed me to develop my
                    technical skill set, but to also develop keen problem solving strategies to further my value 
                    as an asset in the workforce. 
                </p> 
                <p className="home-section-2"><i className="fab fa-staylinked"></i></p> 
                <p className="employment">
                    Having the opportunity to develop one's self under the leadership of an industry professional provided 
                    me with direction in my career trajectory. The challenging experience of working in settings that contrast
                    greatly from academic environments, really sparked my interest in understanding the ways in which we interact
                    with and develop everyday technologies. Understanding the daily intricacies of business operations, added 
                    a unique perspective as to how I went about completing job responsibilities as well as developing my own 
                    independent projects. 
                </p>

                <div className={classes.root}>
                    <ExpansionPanel className={classes.design} expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Financial Instrument Tracker <br/> <i className="fas fa-money-check-alt fit-icon"></i><i className="fas fa-thumbtack fit-icon"></i></Typography>
                            <Typography className={classes.secondaryHeading}>A tool for tracking financial information for various equities, commodities, stocks and other financial instruments</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography> 
                                Link to repository <a href="https://github.com/Jzbonner/FinancialInstrumentTracker">Financial Instrument Tracker Source Code</a>. 
                                Built off of financial data that is both web scraped and collected from database systems, this financial tool 
                                enables users to accurately track financial highlights of a particular commodity or equity.<br />     
                                                                                   
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.design} expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>NFL React Native App</Typography>
                            <Typography className={classes.secondaryHeading}>A web/mobile application for all your NFL News and Updates</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Details for Portfolio Project 2
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.design} expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Big Data and Data Analytics</Typography>
                            <Typography className={classes.secondaryHeading}>Crypto-currency analysis using Python and Bokeh</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                Details for Portfolio Project 3
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel disabled expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>Business Intelligence and Product Management</Typography>
                            <Typography className={classes.secondaryHeading}>In Development</Typography>
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