import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGithub, FaDocker, FaLinux, FaWindows,FaHtml5,FaCss3 } from 'react-icons/fa';
import { TbStepInto } from "react-icons/tb";
import { DiDjango } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import { SiRabbitmq,SiCplusplus,SiJavascript,SiMysql,SiTensorflow,SiStreamlit,SiScikitlearn,SiNumpy,SiPandas,SiMlflow } from "react-icons/si";

const skillSet = [
  {
    title: 'Frontend Development',
    tools: [
      { icon: <FaReact size={50} className="mb-2" color="skyblue"/>, title: 'React' },
      { icon: <FaHtml5 size={50} className="mb-2" color="red"/>, title: 'React' },
      { icon: <FaCss3 size={50} className="mb-2" color="blue"/>, title: 'React' },
    ],
    Description: 'Technologies and frameworks used for frontend development.',
    Link: 'https://reactjs.org/',
  },
  {
    title: 'Backend Development',
    tools: [
      { icon: <FaNodeJs size={50} className="mb-2" color="green" />, title: 'Node.js' },
      { icon: <DiRedis size={50} className="mb-2" color="red" />, title: 'Redis' },
      { icon: <SiRabbitmq size={50} className="mb-2" color="brown" />, title: 'Rabbit MQ' },
      { icon: <DiDjango size={50} className="mb-2" color="black" />, title: 'Django' },
    ],
    Description: 'Technologies and frameworks for backend development that I have used.',
    Link: 'https://reactjs.org/',
  },
  {
    title: 'Programming Languages',
    tools: [
      { icon: <SiCplusplus size={50} className="mb-2" color="blue"/>, title: 'C++' },
      { icon: <FaPython size={50} className="mb-2" color="yellow"/>, title: 'Python' },
      { icon: <SiJavascript size={50} className="mb-2" color="yellow"/>, title: 'JavaScript' },
    ],
    Description: 'Languages used for various programming tasks and development.',
    Link: 'https://www.python.org/',
  },
  {
    title: 'Data Science & Machine Learning',
    tools: [
      { icon: <SiNumpy size={50} className="mb-2" color="blue"/>, title: 'NumPy' },
      { icon: <SiPandas size={50} className="mb-2" color="blue"/>, title: 'Pandas' },
      { icon: <SiTensorflow size={50} className="mb-2" color="brown"/>, title: 'TensorFlow' },
      { icon: <SiStreamlit size={50} className="mb-2" color="brown"/>, title: 'Streamlit' },
      { icon: <SiScikitlearn size={50} className="mb-2" color="brown"/>, title: 'Scikit-Learn' },
      { icon: <SiMlflow size={50} className="mb-2" color="blue" />, title: 'MLflow' },
    ],
    Description: 'Tools and libraries used for data science and machine learning.',
    Link: 'https://www.tensorflow.org/',
  },
  {
    title: 'Databases & Tools',
    tools: [
      { icon: <FaDatabase size={50} className="mb-2" color="green"/>, title: 'MongoDB' },
      { icon: <SiMysql size={50} className="mb-2" color="blue"/>, title: 'SQL' },
      { icon: <FaDocker size={50} className="mb-2" color="blue"/>, title: 'Docker' },
      { icon: <FaGithub size={50} className="mb-2" color="black"/>, title: 'GitHub' },
      
    ],
    Description: 'Tools and databases for managing data and development processes.',
    Link: 'https://www.mongodb.com/',
  },
  {
    title: 'Machine Learning & Cloud',
    tools: [
      { icon: <FaAws size={50} className="mb-2" color="brown"/>, title: 'AWS' },
      { icon: <FaPython size={50} className="mb-2" color="brown"/>, title: 'Jupyter Notebook' },
      { icon: <FaLinux size={50} className="mb-2" color="black"/>, title: 'Linux' },
    ],
    Description: 'Technologies related to machine learning and cloud computing.',
    Link: 'https://aws.amazon.com/',
  },
  {
    title: 'Others',
    tools: [
      { icon: <FaWindows size={50} className="mb-2" color="blue"/>, title: 'Windows' },
      { icon: <FaLinux size={50} className="mb-2" color="black"/>, title: 'Linux' },
      { icon: '', title: 'Azure' },
    ],
    Description: 'Other relevant tools and platforms.',
    Link: 'https://azure.microsoft.com/',
  },
];

const Skills = () => {
  return (
    <>
      <h2 className='text-4xl mb-3 font-bold'>Technical Skills</h2>
      <div className="flex justify-center min-h-[90vh] bg-gray-100 p-6 rounded-lg shadow-md">
      
        <ul className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {skillSet.map((skills,index)=>(
            <li className="mb-12 ml-8" key={index}>
            
            <span className="absolute flex items-center justify-center w-10 h-10 bg-green-200 rounded-full -left-5 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <TbStepInto size={20} className="text-green-600 dark:text-green-300" />
            </span>
            
            <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
             
              {skills?.tools.map((tool,toolIndex)=>(
                <div className="flex flex-col items-center" key={toolIndex}>
                {tool.icon}
                <h2 className="text-xl font-semibold text-black mb-1">{tool.title}</h2>
              </div>
              ))}
              
              
              {/* <p className="text-center">Advanced</p> */}
            </div>
            <p class="text-sm">{skills.Description}</p>
            <p class="text-xl"> <a href={skills.Link}>{skills.title}</a></p>
          </li>
            
          ))}
          
         



        </ul>
      </div>
    </>


  );
};

export default Skills;
