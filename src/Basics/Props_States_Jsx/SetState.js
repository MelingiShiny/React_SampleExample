import React from 'react';
import { Component } from 'react';

//props using class component
class SetState extends Component {

    constructor(props) {
        super(props)

        this.state ={
            count:0
        }
    }

    increment() {
        //normal setfunction and callback function
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('callback', this.state.count) })
        
        //to reflect state value with prev value
        this.setState((prevState) => ({
            count: prevState.count +1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render(){
       return (
        <div>
            <div> Count = {this.state.count}</div>
            <button onClick = {() => this.incrementFive()}>Increment</button>  
        </div>
       )
    }
}

export default SetState