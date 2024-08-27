import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdWorkHistory } from "react-icons/md";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* <div className='bg-gray-200'>
         <div
            className="absolute hidden sm:block md:top-20 sm:top-[8%] xs:top-[10%] xxl:top-4 xxl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] xs:left-[10%]">
            <img className="xxl:h-[680px] xl:h-[500px] md:h-[450px] sm:h-[480px]" src="https://images.unsplash.com/flagged/1/apple-gear-looking-pretty.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Incognito " />
        </div>

        <div

            className="lg:px-16 xs:px-4 px-8 pb-4 h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-white">
            
            <div className="w-full flex flex-col z-10">
                <h4 className="text-lg font-semibold text-white xl:text-2xl">Hey There</h4>
                <h1 className="xl:text-8xl sm:text-6xl xs:text-3xl font-semibold font-serif mt-2">I'm
                    <span className="">Samuel</span>
                </h1>
                <h1 className="sm:text-6xl xs:text-3xl font-semibold font-serif">Abera</h1>
                <h4 className="text-rose-500 mt-4 lg:text-2xl">--FullStack Developer</h4>

                <p className="lg:w-[70%] xs:w-full text-white text-sm mt-4 xl:text-xl">Experienced full-stack developer with 4+ years
                    of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.</p>

                <div>
                    <button className="mt-6 px-6 py-1 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl">Get In Touch</button>
                </div>
            </div>

            
            <div
                className="w-full flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
                <div className="flex flex-col sm:items-end xs:items-center">
                    <div className="inline-flex gap-1 items-center">
                        <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">4</h2>
                        <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                    </div>
                    <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Years of Expireance</h4>
                </div>
                <div className="flex flex-col sm:items-end xs:items-center">
                    <div className="inline-flex gap-1 items-center">
                        <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">29</h2>
                        <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                    </div>
                    <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Component Contribution</h4>
                </div>
                <div className="flex flex-col sm:items-end xs:items-center">
                    <div className="inline-flex gap-1 items-center">
                        <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">40.2K</h2>
                        <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
                    </div>
                    <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">User's Got Help</h4>
                </div>
            </div>
        </div>
        </div> */}
            <div className='p-12'>
                <h1 className='text-4xl font-bold '> Anant yadav </h1>
                <h2 className='text-4xl py-3 animate-typing overflow-hidden whitespace-nowrap text-gray-800 font-semibold'> Software Developer</h2>
                <p className='text-gray-500 font-semibold w-[70%]'>
                    I'm Anant, currently a Btech Student in Data and Artificial Intelligence at IIT Bhilai. I'm skilled in MERN stack development, machine learning, and problem-solving in DSA, with a passion for creating innovative tech solutions.
                </p>


                {/* <h2 className='text-3xl font-bold mb-6'>Highlights</h2> */}
                <div className="my-4 flex justify-center gap-5 overflow-hidden py-4 md:-ml-10p md:-mr-10p">
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src="https://images.unsplash.com/photo-1507652955-f3dcef5a3be5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random 1" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-16">
        <img src="https://images.unsplash.com/photo-1495001258031-d1b407bc1776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluc3BpcmF0aW9ufGVufDB8fDB8fHww" alt="Random 2" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src="https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zcGlyYXRpb258ZW58MHx8MHx8fDA%3D" alt="Random 3" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-30">
        <img src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Random 4" className="w-full h-full object-cover" loading="lazy" />
    </div>
    <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src="https://plus.unsplash.com/premium_photo-1671599016130-7882dbff302f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zcGlyYXRpb258ZW58MHx8MHx8fDA%3D" alt="Random 5" className="w-full h-full object-cover" loading="lazy" />
    </div>
