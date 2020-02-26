import React from 'react'
import './provinceinfo.scss'
import { v4 as uuidv4 } from 'uuid';

const ProvinceInfo = ({data, handleClose}) => {
        const {places, name, description, image} = data
        console.log(image)
        return (
            <div className='province-info-container'>
                <span className='container-heading-and-btn'>
                <h1 className='heading'>{name}</h1>
                <button onClick={handleClose} className='close-btn'>Close</button>
                </span>
                <p className='sub-heading'>{description}</p>
                <div className='list-and-img-container'>
                <ul className='destination-list'>
                    {
                        places.map(i => <li key={uuidv4()} className='destination'>{i}</li>)
                    }
                </ul>
                <img className='province-img' src={image} alt='img'/>
                </div>
            </div>
        )
    }

export default ProvinceInfo;
