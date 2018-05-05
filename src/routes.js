import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from './containers/App';

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/Bio" exact component={App} />
            <Route path="/Portfolio" component={App} />
            <Route path="/Experience" exact component={App} />
            <Route path="/Resume" exact component={App} />
        </Switch> 
    </Router>
)