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
        backgroundColor: '#CEE3E0',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2, 
        height: 520, 
    },
    title: {
        fontSize: 32, 
        fontFamily: 'Encode Sans Semi Expanded',
        paddingTop: 200, 
        paddingBottom: 20, 
        textAlign: 'center', 
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
                Wrap the Paper component in an <a> tag so that 
                you can apply hover and download functionality 
            */}

                <Paper className={classes.root} elevation={1}>
                    <Typography className={classes.title} component="h2">
                        - Resume
                    </Typography> 
                    <Typography className={classes.description} component="p">
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