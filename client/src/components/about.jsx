import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      {/* First Section - Image Left, Text Right */}
      <div className="about-container reverse-layout">


        <div className="about-content">
          <h2 className="section-title">Our Story</h2>
          <p className="section-description">
            Founded in 2015, we started with a simple mission: to make technology accessible and 
            effective for businesses of all sizes. Today, we serve clients across 15 countries 
            with our innovative solutions.
          </p>

    <div className="two-column-section">
        <div className="column-left">
          <div className="image-wrapper">
            {/* Replace with your actual illustration */}
            <div className="placeholder-image">Feature Illustration</div>
          </div>
        </div>
        
        <div className="column-right">
          <h3 className="column-title">Why Choose Us</h3>
          <ul className="benefits-list">
            <li className="benefit-item">
              <span className="check-icon">✓</span>
              <span>10+ years of industry experience</span>
            </li>
            <li className="benefit-item">
              <span className="check-icon">✓</span>
              <span>24/7 dedicated support team</span>
            </li>
            <li className="benefit-item">
              <span className="check-icon">✓</span>
              <span>Custom solutions for your business</span>
            </li>
            <li className="benefit-item">
              <span className="check-icon">✓</span>
              <span>Cutting-edge technology stack</span>
            </li>
          </ul>
          <button className="learn-more-btn">Learn More About Us</button>
        </div>
      </div>
        </div>

        <div className="about-visual">
          <div className="image-wrapper">
            {/* Replace with your actual image */}
            <div className="placeholder-image">Team Illustration</div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;