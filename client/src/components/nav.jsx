import React from 'react';
import './nav.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/why-us">Why Us</a>
        <a href="/features">Features</a>
      </div>
      
      <div className="navbar-login">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;