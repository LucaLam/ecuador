import React, { Component } from 'react'

import aboutText from '../data/aboutData';

export class About extends Component {
    render() {
        return (
            <div>
                <p>{aboutText}</p>
            </div>
        )
    }
}

export default About
