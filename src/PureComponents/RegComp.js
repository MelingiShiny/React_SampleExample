import React, { Component } from 'react'

class RegComp extends Component {

  render() {
    console.log('regular')
    return (
      <div>
        Parent Component {this.props.name}
      </div>
    )
  }
}

export default RegComp