</div>






                <div className='flex flex-col xl:flex-row'>
                    <div className='xl:w-2/3 w-full flex flex-col space-y-4'>
                        <div className='flex flex-col  max-w-xl m-2 p-6 hover:bg-slate-50 rounded-xl cursor-pointer' onClick={() => navigate("/experience")}>
                            {/* <img src={qodeit_company} alt="Full Stack Development" className='w-16 h-16 mb-4 object-cover' /> */}
                            <p className='text-gray-400 font-normal text-sm'>| May 25,2024 - July 27,2024</p>
                            <h3 className='font-semibold text-gray-800 mb-2 text-md '>Software Developer Intern, Qodeit company</h3>
                            <p className=' text-gray-700 text-md'>At Qodeit, I worked as mern developer Intern,I was responsible of entire website development and deployment, and optimized the build and reduced the page loading by 3 times... </p>
                            <p className='font-medium text-gray-400'>Proficient in React, Node.js, Express, and MongoDB.</p>
                            <a href='/experience' className='text-emerald-400'> Read more...</a>
                        </div>

                        <div className='flex flex-col  max-w-xl m-2 p-6  hover:bg-slate-50 rounded-xl cursor-pointer'>
                            {/* <img src={qodeit_company} alt="Full Stack Development" className='w-16 h-16 mb-4 object-cover' /> */}
                            <p className='text-gray-400 font-normal text-sm'>| LeetCode (maxRating 1807) </p>
                            <h3 className='font-semibold text-gray-800 mb-2 text-md '>1000+ DSA Question</h3>
                            <p className=' text-gray-700 text-md'>I have been continuosly working hard on my Data Structure and Algorithm skills to improve my problem solving and analytical skills. I do follow Striver SDE Sheet and LeetCode standard to be the key.</p>
                            <a href='https://leetcode.com/u/majestic_coder/' className='text-emerald-400'> Read more...</a>

                        </div>
                        <div className='flex flex-col  max-w-xl  m-2 p-6  hover:bg-slate-50 rounded-xl cursor-pointer'>
                            {/* <img src={qodeit_company} alt="Full Stack Development" className='w-16 h-16 mb-4 object-cover' /> */}
                            <p className='text-gray-400 font-normal text-sm'>| Artificial Intelligence </p>
                            <h3 className='font-semibold text-gray-800 mb-2 text-md '>  Hot Topic</h3>
                            <p className=' text-gray-700 text-md'> I have always been firm believer the potential prospect of  machine Learning future. And Currently learning about Langchain makes me belive again that this is the future. </p>
                            <p className='font-medium'>Langchain, Machine Learning</p>
                            <a href='https://article-analyzer-ananty1.streamlit.app/' className='text-emerald-400'> Read more...</a>
                        </div>

                    </div>
                    <div className='xl:w-1/3 w-full'>

                        <div className='ml-2 my-8 p-6 w-70p border-2 rounded-xl flex flex-col'>
                            <div className=' flex flex-row'>
                                <MdWorkHistory size={20} color='gray' />
                                <p className='mx-2 text-gray-800 font-bold'> Work</p>
                            </div>
                            <div className='mt-6 flex flex-row justify-between'>
                                <div className='flex flex-row mx-2'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Logo_of_IIT_Bhilai.png/1200px-Logo_of_IIT_Bhilai.png' className="w-12 h-12 p-2 rounded-full border-2 border-gray-300 object-cover bg-white shadow-md" alt='profile' />
                                    <div className='flex flex-col'>
                                        <p className='font-bold text-sm mx-2'>Student</p>
                                        <p className='font-normal text-sm mx-2'> IIT Bhilai </p>
                                    </div>
                                </div>
                                <div className='text-sm'> 2021-Present</div>
                            </div>
                            <div className='mt-6 flex flex-row justify-between'>
                                <div className='flex flex-row mx-2'>
                                    <img src='https://media.licdn.com/dms/image/v2/C4E1BAQGadaH3ukVi8A/company-background_10000/company-background_10000/0/1646832408636/qode_it_cover?e=2147483647&v=beta&t=DG80l-0lXoqm3B4eJJq3Q60YJrbY6stxR-8CbUqunfM' className="w-12 h-12 p-2 rounded-full border-2 border-gray-300 object-cover bg-white shadow-md" alt='profile' />
                                    <div className='flex flex-col'>
                                        <p className='font-bold text-sm mx-2'>MERN Intern</p>
                                        <p className='font-normal text-sm mx-2'> Qodeit </p>
                                    </div>
                                </div>
                                <div className='text-sm'> May-Aug 2024</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Hero