import React, {useEffect, useState} from 'react'

function UseEffect_once() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('Use effect')
        window.addEventListener('mousemove',logMousePosition)

        return()=>{
            console.log('Removed')
        window.removeEventListener('mousemove',logMousePosition)

        }
    },[])
  return (
    <div>
       Hooks X - {x}, Y - {y} 
    </div>
  )
}

export default UseEffect_once