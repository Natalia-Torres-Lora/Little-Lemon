import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/payment">Planner</Link>
        <Link to="/confirmation">Get Inspired</Link>
      </nav>
     )
  }
  export default Nav;