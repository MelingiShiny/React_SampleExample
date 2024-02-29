import React, { Component } from 'react'

class KeyPressCounter2 extends Component {
    render() {
        const {count, incrementCount}=this.props;
        return (
            <div>
                <input type='text' onKeyUp={incrementCount}></input>
                <div>KeyPressed {count} times</div>
            </div>

        )
    }
}

export default KeyPressCounter2