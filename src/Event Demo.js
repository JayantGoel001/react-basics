import React, {Component} from 'react';

class EventDemo extends Component {
    state = {
        count : 0
    };
    handleIncrement = () =>{
        console.log('Increment Clicked');
        this.setState({
            count : this.state.count + 1
        });
    }
    handleIncrementPara = (e) =>{
        console.log(e);

        this.setState({
            count : this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <h3>Counter : <span className="badge badge-warning">{this.state.count}</span></h3>
                <button onClick={this.handleIncrement} className="btn btn-primary center-block">Increment Counter</button>
                <button onClick={()=>this.handleIncrementPara(1)} className="btn btn-primary center-block m-1">Increment Counter</button>
            </div>
        );
    }
}

export default EventDemo;