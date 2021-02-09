import React, {Component} from 'react';

class ConditionalRendering extends Component {
    state = {
        fruits : ['Apple','Banana','Orange']
    };
    renderFruits(){
        if (this.state.fruits.length===0){
            return <p>No Fruits!</p>
        }
        return (
            <ul>
                {this.state.fruits.map(fruit=> <li key={fruit}>{fruit}</li>)}
            </ul>
        )
    }
    render() {
        return (
            <div>
                {this.renderFruits()};
            </div>
        );
    }
}

export default ConditionalRendering;