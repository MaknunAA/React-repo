import React, { Component } from 'react';

export class MyClass extends Component {
    constructor (props){
        super(props);

        this.state = {
            count: 0
        };
    }

    countClickNeg = () => {
        this.setState ({count: this.state.count - 1});
    };

    render(){
        const { count } = this.state;
        return (
            <button onClick = {this.countClickNeg}> Negative count is {count} </button>
        )
    }
}

export default MyClass;