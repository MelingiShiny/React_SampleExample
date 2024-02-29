import React from 'react';
import PropTypes from 'prop-types'

//props using call back function
// const Props = props => {
//     return (
//         <h4>How are you {props.name}</h4>
//     )
// }

//destructing props at parameter level
// const Props = ({name}) => {
//     return (
//         <h4>How are you {name}</h4>
//     )
// }

//destructing props at function level
const Props = (props) => {
    const {name} = props
    return (
        <h4>How are you {name}</h4>
    )
}

Props.propTypes = {
    name: PropTypes.string
}

export default Props

