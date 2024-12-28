import React from 'react';
import "../styles/Hero.css"

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            The <span className="highlight4">Ultimate<br />
            Launchpad</span> For<br />
            Your <span className="highlight4">Career!</span>
          </h1>
          <p className="hero-subtitle">
            Where Your Future Begins: Unlock Guaranteed Career Success With The Best Guidance
          </p>
          <div className="learners-section">
            <div className="learner-avatars">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="learner-avatar" />
              ))}
            </div>
            <div className="learners-info">
              <p className="learners-count">500+ Learners</p>
              <p className="learners-text">took their first step to succeed in their career</p>
            </div>
          </div>
          <div className="cta-buttons">
            <button className="primary-button">Enroll Now<span className="arrow">→</span>
            </button>
            <button className="secondary-button">Get Free Career Evaluation</button>
          </div>
          <div className="guarantee">
            <span className="check-mark">✓</span>
            100% Money Back Guarantee if you're not satisfied with the Evaluation
          </div>
        </div>
        <div className="hero-image-section">
          <div className="image-container">
            <img src="https://s3-alpha-sig.figma.com/img/aabc/ad35/ff30881950bb2f40779d38f559a77264?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nU6Glb7BcW6WRE-9Qiao0K403MiRz06Mt4r1h0wKHIMjM~ehz9WlREC6LMGAHhdJyAZYK6EeJp5pRdtp9DphCXcXUPneqztqjQhepniDdLg5JMzmcSy~L~JGsr-74jOMDqNfD~nJFQ4VOoT3ZqaWgBG3YkJ~fRD6FYBVtrSjnkTW8PGcV-BI6DBd~UkxX2HTqiaIdlZxsq0Xm8-QLKOG3xih9HRs~92dkJcDz7znkQqKZsKnloPurjH0qs7q8EgFJFQ2ZtBJNf2M~4ZvMEWo5oD86U5NCs69kSuKXVgIxdhyIXBpj71d7ESIopq4DK5R~sAPR6lmF3hej2oA2cSFBg__"  alt="Student" className="hero-image" />
            <div className="stat-card projects">
              <div className="stat-icon">💻</div>
              <div>
                <p className="stat-number">100+</p>
                <p className="stat-label">Real Time Projects</p>
              </div>
            </div>
            <div className="stat-card mentors">
              <div className="stat-icon">👥</div>
              <div>
                <p className="stat-number">50+</p>
                <p className="stat-label">Mentors</p>
              </div>
            </div>
            <div className="rating-card">
              <p className="rating">4.2/5</p>
              <p className="rating-label">Top Rated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

