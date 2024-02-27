import React from 'react'
// import List from './List'

function ListRender() {
    //example-3 --> using index (if no unique values in the list)
    const names = ['shiny', 'anusha', 'akshitha']

    //approach-2 --> using map function
    const nameList = names.map((name, index) => <h4 key={index}>{index} {name}</h4>)
    return <div>{nameList}</div>


    // //example-2 --> using props and using key
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Shiny',
    //         age: 22,
    //         skill: "angular"
    //     },
    //     {
    //         id: 2,
    //         name: 'Anusha',
    //         age: 21,
    //         skill: "node"
    //     },
    //     {
    //         id: 3,
    //         name: 'Akshitha',
    //         age: 28,
    //         skill: "qa"
    //     },
    // ]
    // const personList = persons.map(person => (
    //     <List key = {person.id} person = {person} />
    // ))
    // return <div>{personList}</div>



    // //example-1
    // const names = ['shiny', 'anusha', 'akshitha']

    // //approach-2 --> using map function
    // const nameList = names.map(name => <h4>{name}</h4>)
    // return <div>{nameList}</div>

    // //approach1 --> regular indexing
    // //   return (
    // //     <div>
    // //         <h4>{names[0]}</h4>
    // //         <h4>{names[1]}</h4>
    // //         <h4>{names[2]}</h4>
    // //     </div>
    // //   )
}

export default ListRender