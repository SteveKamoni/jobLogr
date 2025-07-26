import React from "react";
import "./features.css";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <h1>FEATURES <span className="cl">THAT</span> PUT <span className="cl">YOU</span> IN <span className="cl">CONTROL</span></h1>
      </div>

      <div className="features-grid">
        {/* Feature 1 */}
        <div className="feature-card">
          <div className="feature-icon-circle">
            {/* Replace with your actual icon component or img tag */}
            <div className="icon-placeholder"><img src="./src/assets/track.png"></img></div>
          </div>
          <h3>TRACK ALL YOUR</h3>
          <h2>APPLICATIONS</h2>
          <p>
            Log every role you apply to with details like title, company, date,
            and more—all from one place.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <div className="feature-icon-circle">
            <div className="icon-placeholder"><img src="./src/assets/dashboard.png"></img></div>
          </div>
          <h2>DASHBOARD</h2>
          <p>
            See which applications are Applied, Interviewing, Offered, or
            Rejected in a clean, visual layout.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <div className="feature-icon-circle">
            <div className="icon-placeholder"><img src="./src/assets/notes.png"></img></div>
          </div>
          <h3>PERSONAL NOTES &</h3>
          <h2>DEADLINES</h2>
          <p>
            Add reminders, prep notes, or follow-up ideas for each job—stay ahead
            and sharp.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="feature-card">
          <div className="feature-icon-circle">
            <div className="icon-placeholder"><img src="./src/assets/links.png"></img></div>
          </div>
          <h2>ATTACH JOB LINKS</h2>
          <p>
            Save job post URLs or company pages for easy future access.
          </p>
        </div>

        {/* Feature 5 - Full width */}
        <div className="feature-card full-width">
          <div className="feature-icon-circle">
            <div className="icon-placeholder"><img src="./src/assets/protection.png"></img></div>
          </div>
          <h2>SECURE, SIMPLE LOGIN</h2>
          <p>
            Your data is private. Log in securely and manage your job search
            without worry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;