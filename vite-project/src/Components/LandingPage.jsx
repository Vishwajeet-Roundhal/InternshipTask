import React from "react";
import "../styles/LandingPage.css"


const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">Skillup</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#pricing">Pricing</a>
          <a href="#features">Features</a>
          <a href="#about">About Us</a>
        </nav>
        <button className="enroll-btn">Enroll Now</button>
      </header>

      <main className="main-section">
        <div className="content">
          <h1>The Ultimate Launchpad For Your Career!</h1>
          <p>
            Where Your Future Begins: Unlock Guaranteed Career Success With The
            Best Guidance
          </p>
          <div className="stats">
            <span>500+ Learners</span>
            <span>100+ Real Time Projects</span>
            <span>50+ Mentors</span>
          </div>
          <div className="cta-buttons">
            <button className="cta enroll">Enroll Now</button>
            <button className="cta evaluation">Get Free Career Evaluation</button>
          </div>
        </div>
        <div className="image-section">
          <img src="/path-to-image.png" alt="Career Growth" />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
