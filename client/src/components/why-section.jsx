import React from 'react';
import './why-sect.css';

const WhySection = () => {
  return (
    <section className="why-section">
      <div className="why-container">
        {/* Left Column - Text Content */}
        <div className="left-column">
          {/* Top Container */}
          <div className="top-container">
            <h2 className="why-section-title"> Why <span className='cl'>JobTrackr?</span></h2>
            <p className="why-section-description">
                Most people manage their job search using messy spreadsheets, scattered notes, or pure memory. That leads to stress, missed deadlines, and confusion.
            </p>
          </div>

          {/* Bottom Container - Split into two */}
          <div className="bottom-container">
            {/* Left side of bottom container - Image */}
            <div className="bottom-left">
              <div className="small-image-wrapper">
                {/* Replace with your actual image */}
                <img src='./src/assets/Young person.png' alt="JobTrackr-Young-man" />
              </div>
            </div>

            {/* Right side of bottom container - Text */}
            <div className="bottom-right">
              <h3 className="feature-title">Proven Results</h3>
              <p className="why-feature-description">
                JobTrackr simplifies everything into one beautiful dashboard — so you can focus on what matters: getting hired. It’s designed for students and graduates entering the job market, professionals making a career shift, freelancers managing multiple gigs, and anyone who values clarity over chaos during a job hunt.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Main Image */}
        <div className="right-column">
          <div className="main-image-wrapper">
            {/* Replace with your actual image */}
            <img src='./src/assets/undraw_workspace_s6wf.png' alt="JobTrackr-lady">
                </img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;