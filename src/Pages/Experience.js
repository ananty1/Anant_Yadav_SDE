import React from 'react';
import qodeit from '../assets/Projects/qodeit_company.jpg'




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
          <p className="text-xl font-semibold mb-2">Software Developer Intern</p>
          <h2 className="mb-2">Qodeit (May 2024 - July 2024)</h2>
          <p className="mb-2">
            During my internship at Qodeit, I worked on multiple frontend features, implementing a user-friendly homepage UI with Razorpay payment integration and Google Analytics for both mobile and desktop environments.
          </p>
          <p className="mb-2">
            <strong>Enhanced Page Performance:</strong> Improved load time by 300%, leading to a 23% increase in overall page performance.
          </p>
          <p className="mb-2">
            <strong>Blog Application Development:</strong> Designed and developed a comprehensive blog application, ensuring seamless usability for writers and users.
          </p>
          <p className="mb-2">
            <strong>SEO Optimization:</strong> Implemented techniques to enhance webpage visibility and performance using server-side rendering.
          </p>
          <p className="mb-2">
            <strong>Technologies Used:</strong> React, MongoDB, Node.js, Express, Webpack, Nginx, Azure.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Experience;
