import React, { useEffect, useState } from 'react'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaBars, FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AnantLogo from '../assets/Anant_Logo.png';
import AboutUsdummy from './AboutUsdummy';

const Toolbar = () => {
    const [nav,setNav] = useState(false);

    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className='w-full min-h-[80px] flex justify-between items-center sticky z-10 text-white bg-black'>
        
        <ul className='hidden sm:flex px-4'>
        <img src={AnantLogo} alt='logo' className='m-2 w-12 h-12 object-cover rounded-full'/>
            <li className='text-xl py-4'>
                <Link to={"/"}> Home</Link>
            </li>
            <li className='text-xl py-4'>
                <Link to={"/skills"}> Skills</Link>
            </li>
            <li className='text-xl py-4'>
                <Link to={"/projects"}> Project </Link>
            </li>
            <li className='text-xl py-4'>
                <Link to={"/experience"}> Experience </Link>
            </li>
            <li className='text-xl py-4'>
                <Link to={"/education"}> Education </Link>
            </li>
            <li className='text-xl py-4'>
                <Link to={"/contact"}> Contact </Link>
            </li>
            
        </ul>

        <div className='flex justify-between'>
            <FaFacebookF size={20} className='mx-4'/>
            <FaTwitter size={20} className='mx-4'/>
            <FaGooglePlusG  size={20}className='mx-4'/>
            <FaInstagram  size={20} className='mx-4'/>
        </div>
        {/* Hamburger icon here */}
        <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr=4 cursor-pointer'/>
        </div>
        <div className={nav?'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col':'absolute top-0 h-screen left-[-100%] ease-in duration-500 '}>
        <ul className='h-full w-full text-center pt-12'>
        <li className='text-2xl py-8'>
                <Link to={"/"}> Home</Link>
            </li>
           
            <li className='text-2xl py-8'>
                <Link to={"/skills"}> Skills</Link>
            </li>
            <li className='text-2xl py-8'>
                <Link to={"/projects"}> Project </Link>
            </li>
            <li className='text-2xl py-8'>
                <Link to={"/experience"}> Experience </Link>
            </li>
            <li className='text-2xl py-8'>
                <Link to={"/education"}> Education </Link>
            </li>
            <li className='text-2xl py-8'>
                <Link to={"/contact"}> Contact </Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Toolbar