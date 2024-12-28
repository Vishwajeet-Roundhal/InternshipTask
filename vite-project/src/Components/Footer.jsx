import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="certificate-text">
            Earn industry-recognized certificates with each workshop you complete, 
            showcasing your expertise and commitment to professional excellence.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" className="social-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" className="social-link">
              <img src="https://t4.ftcdn.net/jpg/03/00/24/59/360_F_300245953_Svih1DYJbw4v2t92EhDOTwW4LIqMghmy.jpg" alt="Facebook" />
            </a>
            <a href="https://instagram.com" className="social-link">
              <img src="https://t3.ftcdn.net/jpg/05/42/98/76/360_F_542987676_8rQ3UicjE2bDtuJQKnpwI4JC9iB0jfAG.jpg" alt="Instagram" />
            </a>
          </div>
        </div>
        
        <div className="footer-right">
          <button className="enroll-button">
            Enroll Now
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <nav className="footer-nav">
          <a href="/terms" className="footer-link">Terms & Conditions</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/refund" className="footer-link">Refund Policy</a>
          <a href="/about" className="footer-link">About Us</a>
        </nav>
        <p className="copyright">
          © Copyright 2024. All Rights Reserved by Hubnex Labs
        </p>
      </div>
    </footer>
  );
};

export default Footer;