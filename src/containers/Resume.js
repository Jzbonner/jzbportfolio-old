import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { withStyles } from '@material-ui/core/styles'; 
import Paper from '@material-ui/core/Paper'; 
import Typography from '@material-ui/core/Typography'; 
import Footer from './Footer';

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
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2, 
        height: 320, 
    },
    title: {
        fontSize: 32, 
        fontFamily: 'Encode Sans Semi Expanded',
        paddingTop: 100, 
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
                <a className="resume-link" href="#"> 
                    <Paper className={classes.root} elevation={1}>
                        <Typography className={classes.title} component="h2">
                            - Resume
                        </Typography> 
                        <Typography className={classes.description} component="p">
                            Click anywhere to access resume.
                        </Typography> 
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