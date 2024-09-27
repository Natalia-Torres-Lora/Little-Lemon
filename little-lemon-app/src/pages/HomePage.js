//HomePage.js
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import Food from './Images/little-lemon-food-1.jpg'
import About1 from './Images/little-lemon-people-1.png'
import About2 from './Images/little-lemon-people-2.png'
import card1 from './Images/greekSalad.png'
import card2 from './Images/bruchetta.png'
import card3 from './Images/lemonDessert.png'
import avatar1 from './Images/avatar1.png'
import avatar2 from './Images/avatar2.jpg'
import avatar3 from './Images/avatar3.jpg'
import avatar4 from './Images/avatar4.jpg'


function HomePage() {
    return(
        <main>
            <div className='home-header'>
                <div>
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                </div>
                <div className='introduction'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='intruduction-butt'>
                    <ButtonComponent text='Reserve a Table' destination='/reservation' />
                </div>
                {/* <div>
                    <img src={Food} alt='Restaurant appetizer' />
                </div> */}
            </div>
            <div className='specials'>
                <div>
                    <h1>Specials</h1>
                    <ButtonComponent text='Online Menu' destination='' />
                </div>
                <div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={card1} class="card-img-top" alt="Greek Salad apetizer" />
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 class="card-title">Greek salad</h5>
                                <p className='card-price'>$12.99</p>
                            </div>
                            <p class="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            <a href="#" class="btn btn-primary">Order Delivery</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={card2} class="card-img-top" alt="Bruchetta apetizer" />
                        <div class="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 class="card-title">Bruchetta</h5>
                            <p className='card-price'>$5.99</p>
                        </div>
                            <p class="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            <a href="#" class="btn btn-primary">Order Delivery</a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={card3} class="card-img-top" alt="Lemon Dessert apetizer" />
                        <div class="card-body">
                            <div className='d-flex justify-content-between'>
                                <h5 class="card-title">Lemon Dessert</h5>
                                <p className='card-price'>$5.00</p>
                            </div>
                            <p class="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <a href="#" class="btn btn-primary">Order Delivery</a>
                        </div>
                    </div>
                </div>

            </div>
            <div className='testimonials'>
                <div>
                    <h2>Testimonials</h2>
                </div>
                <div>
                    <div className='ratings-cards'>
                        <h6>4/5</h6>
                        <div className='avatar'>
                            <img src={avatar1} alt='customer avatar' style={{ width: '30px', height: '30px' }} />
                        </div>
                        <h6>Bob</h6>
                        <h7>Reviw txt</h7>
                    </div>
                    <div className='ratings-cards'>
                        <h6>5/5</h6>
                        <div className='avatar'>
                            <img src={avatar2} alt='customer avatar' style={{ width: '30px', height: '30px' }} />
                        </div>
                        <h6>Mark</h6>
                        <h7>Reviw txt</h7>
                    </div>
                    <div className='ratings-cards'>
                        <h6>5/5</h6>
                        <div className='avatar'>
                            <img src={avatar3} alt='customer avatar' style={{ width: '30px', height: '30px' }} />
                        </div>
                        <h6>Maria</h6>
                        <h7>Reviw txt</h7>
                    </div>
                    <div className='ratings-cards'>
                        <h6>5/5</h6>
                        <div className='avatar'>
                            <img src={avatar4} alt='customer avatar' style={{ width: '30px', height: '30px' }} />
                        </div>
                        <h6>Juana</h6>
                        <h7>Reviw txt</h7>
                    </div>

                </div>

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