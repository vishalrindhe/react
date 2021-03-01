import React, { Component } from 'react'

export class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggendIn : false
        }
    }
    

    render() {
    
        // let message
        // if (this.state.isLoggendIn) {
        //     message = <div>welcome Vishal</div>
        // } else {
        //     message = <div>welcome Guest</div>
        // }

        // return <div>{message    }</div>

        // return( this.state.isLoggendIn ? <div>vishal</div> : <div>abc</div>)  
        
        return this.state.isLoggendIn && <div>Welcome vishal</div>

    }
}

export default UserGreeting



