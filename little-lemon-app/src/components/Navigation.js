import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg';

function Nav () {
    return (
      <nav>
        <img src={Logo} alt='Logo' width='236px' height = '64px'/>
        <ul>
          <li><a href='/home'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/menu'>Menu</a></li>
          <Link to="/">Reservations</Link>
          <li><a href='/order'>Order Online</a></li>
          <li><a href='/login'>Login</a></li>
        </ul>
      </nav>
     )
  }
  export default Nav;