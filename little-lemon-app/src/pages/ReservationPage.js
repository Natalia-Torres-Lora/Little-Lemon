import React from 'react';
import Arrow from './Images/ArrowLeftCircle.svg'


function ReservationPage () {
    return (
        <main>
            <div className='prev-page-logo'>
                <a href='little-lemon/home'>
                    <img src={Arrow} alt='Previus Page Button'/>
                </a>
            </div>
            <h2>Reserve your Table</h2>
            
        </main>
     )
  }
  export default ReservationPage;