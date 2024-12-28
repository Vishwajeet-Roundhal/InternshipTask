import React from "react";
import "../styles/Testimonials.css";

export function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          Hear from Our <span className="highlight">Achievers</span>
        </h2>

        <div className="testimonial-card">
          <div className="testimonial-content">
            {/* Left Section */}
            <div className="left-section">
              <div className="learnings">
                <div className="learnings-container">
                  <div className="company-info">
                    <img
                      src="https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg"
                      alt="Google"
                      className="company-logo"
                      
                    />
                    <div className="company-details">
                      <span className="company-name">Google</span>
                      <span className="company-location">Hyderabad</span>
                    </div>
                  </div>
                  <h3>
                    Learned Skills from <br /> Hubnex SkillsUp
                  </h3>
                  <div className="skills-list">
                    <span className="skill-tag">UX/UI Designing</span>
                    <span className="skill-tag">Design Thinking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <blockquote className="testimonial-quote">
                <div className="quote-container">
                  <h4 className="quote-heading">
                    <span className="highlight2">"</span>  Hubnex Skillup has redefined my <br></br>career path. <span className="highlight2">"</span> 
                  </h4>
                  <p className="quote-text">
                  Hubnex Skillup has redefined my career path.The mentorship and hands-on workshops are second to none.
                  </p>
                </div>
              </blockquote>
              <hr />
              <div className="testimonial-footer">
                <div className="author-info">
                  <h5 className="author-name">Divya</h5>
                  <div className="author-details">
                    <span className="author-title">UX Designer</span>
                    <span className="author-company">
                      Google, <span className="location">Hyderabad</span>
                    </span>
                  </div>
                </div>
                <div className="testimonial-meta">
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="star">
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="join-date">Joined 12/06/2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navigation-arrows">
          <button className="nav-arrow prev" aria-label="Previous testimonial">
            ←
          </button>
          <button className="nav-arrow next" aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
