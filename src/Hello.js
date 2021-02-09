import './App.css'
import React, {Component} from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <hr/>
                <h1>
                    Hello, {this.props.name}
                </h1>
            <hr/>
            </div>
        );
    }
}

export default Hello;