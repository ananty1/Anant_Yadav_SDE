import React from 'react';
import './Experience.css'; // Custom CSS for styling

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
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <h2>{experience.role} at {experience.company}</h2>
            <p>{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
