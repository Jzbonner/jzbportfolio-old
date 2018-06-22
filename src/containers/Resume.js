import React, { Component } from 'react';
import Footer from './Footer';

import '../App.css';

export default class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <div className="row">
                    <div className="col-lg-12">
                        Image of Resume with Overshadow here. 
                    </div> 
                </div> 
                <Footer />
            </div> 
        )
    }
}