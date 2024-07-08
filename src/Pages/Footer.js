import React from 'react';
import './Footer.css'; // Custom CSS for styling
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/anant-yadav-441807244/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:y2anant@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
        <p>&copy; 2024 Anant Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
