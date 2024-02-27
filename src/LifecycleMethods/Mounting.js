import React, { Component } from 'react'
import MountingB from './MountingB'


class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Shiny'
      }
      console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getderived')
        return null
    }

    componentDidMount(){
        console.log('didmount')
    }

  render() {
    console.log('render')
    return (
      <div>
      <div>Mounting</div>
      <MountingB />
      </div>
    )
  }
}

export default Mounting