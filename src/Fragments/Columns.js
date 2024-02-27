import React from 'react'

function Columns() {
    // const items=[1,2,3,4,5]
  return (
    //short hand fragment
    <>
        {/* {
            items.map(item =>(
                <React.Fragment key={item.index}>
                    <p>{item}</p>
                </React.Fragment>
            ))
        } */}
        <td>Name</td>
        <td>Shiny</td>
    </>
  )
}

export default Columns