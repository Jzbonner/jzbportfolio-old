import React, { Component, PropTypes } from 'react';
import Sidebar from './Sidebar';
import Viewport from './Viewport';
import '../App.css';

export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="row">
                <Sidebar />
                <Viewport />
            </div>
        );
    }
}