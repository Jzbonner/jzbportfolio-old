import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './containers/Home';


export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Bio" exact component={Home} />
            <Route path="/Portfolio" component={Home} />
            <Route path="/Experience" exact component={Home} />
            <Route path="/Resume" exact component={Home} />
        </Switch> 
    </Router>
)