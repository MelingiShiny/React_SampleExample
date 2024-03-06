import React, { useState } from 'react'
import UseEffect_once from './UseEffect_once'

function UseEffect_CleanUp() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
        {display && <UseEffect_once></UseEffect_once>}
    </div>
  )
}

export default UseEffect_CleanUp