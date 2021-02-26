import React from 'react'

function functionClick() {
    
    const clickHandler = () =>{
        console.log('button clicked');
    }

    return (
        <div>
            {/* Dont add () after clickHnadler in onCick eventHandler it will do function call */}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default functionClick
