//ConfirmationPage.js
import React from 'react';
import ButtonComponent from '../components/ButtonComponent';



function ConfirmationPage () {
    return (
        <main>
            <div>
                <h2>Your Booking is Complete</h2>
                <h6>Booking number 123456</h6>
            </div>
            <div>
                <ButtonComponent text="Onlien Menu" destination="" />
            </div>
        </main>
     )
  }
  export default ConfirmationPage;