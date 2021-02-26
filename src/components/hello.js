import  React from 'react'


var Hello = () => {
    // return(
    //     <h1 className: "dummyClass">JSX</h1>
    // )

    return React.createElement('div',{ id : 'hello', className : 'dummyClass'},React.createElement('h1',null,'JSXx'))
}


export default Hello