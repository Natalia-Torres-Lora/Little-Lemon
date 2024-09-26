//HomePage.js
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Food from './Images/little-lemon-food-1.jpg'

function HomePage() {
    return(
        <main>
            <div className='home-header'>
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <ButtonComponent text='Reserve a Table' destination='/reservation' />
                </div>
                <div>
                    <img src={Food} alt='Restaurant appetizer' />

                </div>
            </div>
            <div className='specials'>

            </div>
            <div className='testimonials'>

            </div>
            <div className='about'>
                <div>
                    <div>
                        <h1>Little Lemon</h1>
                        <h3>Who we are:</h3>
                    </div>
                    <div>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    
                </div>

            </div>
        </main>
    )
}
export default HomePage;