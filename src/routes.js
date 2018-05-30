import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from './containers/App';


export default (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/Bio" exact component={App} /> 

            {/*
                
                The below routes do keep track of the browser URL 
                but they do not render the correct components on their own. 
                Look into how to handle that error so when someone reloads the 
                page on that specific url specification it loads the correct 
                component class. 

            */}
            
            <Route path="/Portfolio" component={App} />
            <Route path="/Experience" exact component={App} />
            <Route path="/Resume" exact component={App} />
            
        </Switch> 
    </Router>
)