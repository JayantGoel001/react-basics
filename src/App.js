import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route,Link,Switch} from 'react-router-dom'

class App extends React.Component{
    render() {
        return (
            <div>
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
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={Home}/>
                        <Route path="/contact" component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </div>
        );
    }
}

export default App;
