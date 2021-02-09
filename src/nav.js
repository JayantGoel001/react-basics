import {Link, Route, Switch} from "react-router-dom";
import About from "./about";
import Contact from "./contact";
import NotFound from "./NotFound";
import App from "./App";
import * as React from "react";

class Nav extends React.Component{
    render() {
        return(
        <div>
            <h2>React Router Demo</h2>
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <hr/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
        );
    }
}
export default Nav;