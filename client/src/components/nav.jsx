import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">YourLogo</span>
        </Link>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></span>
        </div>

        {/* Navigation Links */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/features" className="hm-nav-links" onClick={() => setIsOpen(false)}>
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/solutions" className="hm-nav-links" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="hm-nav-links" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="hm-nav-links" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <div className="auth-buttons">
              <Link to="/login" className="login-btn" onClick={() => setIsOpen(false)}>
                Log In
              </Link>
              <Link to="/signup" className="signup-btn" onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;