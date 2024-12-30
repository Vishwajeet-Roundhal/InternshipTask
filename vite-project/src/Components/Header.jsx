import React, {useState} from 'react';
import "../styles/Header.css"
import { ContactForm } from './ContactForm';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to toggle the modal
  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="header-wrapper">
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <a href="/login" className="brand-logo">Skillup</a>
            <span className="brand-subtitle">An Initiative By Hubnex Labs</span>
          </div>
          
          <nav className="navigation">
            <a href="/" className="nav-item active">Home</a>
            <a href="/pricing" className="nav-item">Pricing</a>
            <a href="/features" className="nav-item">Features</a>
            <a href="/about" className="nav-item">About Us</a>
            <button className="enroll-btn" onClick={handleEnrollClick}> 
              Enroll Now 
              <span className="arrow">→</span>
            </button>
          </nav>
        </div>
      </header>

      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-track">
            <span className="announcement-item">💰 100% Money Back Guarantee</span>
            <span className="announcement-item">🎯 100% Job Placement/Assistance</span>
            <span className="announcement-item">💰 100% Money Back Guarantee</span>
            <span className="announcement-item">🎯 100% Job Placement/Assistance</span>
            <span className="announcement-item">💰 100% Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </div>

      {/* Modal for the contact form */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>×</button>
            <ContactForm />  {/* Display the ContactForm component here */}
          </div>
        </div>
      )}
    </>
  );
}