import React, { Component } from 'react'

export class TestComponent extends Component {
    render() {
        console.log(this.props.data.name)
        return (
            <div>
                <h1>{this.props.data.name}</h1> 
            </div>
        )
    }
}

export default TestComponent;
