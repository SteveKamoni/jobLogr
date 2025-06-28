import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Transform Your Ideas Into Reality</h1>
          <p className="hero-subtitle">
            The complete solution for building modern applications with our powerful platform
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-circle">
            {/* You can replace this with an image or illustration */}
            <div className="circle-content">
              <span className="circle-text">Your App</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;