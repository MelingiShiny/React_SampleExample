import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
                    message:'GoodBye'
                })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>BindClick</button> */}
        {/* <button onClick={()=>this.clickHandler()}>BindClick</button> */}
        <button onClick={this.clickHandler}>BindClick</button>
      </div>
    )
  }
}

export default EventBind