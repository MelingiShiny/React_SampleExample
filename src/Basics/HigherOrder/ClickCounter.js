import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {
    render() {
        const { count, name, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>{name} Clicked {count} times</button>
        )
    }
}

export default withCounter(ClickCounter,2)