import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper'; 
import Typography from '@material-ui/core/Typography'; 
import Footer from './Footer';
import ResumePic from '../assets/resume.png';

import '../App.css';

{/* 
    Add Hover Functionality to Paper Material UI using the onMouseEnter event and onMouseLeave event. 
    Check out this documentation for reference: https://material-ui.com/utils/popover/

    SIDENOTE: Update Resume design for 2018
*/}

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(), 
        backgroundImage: '-webkit-linear-gradient(240deg, rgba(238,238,238, 0.8) 90%, #B5B6BC 10%)',
        border: '2px solid #9F9F9F',  
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2, 
        height: 320, 
    },
    description: {
        fontSize: 16, 
        fontFamily: 'Encode Sans Semi Expanded',
        textAlign: 'center', 
    }
}); 

class Resume extends Component {
    render() {
        const { classes } = this.props; 

        return (
            <div> 
            {/* 
                Resume layout for functionality and design
            */}
                <a className="resume-link" href="../assets/jzb-resume.docx" download> 
                    <Paper className={classes.root} elevation={1}>
                        <div className="row">
                            <div className="col-md-12">
                                <img className="resume-pic" src={ResumePic} alt="resume" /> 
                            </div> 
                            {/*<div className="col-md-10">
                                <Typography className={classes.description} component="p">
                                    Click anywhere to access resume.
                                </Typography> 
                            </div>*/} 
                        </div>                                       
                    </Paper>
                </a>

                <Footer />
            </div> 
        )
    }
}

Resume.propTypes = {
    classes: PropTypes.object.isRequired, 
}; 

export default withStyles(styles)(Resume)