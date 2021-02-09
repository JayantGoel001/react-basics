import React, {Component} from 'react';

class Age extends Component{
    render(){
        let age = 2021 - this.props.details.year;
        return <h1>Hey {this.props.details.name}!, You are {age} years old.</h1>
    }
}

class Person extends Component{
    render() {
        const personInfo = {name : "Chris",year : 1976}
        return (
            <div>
                <Age details = {personInfo}/>
            </div>
        );
    }

}
export default Person;