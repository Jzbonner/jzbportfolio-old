import React, { Component } from 'react';
import Footer from './Footer'; 

import '../App.css';

export default class Bio extends Component {
    render() {
        return (
            <div className="bio"> 
                Biography Content 

                <Footer />
            </div>
        )
    }
}