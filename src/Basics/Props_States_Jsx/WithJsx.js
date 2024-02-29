import React, { Component } from 'react';

//jsx creation using tags and create element
// const JSx = () => {
//     // return (
//     //     <div className='dummyClass>
//     //         <h4>Without jsx file</h4>
//     //     </div>
//     // )

//     return React.createElement(
//         'div',
//         { id:'JSx', className:'dummy' },
//         React.createElement('h4', null, 'Hi'))
// }

// props using call back function
// const JSx = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h4>JSx React {props.name} alias {props.heroName}</h4>
//             {props.children}
//         </div>
    
//     )
// }


//props using class component and this keyword
// class JSx extends Component {
//     render() {
//         return <h4> Hi {this.props.name} alias {this.props.heroName}</h4>
//     }
// }


//destructing props using class component at function level
class JSx extends Component {
    render() {
       const {name,heroName} = this.props;
    //    const {state1, state2} = this.state;
        return <h4> Welcome {name} alias {heroName}</h4>
    }
}

export default JSx