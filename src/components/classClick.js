import React, { Component } from 'react'

class classClick extends Component {
    
    clickHandler(){
        console.log("class button clicked");
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default classClick
