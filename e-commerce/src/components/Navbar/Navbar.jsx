import React from 'react'
import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';
import { FaShoppingCart,FaRegHeart } from "react-icons/fa";
import { Login } from '../Login/login';

const Navbar = () => {
    const user = useSelector((state)=>state.user.authUser);
    
    const totalAmount = useSelector((state)=>state.cart.totalAmount);
    const totalWishlist = useSelector((state)=>state.wish.totalWish);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const [wish,setWish] = useState(false);
    const handleOpen1 = ()=>{
        setWish(true)
    }

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
                <div className='flex flex-row items-center cursor-pointer' onClick={handleOpen1}>
                   {totalWishlist > 0 ? 
                    <span className='rounded-full font-inter px-2 text-sm mr-1 bg-red-500'>
                        {totalWishlist}
                    </span> : ""}
                    <p className='font-inter text-base font-large tracking-normal leading-none text-center mr-2'>
                        <FaRegHeart size='20px'/>
                    </p>
                    <div> {wish &&
                            <Wishlist 
                            openModal={wish}
                            setWish={setWish}
                            />
                        }
                    </div>
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
                {!user ?(
                <Login size='20px' className='font-inter text-base font-medium tracking-normal leading-none text-center mr-4'>
                    Sign in
                </Login>
                ):(
                    <div className='font-inter text-base font-medium tracking-normal leading-none text-center mr-4'>
                        login
                    </div>
                )}
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