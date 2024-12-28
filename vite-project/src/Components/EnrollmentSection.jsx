import React from 'react';
import { ContactForm } from './ContactForm';
import "../styles/EnrollmentSection.css"

export function EnrollmentSection() {
  const features = [
    "Mock Interviews",
    "Montly Progress Report",
    "Hands-on-experience on real-time projects"
  ];

  return (
    <section className="enrollment-section">
      <div className="enrollment-container">
        <div className="enrollment-content">
          <span className="batch-badge">
            <span className="badge-dot">●</span> Limited Batch Size
          </span>
          
          <h2 className="enrollment-title">
            Not everyone gets <span className="highlight">hands-on-experience</span> by us, check if you're the one!
          </h2>
          
          <p className="enrollment-description">
            Earn industry-recognized certificates with each workshop you complete, showcasing your expertise and commitment to professional excellence.
          </p>

          <div className="learners-section">
            <div className="learner-avatars">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="learner-avatar" />
              ))}
            </div>
            <div className="learners-info">
              <p className="learners-count">4532+ Learners</p>
              <p className="learners-text">took their first step to succeed in their career</p>
            </div>
          </div>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-check">✓</span>
                {feature}
              </div>
            ))}
          </div>

          <button className="enroll-button">
            Enroll Now
            <span className="button-arrow">→</span>
          </button>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

