import React, { Component } from 'react'
import RefsWithClass from './RefsWithClass'

//parent component refs using class
class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    clickHandler = () =>{
        this.componentRef.current.focusInput();
    }
  render() {
    return (
      <div>
        <RefsWithClass ref={this.componentRef}/>
        <button onClick={this.clickHandler}>FocusInput </button>
      </div>
    )
  }
}

export default FocusInput