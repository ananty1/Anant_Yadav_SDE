import React from 'react'
import achivement_leetcode from '../assets/achivement_leetcode.png';
import fullstack from '../assets/full_stack.jpg';
import machinelearning from '../assets/machine_learning.jpg';
const AboutUsdummy = () => {
  return (
    <div className='container min-h-[80vh] mx-auto p-6 bg-slate-200'>
      <h2 className='text-3xl font-bold mb-6'>Highlights</h2>
      <div className='flex flex-col justify-around sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
        <div className='flex flex-col  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <img src={achivement_leetcode} alt="Achievement" className='w-16 h-16 mb-4 object-cover' />
          <h3 className='text-2xl font-semibold mb-2 '>Problem Solver</h3>
          <p className='font-medium'>DSA 900+ with LeetCode rating maximum of 1770</p>
        </div>
        <div className='flex flex-col  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <img src={fullstack} alt="Full Stack Development" className='w-16 h-16 mb-4 object-cover rounded-md' />
          <h3 className='text-2xl font-bold mb-2'>Full Stack MERN Development</h3>
          <p className='font-medium'>Experienced in building and deploying MERN stack applications.</p>
          <p className='font-medium'>Proficient in React, Node.js, Express, and MongoDB.</p>
        </div>
        <div className='flex flex-col max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <img src={machinelearning} alt="Machine Learning" className='w-16 h-16 mb-4 object-cover' />
          <h3 className='text-2xl font-bold mb-2'>Machine Learning</h3>
          <p className='font-medium'>Skilled in developing and deploying ML models.</p>
          <p className='font-medium'>Experienced with TensorFlow, Keras, and scikit-learn.</p>
        </div>
      </div>
    </div>

  )
}

export default AboutUsdummy