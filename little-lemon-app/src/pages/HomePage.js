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
                <div className='introduction-butt'>
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
                <div className='specials-cards'>
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={card1} class="card-img-top" alt="Greek Salad apetizer" />
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <h5 class="card-title">Greek salad</h5>
                                <p className='card-price'>$12.99</p>
                            </div>
                            <p class="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, with garlic and croutons. </p>
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
                <h2>Testimonials</h2>
                <div className='testimonial-container'>
                    <div className='testimonial'>
                        <div className='rating'>4/5</div>
                        <img src={avatar1} alt='customer avatar' />
                        <h3>Bob</h3>
                        <p>Review text</p>
                    </div>
                    <div className='testimonial'>
                        <div className='rating'>5/5</div>
                        <img src={avatar2} alt='customer avatar' />
                        <h3>Mark</h3>
                        <p>Review text</p>
                    </div>
                    <div className='testimonial'>
                        <div className='rating'>5/5</div>
                        <img src={avatar3} alt='customer avatar' />
                        <h3>Maria</h3>
                        <p>Review text</p>
                    </div>
                    <div className='testimonial'>
                        <div className='rating'>5/5</div>
                        <img src={avatar4} alt='customer avatar' />
                        <h3>Juana</h3>
                        <p>Review text</p>
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