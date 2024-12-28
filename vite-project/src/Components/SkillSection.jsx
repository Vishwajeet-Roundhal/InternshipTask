import React from 'react';
import "../styles/SkillSection.css";

export function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">
            We Offer a <span className="highlight">Comprehensive</span><br />
            Skill Set
          </h2>
          <p className="skills-description">
            Supercharge your career with our expert-led programs, meticulously designed to equip you with the most sought-after skills for today's competitive job market.
          </p>
          <button className="enroll-button">
            Enroll Now
            <span className="arrow">→</span>
          </button>
        </div>

        {/* Right Side with 6 components */}
        <div className="skills-right">
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Exclusive Access to Our</h3>
              <div className="skill-title">Global Alumni Network</div>
              <p>Connect with an expansive network of successful professionals across the globe. Our alumni are placed in top organizations, and as a lifetime skills member, you gain access to this valuable community.</p>
            </div>

            <div className="skill-card">
              <h3>Hands-On Learning with</h3>
              <div className="skill-title">Real-time Project</div>
              <p>Experience growth by working on cutting-edge real-world projects that challenge you to apply your learning immediately.</p>
            </div>

            <div className="skill-card">
              <h3>Cutting-Edge</h3>
              <div className="skill-title">Tech Skills</div>
              <p>Stay ahead of the curve with workshops in AI, Machine Learning, Data Science, and Cloud Computing. Learn the technologies that are shaping the future of industries worldwide.</p>
            </div>

            <div className="skill-card">
              <h3>Develop</h3>
              <div className="skill-title">Creative & Design Skills</div>
              <p>Unlock your creative potential with our design workshops. From Graphic Design to UI/UX Design, learn the tools and techniques needed to create stunning visuals and user experiences.</p>
            </div>

            <div className="skill-card guarantee-card">
              <div className="skill-title">100%</div>
              <h3>Job Placement / Assistant</h3>
              <p>Our unwavering commitment to excellence ensures that you receive top-notch education and support. If you're not fully satisfied with your learning experience, we offer a complete refund.</p>
            </div>

            <div className="skill-card">
              <h3>Work on</h3>
              <div className="skill-title">Capstone Projects</div>
              <p>Solidify your skills by working on industry-relevant capstone projects that provide hands-on experience and are essential for career growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
