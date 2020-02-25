import React from 'react'
import './provinceinfo.scss'

const ProvinceInfo = ({data, handleClose}) => {
        const {places, name, description} = data
        return (
            <div className='province-info-container'>
                <span className='container-heading-and-btn'>
                <h1 className='heading'>{name}</h1>
                <button onClick={handleClose} className='close-btn'>Close</button>
                </span>
                <p className='sub-heading'>{description}</p>
                <ul className='destination-list'>
                    {
                        places.map(i => <li className='destination'>{i}</li>)
                    }
                </ul>
            </div>
        )
    }

export default ProvinceInfo;
