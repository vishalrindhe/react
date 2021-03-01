import React from 'react'

function NameList() {
    
    // const name = ['Abc', 'Pqr', 'Xyz']

    const persons = [{
        id : 1,
        name : 'Abc',
        age: 30,
        tech : 'Angular'
    },
    {
        id : 2,
        name : 'Pqr',
        age: 30,
        tech : 'Angular'
    },{
        id : 1,
        name : 'Xyz',
        age: 30,
        tech : 'Angular'
    }]

        const personList = persons.map(person => <h2>I am {person.name} with Id no {person.id}</h2>)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList

