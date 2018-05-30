import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Viewport from './Viewport';
import '../App.css';

export default class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Viewport />
                </div>
            </div>
        );
    }
}
