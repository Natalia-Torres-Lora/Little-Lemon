//ReservationPage.js
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Arrow from './Images/ArrowLeftCircle.svg'


function ReservationPage () {
//elements and state management to store the user's input.
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    return (
        <main>
            <div className='prev-page-logo'>
                 <button onClick={() => window.history.back()}>
                    <img src={Arrow} alt='Previous Page Button'/>
                </button>
            </div>
            <div>
                <h2>Reserve Your Table</h2>
                <form>
                    <label htmlFor="date">Date:</label>
                    <input
                    type='date'
                    id='date'
                    name='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                    <label htmlFor='time'>Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <label htmlFor='guests'>Guests</label>
                    <select id='guests' name='guests'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                    </select>
                    <label htmlFor='occasion'>Occasion</label>
                    <select id='occasion' name='occasion'>
                        <option value='birthday'>Birthday</option>
                        <option value='anniversary'>Anniversary</option>
                        <option value='other'>Other</option>
                    </select>
                    <fieldset>
                        <legend>Choose your seating option:</legend>
                        <label>
                            <input type="radio" name="seating" value="outdoor" /> Outdoor
                        </label>
                        <br></br>
                        <label>
                            <input type="radio" name="seating" value="indoor" /> Indoor
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Special Instructions:</legend>
                        <textarea name="special-instructions" rows="4" cols="50" placeholder="Enter any specifications for your reservation..."></textarea>
                    </fieldset>
                </form>
            </div>
            <div>
                <h2>Contact Information</h2>
            </div>
            <div>
                <form>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name='firstName' />

                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lastName' />

                    <label htmlFor='email'>Email</label>
                    <input type='text' id='email' name='email' />

                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type='text' id='phoneNumber' name='phoneNumber' />

                    <label>
                            <input type="radio" name="notification" value="email" /> I wish to recive email notifications
                    </label>
                    <br></br>
                    <label>
                            <input type="radio" name="notification" value="phone" /> I wish to recive text notifications
                    </label>

                </form>
            </div>
            <div>
                <ButtonComponent text="Continue to Payment" destination="/payment" />
            </div>
        </main>
     )
  }
  export default ReservationPage;