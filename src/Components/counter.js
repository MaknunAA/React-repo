import React, { Component } from 'react';
import UpdatedClickComp from './highOrder.js' 

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
            <button onClick = {this.countClickNeg}> {this.props.name} has a  Negative count of {count} </button>
        )
    }
}

export default UpdatedClickComp(MyClass);