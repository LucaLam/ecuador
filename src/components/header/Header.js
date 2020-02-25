import React from 'react';

import './header.styles.scss'
import logo from '../../assets/center-of-the-world.svg'

import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
        <p className="header">All You Need Is Ecuador</p>
        <Link to="/about" className="about">
          About
        </Link>
      </div>
    );
}

export default Header