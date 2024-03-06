import React, { useState, useEffect } from 'react'

function UseEffect_incorrectDependency() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevcount=>prevcount + 1)
    }

    useEffect(() => {
        function doSomething(){
            console.log(someProp)
        }    
        doSomething();

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [someProp])

    return (
        <div>
            {count}
        </div>
    )
}

export default UseEffect_incorrectDependency