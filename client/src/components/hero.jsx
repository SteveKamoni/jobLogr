import React from 'react';
import './Hero.css';
import myImage from '../assets/Hero-image.jpg'; // adjust path if needed
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-visual">
            <div className="image-container">
              <img src={myImage} alt="Hero image" className="image" />
            </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Take <span className='cl'>Control</span> of <span className='cl'>Your</span> Job <span className='cl'>Search!</span></h1>
          <p className="hero-subtitle">
          JobTrackr helps you organize, track, and stay motivated throughout your job-hunting journey — all in one clean, focused dashboard.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Get Started</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;