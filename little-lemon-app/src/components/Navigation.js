import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.svg';
import Basket from './Basket.svg'

function Nav () {
    return (
      <nav>
        <div className='nav-container'>
          <div className='nav-logo'>
            <img src={Logo} alt='Logo' width='236px' height = '64px'/>
          </div>
          <div className='nav-links'>
          <ul id='nav-links'>
              <li><a href='/home'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/menu'>Menu</a></li>
              <Link to="/" className='nav-link'>Reservations</Link>
              <li><a href='/order'>Order Online</a></li>
              <li><a href='/login'>Login</a></li>
            </ul>
          </div>
          <div className='nav-cart-logo'>
         <a href='/checkout'>
          <img src={Basket} alt="Basket Icon" width="43px" height="43"/>
        </a>
        </div>
        </div>
      </nav>
     )
  }
  export default Nav;