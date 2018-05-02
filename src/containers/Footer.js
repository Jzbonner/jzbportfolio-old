import React, { Component, PropTypes } from 'react';
import Credit from '../assets/source-code.png';


import '../App.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer"> 
                <div className="row">
                    <div className="col-md-1">
                        <img src={Credit} className="footer-img" alt="credit"/>
                    </div>
                    <div className="col-md-9">
                        <table className="footer-table">
                            <th className="footer-links"><p className="footer-title"><i class="far fa-envelope-open"></i> &nbsp;  Contact Me </p></th>
                            <th className="footer-links"><p className="footer-title"><i class="fas fa-balance-scale"></i> &nbsp;  MIT License </p></th>
                        </table> 
                    </div>
                    
                </div>
            </div>
        )
    }
}