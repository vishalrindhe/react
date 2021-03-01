import React from 'react'
import Person from './Person'

function NameList() {
    
    const name = ['Abc', 'Pqr', 'Xyz']

    // const persons = [{
    //     id : 1,
    //     name : 'Abc',
    //     age: 30,
    //     tech : 'Angular'
    // },
    // {
    //     id : 2,
    //     name : 'Pqr',
    //     age: 30,
    //     tech : 'Angular'
    // },{
    //     id : 3,
    //     name : 'Xyz',
    //     age: 30,
    //     tech : 'Angular'
    // }]

        // const personList = persons.map(person => <h2>I am {person.name} with Id no {person.id}</h2>)
        // const personList = persons.map(person => <Person key={person.name} person={person} />)
        const nameList = name.map((name,index) => <h2 key={index}>{index}  {name}</h2>)


    return (
        <div>
            {/* {personList} */}
            {nameList}
        </div>
    )
}

export default NameList

