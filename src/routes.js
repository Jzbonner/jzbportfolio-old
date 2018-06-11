import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './containers/App';


export default (
    <Router>
        <Route path="/" exact component={App} />  
    </Router>
)