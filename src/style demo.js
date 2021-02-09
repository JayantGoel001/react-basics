import React, {Component} from 'react';
import rLogo from './logo.svg'

class StyleDemo extends Component {
    h2style = {
        fontSize : 40,
        textDecoration : 'underline',
        textAlign : 'center'
    }
    render() {
        return (
            <div>
                <img src={rLogo} alt="react" height="100px" width="100px"/>
                <h2 style={this.h2style}>Jayant Goel</h2>
                <p style={{fontStyle : 'italic',color:'blue',textAlign : 'center'}}>
                    lorem ipsum............
                </p>
                <button className="btn btn-warning center-block">Get Started</button>
            </div>
        );
    }
}

export default StyleDemo;