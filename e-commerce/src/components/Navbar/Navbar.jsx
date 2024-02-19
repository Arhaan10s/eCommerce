import React from 'react'
import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
    const totalAmount = useSelector((state)=>state.cart.totalAmount);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };

  return (
    <>
        <div className='bg-black p-2 w-full'>
            <h3 className='text-white font-inter text-2xl font-bold tracking-normal leading-none text-center'>
                Welcome All
            </h3>
        </div>
        <div className='flex justify-around items-center text-4xl'>
            <div>
                <img className="h-128 w-full" src={logo} alt="store"></img>
            </div>
            <div className='flex flex-row items-center' >
                <button size='20px' className='font-inter text-base font-medium tracking-normal leading-none text-center mr-4'>
                    Logout
                </button>
                <div className='flex flex-row items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#000" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <p className=' font-inter text-base font-medium tracking-normal leading-none text-center mr-2'>Whish List</p>
                </div>
                <div className='flex flex-row items-center cursor-pointer' onClick={handleOpen}>
                    {totalAmount > 0 ? 
                    <span className='rounded-full font-inter px-2 text-sm mr-1 bg-red-500'>
                        {totalAmount}
                    </span> : ""}
                    
                    <p className='font-inter text-base font-large tracking-normal leading-none text-center mr-2'>
                        <FaShoppingCart size='20px'/>
                    </p>
                    <div>{open && 
                        <Cart 
                            openModal={open} 
                            setOpen={setOpen}
                        />}
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-black p-4 w-full flex justify-around'>
            <div className="text-white font-inter  text-base font-medium tracking-normal leading-none text-center ">
                    50% OFF
            </div>
            <div className="text-white font-inter  text-base font-medium tracking-normal leading-none text-center ">
                    Free Shipping
            </div>
            <div className="text-white font-inter  text-base font-medium tracking-normal leading-none text-center ">
                    Different Payment Methods
            </div>
        </div>
    </>
  )
}

export default Navbar