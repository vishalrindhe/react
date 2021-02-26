import React , { Component } from 'react';

class Welcome extends Component{
    render(){

        const {name, hName} = this.props
        return <h1>Class Component {name} and {hName}</h1>
    }
}

export default Welcome