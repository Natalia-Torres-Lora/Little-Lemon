//HomePage.js
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Food from './Images/little-lemon-food-1.jpg'
import About1 from './Images/little-lemon-people-1.png'
import About2 from './Images/little-lemon-people-2.png'


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
                <div>
                    <h1>Specials</h1>
                    <ButtonComponent text='Online Menu' destination='' />
                </div>
                <div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

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
                    <div>
                        <img src={About1} alt='Chef and seu Chef' />
                        <img src={About2} alt='Chef and seu Chef' />
                    </div>
                </div>

            </div>
        </main>
    )
}
export default HomePage;