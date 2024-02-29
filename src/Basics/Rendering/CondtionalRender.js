import React, { Component } from 'react'

class CondtionalRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }
    render() {
        //approach-4 --> short circuit operator
        return !this.state.isLoggedIn && <div>Condtional Rendering - False</div>

        //approach-3 --> terenary operator
        //     return this.state.isLoggedIn ?
        //    (<div>Condtional Rendering - True</div>) :
        //     (<div>Condtional Rendering - False</div>)


        //approach-2 --> if-else using variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Condtional Rendering - True</div>
        // }
        // else{
        //     message = <div>Condtional Rendering - False</div>
        // }

        // return <div>{message}</div>

        //approach-1 --> if-else
        // if(this.state.isLoggedIn) {
        //     return <div>Condtional Rendering - True</div>
        // }
        // else {
        //    return <div>Condtional Rendering - False</div>
        // }


        // return (
        //   <div>
        //     <div>Condtional Rendering - True</div>
        //     <div>Condtio Rendering - False</div>
        //   </div>
        // )
    }
}

export default CondtionalRender