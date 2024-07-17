'use client'

import { useState } from 'react'
import { AiFillPhone,AiOutlineClockCircle } from 'react-icons/ai'

import { BsChatDots } from 'react-icons/bs'
import Toolbar from './Toolbar'
import Hero from './Hero'

function NavbarDummy() {
    
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
          <AiFillPhone size={20}  className='text-[var(--primary-dark)] mr-2'/>
          <p className='text-sm text-gray-700'> +91-6386284419</p>
        </div>
        <button> Talk to us now</button>
      </div>
    </div>

    
    
    </>
    
  )
}
export default NavbarDummy;