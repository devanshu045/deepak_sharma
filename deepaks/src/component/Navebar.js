import React from 'react';
// import { Link } from 'react-router-dom';
import './Navebar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a to="/">Home</a>
        </li>
        <li>
          <a to="/contact">Contact</a>
        </li>
        <li>
          <a to="/about">About Us</a>
        </li>
        <li>
          <a to="/rate">Rate Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;