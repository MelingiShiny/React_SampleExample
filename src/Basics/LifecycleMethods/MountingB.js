import React, { Component } from 'react'

class MountingB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Shiny'
      }
      console.log('constructor B')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getderived B')
        return null
    }

    componentDidMount(){
        console.log('didmount B')
    }

  render() {
    console.log('render B')
    return (
      <div>Mounting B</div>
    )
  }
}

export default MountingB