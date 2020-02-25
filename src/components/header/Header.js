import React from 'react';

import './header.styles.scss'
import logo from '../../assets/center-of-the-world.svg'

const Header = () => {
    return(
        <div className='header-container'>
            <img className='logo' src={logo} alt='logo'/>
            <p className='header'>All You Need Is Ecuador</p>
            {/* <Link to='/about'> */}
            <p className='about'>About</p>
            {/* </Link> */}
        </div>
    )
}

export default Header