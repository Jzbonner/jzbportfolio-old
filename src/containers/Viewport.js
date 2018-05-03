import React, { Component, PropTypes } from 'react';
import logo from '../assets/logo.svg';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

import '../App.css';

export default class Viewport extends Component {
    render() {
        return (
            <div className="col-md-9 viewport">
                <div className="row nav-section border">
                    <Navbar />
                </div>
                <div className="row">
                    <div className="col-md-1"></div> 
                    <div className="col-md-10"> 
                        <Content />
                        <Footer />
                    </div>
                    <div className="col-md-1"></div> 
                </div> 
            </div>           
        )
    }
}