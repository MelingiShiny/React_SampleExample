import React, { PureComponent } from 'react'

class pure extends PureComponent {


  render() {
    console.log('pure')
    return (
      <div>
        Pure {this.props.name}
      </div>
    )
  }
}

export default pure