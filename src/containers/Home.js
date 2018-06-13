import React, { Component } from 'react';
import Footer from './Footer'; 

import '../App.css';

export default class Home extends Component {
    render () {
        return (
            <div className="home">
                Home Content

                <Footer />
            </div> 
        ) 
    }
}