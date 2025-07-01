import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">

      <div className="about-container reverse-layout">


        <div className="about-content">
          <h2 className="section-title">What is JobTrackr?</h2>
          <p className="section-description">
            JobTrackr is your personal command center for managing job applications. Whether you're applying to internships, remote contracts, or full-time roles, JobTrackr helps you stay on top of every opportunity without the chaos of spreadsheets or scattered notes.   
          </p>

    <div className="two-column-section">
        
        <div className="column-right">          
          <div className="about-section-lower">
        <div className="column-left">
          <div className="image-wrapper">
            <img src="./src/assets/freepik--Character--inject-69.png" alt="JobTrackr Feature" className="feature-image" />
          </div>
        </div>

          <div className="cr-right">
            <p className="column-description">
                You can log each job you apply to, track your progress across different stages (Applied, Interview, Offer, Rejected), and add personalized notes like deadlines, follow-ups, or interview prep. With everything in one place, JobTrackr keeps you focused, motivated, and organized throughout your job-hunting journey.
            </p>
          </div>
          </div>
          
        </div>
      </div>
        </div>

        <div className="about-visual">
          <div className="image-wrapper">
            <img  src='./src/assets/Why- image.png' alt="Helping-Image" ></img>
          </div>
        </div>
      </div>


    </section>
  );
};

export default About;