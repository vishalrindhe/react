import React, { Component } from 'react'

class eventBind extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            message : 'Hello'
        }

        // this.eventClick = this.eventClick.bind(this)

    }

    // eventClick(){
    //     this.setState({
    //         message : 'Clicked Button'
    //     })
    // }
    
    
    eventClick = () => {
        this.setState({
            message : 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.eventClick.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.eventClick()}>Click</button> */}
                <button onClick={this.eventClick}>Click</button>


            </div>
        )
    }
}

export default eventBind