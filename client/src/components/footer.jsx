import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Upper Section */}
      <div className="upper-footer">
        {/* First Column - Image */}
        <div className="footer-column">
          <img 
            src="./src/assets/foot-man.png" 
            alt="Footer decorative element" 
            className="footer-image"
          />
        </div>

        {/* Second Column - Logo + Social Media */}
        <div className="footer-column">
          <div className="logo-container">
            <img 
              src="./src/assets/react.svg" 
              alt="Company Logo" 
              className="footer-logo"
            />
          </div>
          <div className="social-media">
            <a href="#" aria-label="Facebook">
              <img src="./src/assets/IG.svg"></img>
            </a>
            <a href="#" aria-label="Twitter">
              <img src="./src/assets/LN.svg"></img>
            </a>
            <a href="#" aria-label="Instagram">
              <img src="./src/assets/X.svg"></img>
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="./src/assets/GH.svg"></img>
            </a>
          </div>
        </div>

        {/* Third Column - Image */}
        <div className="footer-column">
          <img 
            src="./src/assets/checklist.png" 
            alt="Footer decorative element" 
            className="footer-image"
          />
        </div>
      </div>

      {/* Lower Section */}
      <div className="lower-footer">
        <div className="copyright">
          &copy; {new Date().getFullYear()}© 2025 JobTrackr. All rights reserved.

        </div>
        <div className="footer-links">
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;