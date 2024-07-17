import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGithub, FaDocker, FaLinux, FaWindows } from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills min-h-[90vh] bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Technical Skills</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="skill flex flex-col items-center justify-center">
          <FaReact size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">React</h2>
          {/* <p className="text-center">Advanced</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaNodeJs size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">Node.js</h2>
          {/* <p className="text-center">Advanced</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaPython size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">Python</h2>
          {/* <p className="text-center">Advanced</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaDatabase size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">MongoDB</h2>
          {/* <p className="text-center">Intermediate</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          {/* <FaTensorflow size={50} className="mb-2" /> */}
          <h2 className="text-xl font-semibold mb-1">TensorFlow</h2>
          {/* <p className="text-center">Intermediate</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaAws size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">AWS</h2>
          {/* <p className="text-center">Intermediate</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          {/* <FaAzure size={50} className="mb-2" /> */}
          <h2 className="text-xl font-semibold mb-1">Azure</h2>
          {/* <p className="text-center">Intermediate</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaGithub size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">GitHub</h2>
          {/* <p className="text-center">Advanced</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaDocker size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">Docker</h2>
          {/* <p className="text-center">Intermediate</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaPython size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">Jupyter Notebook</h2>
          {/* <p className="text-center">Intermediate</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaWindows size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">Windows</h2>
          {/* <p className="text-center">Advanced</p> */}
        </div>
        <div className="skill flex flex-col items-center justify-center">
          <FaLinux size={50} className="mb-2" />
          <h2 className="text-xl font-semibold mb-1">Linux</h2>
          {/* <p className="text-center">Intermediate</p> */}
        </div>
        <div className="hidden sm:flex"></div> {/* Placeholder for responsive grid */}
      </div>
    </div>
  );
};

export default Skills;
