import React from 'react';
import iitbhilailogo from '../assets/Projects/IIT_Bhilai_logo.png'
const Education = () => {
  return (
    <div className="education min-h-[70vh] bg-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      <div className="education-item flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-20 h-20 sm:w-32 sm:h-32 overflow-hidden rounded-full shadow-md">
          <img
            src={iitbhilailogo}
            alt="IIT Bhilai Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 ml-4">
          <h2 className="text-xl font-semibold mb-2">Indian Institute of Technology BHILAI</h2>
          <p className="mb-2">Bachelor of Technology in Data Science and Artificial Intelligence Engineering (DSAI)</p>
          <p className="mb-2">Expected Graduation: 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
