import React from 'react';
import { Link } from 'react-router-dom';
import Image from './footer-logo.png'

const Footer = ()=> {
    return (
        <footer className='footer-container'>
        <div className='container'>
            <div className='footer-logo'>
                <img src={Image} alt='Little Lemon Logo' width="112px" height="158px"/>
            </div>
            <nav>
                <h6>Navigation</h6>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <Link to="/">Reservations</Link>
                    <li><a href='/order'>Order Online</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </nav>
            <div className='footer-contact'>
                <h6>Contact</h6>
                <p>123 Lemon Street, Chicago, US</p>
                <p>+1 787-123-4567</p>
                <p>info@lemon.com</p>
            </div>
            <div className='socialmedia-links'>
                <h6>Social Media</h6>
                <ul>
                    <li><a href="https://www.instagram.com/littlelemon" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://www.facebook.com/littlelemon" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    <li><a href="https://www.twitter.com/littlelemon" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
        </div>
        </footer>
     );
  };
  export default Footer;