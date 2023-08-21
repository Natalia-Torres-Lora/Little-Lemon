import React from 'react';
import Image from './restaurant 1.png'


function Header () {
    return (
        <>
        <div className='header-container'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
        </div>
        <div>
            <img src={Image} alt='Restaurant' width='1440px' height='275px'/>
        </div>
        </>
     )
  }
  export default Header;