import React, { Component } from 'react'

export class ProvinceInfo extends Component {
    render() {
        const places = this.props.data.places
        console.log(this.props.data.name)
        return (
            <div>
                <h1>{this.props.data.name}</h1> 
                <p>{this.props.data.description}</p>
                <ul>
                    {
                        places.map(i => <li>{i}</li>)
                    }
                </ul>
            </div>
        )
    }
}

export default ProvinceInfo;
