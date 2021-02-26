import React, { Component } from 'react'

class counter extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increament(){
        
        // this.setState({
        //     count: this.state.count +1
            
        // },
        // () => {
        // console.log(this.state.count)

        // })

        // increament value 5 on click
        this.setState((abc) => ({
            count : abc.count +1
        }))
        console.log(this.state.count);
    }
    
    increament5(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()

    }

    render() {
        return (
            <div>
                count - {this.state.count}
                <button onClick={() => this.increament5()}>Increament</button>
            </div>
        )
    }
}

export default counter
