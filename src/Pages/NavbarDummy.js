'use client'

// import { useState } from 'react'
import { AiFillMail,AiOutlineClockCircle } from 'react-icons/ai'

import { BsChatDots } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'


function NavbarDummy() {
    const navigate = useNavigate();
  return (
    <>
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex items-center'>
      <BsChatDots size={30} className='text-[var(--primary-dark)] mr-2'/>
      <h1 className='text-xl font-bold text-gray-700'>Anant Yadav</h1>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='text-[var(--primary-dark)] mr-2'/>
          <p className='text-sm text-gray-700'> 9 am to 7pm</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiFillMail size={20}  className='text-[var(--primary-dark)] mr-2'/>
          <p className='text-sm text-gray-700'> y2anant@gmail.com</p>
        </div>
        <button onClick={()=>navigate("/contact")}> Talk to me now</button>
      </div>
    </div>

    
    
    </>
    
  )
}
export default NavbarDummy;