import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/blackLogo.png';


const Nav = () => {
  return (
    <nav className=' fixed z-[999] w-full px-20 py-5 flex items-center justify-between font-["Neue_Montreal"] gap-10'>
      <div className='logo w-[7vw]'>
        <img src={logoImg}alt="logo" />
      </div>
      <div className="items flex gap-12 text-[1.2vw]">
        <Link to='/'>Home</Link>
        <Link to='/about'>Features</Link>
        <Link to='/product'>Contact Us</Link>
        <Link to='/service'>About Us</Link>
      </div>
      <div className="login h-[4vw] w-[10vw] rounded-2xl bg-[#5D7752] flex items-center justify-center font-md text-white uppercase text-[1.2vw]">
        <Link to='/login/signup'>Login/ Sign Up</Link>
      </div>

    </nav>
  )
}

export default Nav