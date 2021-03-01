import React from 'react'

function childParent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Click</button>
        </div>
    )
}

export default childParent
