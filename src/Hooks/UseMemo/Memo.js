import React, { useState } from 'react'

function Memo() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 =()=>{
        setCounter1(counter1+1)
    }

    const increment2 =()=>{
        setCounter2(counter2+1)
    }

    const isEven = ()=>{
        return counter1 % 2 ===0
    }
  return (
    <div>
       <button onClick={increment1}>Count 1 {counter1}</button>
       <span>{isEven()? 'even':'odd'}</span>
       <button onClick={increment2}>Count 2 {counter2}</button>  
    </div>
  )
}

export default Memo