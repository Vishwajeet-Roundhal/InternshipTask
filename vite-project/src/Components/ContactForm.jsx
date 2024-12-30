import React, { useState } from 'react';
import "../styles/ContactForm.css";


export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    qualification: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const frontendURL = import.meta.env.VITE_FRONTEND;
  const backendURL = import.meta.env.VITE_BACKEND;
  console.log(backendURL);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendURL}/api/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'no-cors', 
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        // Clear the form after submission
        setFormData({
          fullName: '',
          email: '',
          mobileNumber: '',
          qualification: '',
          message: ''
        });
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form">
        <h2 className="form-title">Let's connect</h2>
        <h2 className="form-subtitle">
          Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
        </h2>

        <form className="form-fields" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full Name"
              className="form-input"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              className="form-input"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              placeholder="Mobile Number"
              className="form-input"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <select
              name="qualification"
              value={formData.qualification}
              className="form-input"
              onChange={handleChange}
            >
              <option value="">Select Qualification</option>
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              className="form-input form-textarea"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Get Free Career Evaluation
            <span className="button-arrow">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}
