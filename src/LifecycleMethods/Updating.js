import React, { Component } from 'react'

export class Updating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Name'
      }
    }

    shouldComponentUpdate(){
        console.log('shouldUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('snapshot')
    }

    componentDidUpdate(){
        console.log('didUpdate')
    }
  render() {
    console.log('render')
    return (
        <div>
            <div>Updating</div>
        </div>

    )
  }
}

export default Updating