import React, { Component } from 'react'
import withCounter from './WithCounter'

class KeyPressCounter extends Component {

    render() {
        const { count, name, incrementCount } = this.props
        return (
            <div>
                <input type='text' onKeyUp={incrementCount}></input>
                <div>{name} KeyPressed {count} times</div>
            </div>

        )
    }
}

export default withCounter(KeyPressCounter,1)