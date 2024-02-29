import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Parent_child</button> */}
        <button onClick={() => props.greetHandler('child')}>Parent_child</button>
    </div>
  )
}

export default ChildComponent