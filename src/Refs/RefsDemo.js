import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      this.callbackRef = null;
      this.setCallbackref = (ele) =>[
        this.callbackRef = ele
      ]
    }

    componentDidMount(){
      //to focus the input tag
      this.inputRef.current.focus();
      console.log(this.inputRef)

      //callbackref
      if(this.callbackRef){
        this.callbackRef.focus();
      }
      console.log(this.callbackRef)
    }

    clickHandler = ()=>{
      //to get value
      alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <input type='text' ref={this.setCallbackref}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo