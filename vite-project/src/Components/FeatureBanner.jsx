import React from 'react';
import "../styles/FeatureBanner.css"

export function FeatureBanner() {
  const features = [
    "💰 100% Money Back Guarantee",
    "🎯 100% Job Placement/Assistance",
    "🛡️ We Don't Sell You Courses",
    "👥 Mock Interviews",
    "📊 Monthy Progress Report",
  ];

  return (
    <div className="feature-banner">
      <div className="feature-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <span>{feature}</span>
            {index < features.length - 1 && <span className="separator">•</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

