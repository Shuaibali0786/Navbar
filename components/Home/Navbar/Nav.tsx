import React from 'react'
import Image from 'next/image'
import { navLinks } from '@/data/data'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'

// define props type

type Props = {
  openNav: () => void;
};


const Nav = ({ openNav}: Props) => {
  return (
    <div className='fixed h-[12vh] z-[10] bg-blue-950 w-full'>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%]
      mx-auto'>
      

        {/* Logo */}

        <Image src="/image/Logo1.png" 
      alt='LOGO'
      width={170}
      height={170}
      className='ml-[-1.5rem] sm:ml-0'/>

      {/* Nav Link */}
      <div className='flex items-center space-x-10 '>
       <div className='hidden lg:flex items-center space-x-8'>
       {navLinks.map((navLinks) => {
        return <Link key={navLinks.id} href={navLinks.url}>
          <p className='nav_link'> {navLinks.lable}</p>
        </Link>
      })} 
       </div>
       {/* Button */}
       <div className='flex items-center space-x-4'>
        <button className='md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Hier Me</button>
        {/* Burger */}
        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
       </div>
      
       
      </div>

      </div>
      
    </div>
  )
}

export default Nav



