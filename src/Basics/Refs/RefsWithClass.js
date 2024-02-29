import React, { Component } from 'react'

//Child component for ref using class
class RefsWithClass extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div><input type='text' ref={this.inputRef}/>
        
      </div>
    )
  }
}

export default RefsWithClass