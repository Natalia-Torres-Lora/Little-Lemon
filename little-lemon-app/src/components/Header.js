import React from 'react';
import Image from './restaurant.jpg'


function Header () {
    return (
        <>
        <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
        </div>
        <div>
            <img src={Image} alt='Restaurant image' width='1440px' height='275px'/>
        </div>
        </>
     )
  }
  export default Header;