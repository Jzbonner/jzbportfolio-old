import React, { Component, PropTypes } from 'react';

import '../App.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="row footer">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <a className="footer-link" href="mailto:jarrett.bonner@gmail.com"><p className="footer-title"><i class="far fa-envelope-open"></i> &nbsp;  Contact Me </p></a>
                </div>
                <div className="col-md-3">
                    <a className="footer-link" href="https://opensource.org/licenses/MIT"><p className="footer-title"><i class="fas fa-balance-scale"></i> &nbsp;  MIT License </p></a>
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}
