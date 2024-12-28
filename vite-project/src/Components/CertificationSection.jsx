import React from 'react';
import "../styles/Certification.css"

const CertificationSection = () => {
  // Sample avatar data - replace with actual user avatars
  const learners = [
    { id: 1, avatar: '' },
    { id: 2, avatar: '' },
    { id: 3, avatar: '' },
    { id: 4, avatar: '' }
  ];

  return (
    <div className="certification-container">
      <div className="certification-content">
        <div className="certification-left">
          <button className="linkedin-button">
            Shareable in LinkedIn
          </button>

          <h1 className="certification-title">
            Get <span className="highlight">Certified</span> With Every Completion
          </h1>

          <p className="certification-description">
            Earn industry-recognized certificates with each workshop you complete,
            showcasing your expertise and commitment to professional excellence.
            Earn industry-recognized certificates with each workshop you complete,
            showcasing your expertise and commitment to professional excellence.
          </p>

          <div className="learners-section">
            <div className="learners-avatars">
              {learners.map((learner) => (
                <img 
                  key={learner.id} 
                  src={learner.avatar} 
                  alt="Learner avatar" 
                  className="learner-avatar"
                />
              ))}
            </div>
            <div className="learners-info">
              <div className="learners-count">1532+ Learners</div>
              <div className="learners-subtext">
                have successfully skilled-up and have been officially certified
              </div>
            </div>
          </div>

          <div className="features">
            <div className="feature-item">
              <svg className="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Monthly Progress Report
            </div>
            <div className="feature-item">
              <svg className="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Hands-on-experience on real-time projects
            </div>
          </div>

          <div className="action-buttons">
            <button className="enroll-button">
              Enroll Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button className="counselling-button">
              Get Free Career Counselling
            </button>
          </div>
        </div>

        <div className="certification-right">
          <img 
            src="https://s3-alpha-sig.figma.com/img/8d3d/c4ee/6ad04cd23a813c3e09086a492ab5871e?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hD0S3cwjdgpLI-x~fVKK7KCuYSoUdYUHrXMGbYiGVnrft~qWqQMTayiecysPJe~CUqeouBxytpBR0RLQE4A3ClPHzkjzlp4vk1fyM~~ESNabEHe4aT1WJx5xo7RkFeyCG5nQhjQiS77Fkg5y3i1snl~Aqc0lfIRiDlJMc2Tdau-uEQBMtYyKTpcK8bNuAxlzThOreCrgOM1ASluqZlBr5I15mP~4z~yeo~FbKABVyopC2GczxMEio5LQdKsBH-S38xIdu4Jtr0ueNFcMs3MUrsnO2-h3T0HU3QY6cPIYbYKQviRFSvLEjMfTXuGkkhDbGwAwR2gdai8u7~cdGSkpfA__" 
            alt="Certification illustration" 
            className="certification-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;