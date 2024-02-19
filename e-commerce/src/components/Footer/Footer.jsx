import React from 'react';
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className=''>
        <div className='flex items-center justify-center'>
            <hr className='h-px w-4/5 bg-gray-700 opacity-50 outline-none border-none'/>
        </div>
        <div className='flex items-center justify-around pt-3'>
            <div>
                <img className='h-25' src={logo} alt='logo'/>
            </div>
            <div>
                <p className='text-black text-bold text-lg font-inter no-underline leading-none normal-case '>
                    Copyright page by Arhaan💤
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer