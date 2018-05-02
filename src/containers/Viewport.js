import React, { Component, PropTypes } from 'react';
import logo from '../assets/logo.svg';
import Footer from './Footer'
import '../App.css';

export default class Viewport extends Component {
    render() {
        return (
            <div className="col-md-9 viewport"> 
                <div className="content-view"> Content View </div>
                <Footer />
            </div>
        )
    }
}