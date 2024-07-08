import React from 'react';
import './Project.css'; // Custom CSS for styling

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'path/to/project1.jpg',
    link: 'https://github.com/anant/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    technologies: ['Python', 'TensorFlow'],
    image: 'path/to/project2.jpg',
    link: 'https://github.com/anant/project-two',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
