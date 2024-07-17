import React from 'react';
import qodeit from '../assets/Projects/qodeit_company.jpg'
const experiences = [
  {
    company: 'Qodeit',
    role: 'Software Developer Intern',
    duration: 'May 2024 - Present',
    description: 'Developed frontend features for Internbuddy, enhanced page performance, and developed a complete blog application for Writebing using React, MongoDB, Node.js, Express, Webpack, Nginx, and Azure.',
  },
  // Add more experiences as needed
];



const Experience = () => {
  return (
    <div className="education min-h-[80vh] bg-gray-100 p-6 rounded-lg shadow-md">
    <h1 className="text-3xl font-bold mb-4">Experience</h1>
    <div className="education-item flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
      <div className="w-20 h-20 sm:w-32 sm:h-32 overflow-hidden rounded-full shadow-md">
        <img
          src={qodeit}
          alt="IIT Bhilai Logo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-semibold mb-2">Qodeit Company</h2>
        <p className="mb-2">Software Developer Intern</p>
        <p className="mb-2">May 2024 - Present</p>
        <p className="mb-2">Developed frontend features for Internbuddy, enhanced page performance, and developed a complete blog application for Writebing using React, MongoDB, Node.js, Express, Webpack, Nginx, and Azure.</p>
      </div>
    </div>
  </div>
  );
};

export default Experience;
