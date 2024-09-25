import React from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Arrow from './Images/ArrowLeftCircle.svg'
import Header from '../components/Header';


function PaymentPage () {
    return (
        <main>
            <Header/>
            <div className='prev-page-logo'>
                 <button onClick={() => window.history.back()}>
                    <img src={Arrow} alt='Previous Page Button'/>
                </button>
            </div>
            <div>
            <form>
                <label htmlFor="paymentMethod">Payment Method:</label>
                <select id="paymentMethod" name="paymentMethod">
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                </select>
                <label htmlFor="cardNumber">Card Number:</label>
                <input type="text" id="cardNumber" name="cardNumber" />
                <label htmlFor="cardholderName">Cardholder Name:</label>
                <input type="text" id="cardholderName" name="cardholderName" />
                <label htmlFor="expirationDate">Expiration Date:</label>
                <input type="date" id="expirationDate" name="expirationDate" />
                <label htmlFor="securityCode">Security Code:</label>
                <input type="text" id="securityCode" name="securityCode" />
                <ButtonComponent text="Confirm Booking" destination="/confirmation" />
            </form>
        </div>
        </main>
     )
  }
  export default PaymentPage;