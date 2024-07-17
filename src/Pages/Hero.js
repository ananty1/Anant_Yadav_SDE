import React from 'react'
import AboutUsdummy from './AboutUsdummy'
// import hero from '../assets/hero.png';
// import anant from '../assets/anant.png';

const Hero = () => {
    return (
        <>
        <div className='w-full min-h-[70vh] bg-slate-500'>
            {/* <img
                src={anant}
                alt='Anant Yadav'
                className='w-full h-full object-cover'
            /> */}
            <div className='max-w-[1140px m-auto'>
                <div className='absolute top-[40%] w-full md:[-50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='text-4xl font-bold '> Anant Yadav </h1>
                    <h2 className='text-4xl py-4 italic'> Software Developer</h2>
                    <p>
                       Hi Guys! This is Anant Yadav, 
                        Currently, I am interning at Qodeit as Software developer Intern. Also I am pursuing my Btech 4th year in Data Science and Artificial Intelligence from IIT Bhilai.
                    </p>
                </div>
            </div>
        </div>
        <AboutUsdummy/>
        </>
    )
}

export default Hero