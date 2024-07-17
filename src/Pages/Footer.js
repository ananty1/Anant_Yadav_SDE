import React from 'react';
import { FaLinkedin, FaEnvelope, FaGithub, FaMedium } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="footer-icons flex space-x-4">
          <a
            href="https://www.linkedin.com/in/anant-yadav-441807244/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/ananty1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://medium.com/@ananty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaMedium size={30} />
          </a>
          <a href="mailto:y2anant@gmail.com" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
            <FaEnvelope size={30} />
          </a>
        </div>
        <p className="text-gray-300">&copy; 2024 Anant Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
