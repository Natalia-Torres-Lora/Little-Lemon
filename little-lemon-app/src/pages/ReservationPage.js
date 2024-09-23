//ReservationPage.js
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Arrow from './Images/ArrowLeftCircle.svg'


function ReservationPage () {
    return (
        <main>
            <div className='prev-page-logo'>
                 <button onClick={() => window.history.back()}>
                    <img src={Arrow} alt='Previous Page Button'/>
                </button>
            </div>
            <div>
                <h2>Reserve Your Table</h2>
                <h4>Special Instructions</h4>
            </div>
            <div>
                <h2>Contact Information</h2>
            </div>
            <div>
                <ButtonComponent text="Continue to Payment" destination="/payment" />
            </div>
        </main>
     )
  }
  export default ReservationPage;