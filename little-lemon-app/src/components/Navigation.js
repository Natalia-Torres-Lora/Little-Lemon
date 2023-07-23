import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg';
import Basket from './Basket.svg'

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
        <a href='/checkout'>
          <img src={Basket} alt="Basket Icon" width="46px" height="46"/>
        </a>
      </nav>
     )
  }
  export default Nav;