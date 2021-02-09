import React, {Component} from 'react';

class StateDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.name,
            occupation : "CodeChef"
        }
    }
    changeDetail = () =>{
        this.setState(
            {
                occupation:"Blogger",
                name:"Jane"
            }
        )
    }
    render() {
        return (
            <div>
                <h1>
                    Hi! I am {this.state.name},<br/> I am a {this.state.occupation}
                </h1>
                <button type="button" onClick={this.changeDetail} className="btn btn-danger center-block">Change Details.</button>
            </div>
        );
    }
}

export default StateDemo;