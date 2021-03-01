import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name} with Id no {person.id}</h2>
        </div>
    )
}

export default Person
