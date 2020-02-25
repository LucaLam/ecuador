import React from 'react'

const ProvinceInfo = ({data}) => {
        const {places, name, description} = data
        return (
            <div>
                <h1>{name}</h1> 
                <p>{description}</p>
                <ul>
                    {
                        places.map(i => <li>{i}</li>)
                    }
                </ul>
            </div>
        )
    }

export default ProvinceInfo;
