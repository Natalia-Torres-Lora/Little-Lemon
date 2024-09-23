import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Arrow from './Images/ArrowLeftCircle.svg'



function PaymentPage () {
    return (
        <main>
            <div className='prev-page-logo'>
                 <button onClick={() => window.history.back()}>
                    <img src={Arrow} alt='Previous Page Button'/>
                </button>
            </div>
            <div>
                <p>Hello payment</p>
            </div>
            <div>
                <ButtonComponent text="Confirm Booking" destination="/confirmation"/>
            </div>
        </main>
     )
  }
  export default PaymentPage;