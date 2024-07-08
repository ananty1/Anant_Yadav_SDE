import React from 'react';
import './About.css'; // Custom CSS for styling
import anant from '../assets/anant.JPG';
const About = () => {
  return (
    <div className="about">
      <div className="profile-picture">
        <img src={anant} alt="Anant Yadav" />
      </div>
      <div className="bio">
        <h1>About Me</h1>
        <p>
          Hi, I'm Anant Yadav, a passionate Full Stack Developer and Machine Learning Engineer. I have a strong
          background in software development, data science, and AI. With a knack for problem-solving and a drive
          to learn, I aim to create impactful solutions.
        </p>
        <p>
          I graduated from the Indian Institute of Technology BHILAI with a degree in Data Science and Artificial
          Intelligence Engineering. I have worked on various projects involving web development, machine learning,
          and data analysis.
        </p>
      </div>
    </div>
  );
};

export default About;
