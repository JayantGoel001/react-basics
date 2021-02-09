import React, {Component} from 'react';
import rLogo from './logo.svg'

class StyleDemo extends Component {
    h2style = {
        fontSize : 40,
        textDecoration : 'underline'
    }
    render() {
        return (
            <div>
                <img src={rLogo} alt="react"/>
                <h2 style={this.h2style}>Jayant Goel</h2>
                <p style={{fontStyle : 'italic',color:'blue'}}>
                    lorem ipsum............
                </p>
                <button className="btn btn-warning">Get Started</button>
            </div>
        );
    }
}

export default StyleDemo;