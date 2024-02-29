import React, { PureComponent } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends PureComponent {
    
    constructor(props) {
        super(props)
      
        this.state = {
           name:'shiny'
        }
      }
  
      componentDidMount(){
          setInterval(() => {
              this.setState({
                  name:'shiny'
              })
          },2000) 
  
      }
  render() {
    console.log('Parent')
    return (
      <div>ParentComp
        <MemoComp name={this.state.name}></MemoComp>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp