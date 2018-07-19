import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper'; 
import Typography from '@material-ui/core/Typography'; 
import Footer from './Footer';

import '../App.css';

{/* 
    Add Paper Element for Resume Hover Layout. https://material-ui.com/demos/paper/
    And utilize the HTML download attribute https://www.w3schools.com/tags/att_a_download.asp
    for a PDF of the Resume 

    SIDENOTE: Update Resume design for 2018
*/}

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(), 
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2, 
    },
}); 

class Resume extends Component {
    render() {
        const { classes } = this.props; 

        return (
            <div> 
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Resume
                    </Typography> 
                    <Typography component="p">
                        Click anywhere to access resume. 
                    </Typography> 
                </Paper>
                <Footer />
            </div> 
        )
    }
}

Resume.propTypes = {
    classes: PropTypes.object.isRequired, 
}; 

export default withStyles(styles)(Resume)