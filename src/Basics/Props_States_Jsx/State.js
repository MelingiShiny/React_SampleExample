import React, { Component } from 'react';

//state and set state using class comopnent
class State extends Component {
    constructor() {
        super()
            this.state = {
                message : 'Welcome'
            }
        
    }

    changeMessage() {
        this.setState({
            message: ' Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h4> Hi {this.state.message} </h4>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default State