import React, {Component} from 'react';

class DynamicStyleDemo extends Component {
    state = {
        marks:20
    }
    render() {
        let classes = "btn btn-";
        classes += (this.state.marks)>30 ? "primary" : "danger";

        return (
            <h3>Result : &nbsp;
                <span className={classes}>{this.state.marks > 30 ? 'Pass':'Fail'}</span>
            </h3>
        );
    }
}

export default DynamicStyleDemo;