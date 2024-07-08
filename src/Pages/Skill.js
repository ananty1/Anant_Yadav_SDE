import React from 'react';
import './Skills.css'; // Custom CSS for styling
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills">
      <h1>Technical Skills</h1>
      <div className="skills-container">
        <div className="skill">
          <FaReact size={50} />
          <h2>React</h2>
          <p>Advanced</p>
        </div>
        <div className="skill">
          <FaNodeJs size={50} />
          <h2>Node.js</h2>
          <p>Advanced</p>
        </div>
        <div className="skill">
          <FaPython size={50} />
          <h2>Python</h2>
          <p>Advanced</p>
        </div>
        <div className="skill">
          <FaDatabase size={50} />
          <h2>MongoDB</h2>
          <p>Intermediate</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
