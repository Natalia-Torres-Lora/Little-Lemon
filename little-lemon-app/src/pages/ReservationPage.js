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
                <ButtonComponent text="Continue to Payment" destination="/payment" />
            </div>
            <h2>Reserve your Table</h2>

        </main>
     )
  }
  export default ReservationPage;