import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
  return (
    <footer className="bg-gray-300 text-white py-6 text-center">
      <h4 className='text-4xl mb-3 text-gray-400'> Anant Yadav</h4>
     
      <div className="container mx-auto flex flex-col justify-around items-center">
      
        <div className="footer-icons flex space-x-4">
          <a
            href="https://www.linkedin.com/in/anant-yadav-441807244/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin size={30} color='blue'/>
          </a>
          <a
            href="https://github.com/ananty1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaGithub size={30} color='black' />
          </a>
          <a
            href="https://medium.com/@ananty"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
          >
            <FaMedium size={30} color='black' />
          </a>
          <a href="mailto:y2anant@gmail.com" className="text-gray-300 hover:text-blue-500 transition-colors duration-300">
            <BiLogoGmail size={30} color='red'/>
          </a>
        </div>
        <p className="text-black mt-2">&copy; 2024 Anant Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
