import React, { Component } from 'react'
import withCounter from './WithCounter'

class HoverCounter extends Component {
    render() {
        const { count, name, incrementCount } = this.props
        return (
            <div>
                <h3 onMouseOver={incrementCount}>{name} Hover {count} times</h3>
            </div>
        )
    }
}

export default withCounter(HoverCounter,5)