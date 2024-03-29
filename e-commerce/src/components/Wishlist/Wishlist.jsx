import React from 'react'
import {
    Dialog,
    Button,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
  import { Tooltip } from "@material-tailwind/react";
  import { useSelector , useDispatch } from 'react-redux';
  import { FaRegHeart } from "react-icons/fa";
  import { removeWish } from '../../features/slices/wishSlice';
  

const Wishlist = ({openModal,setWish}) => {

    const wish = useSelector((state)=>state.wish.wish);
    const dispatch = useDispatch();

  return (
    <div>
        {wish.length > 0 ?(
        <>
            <Dialog 
                className='border-0 outline-0'
                open={openModal}
                handler={()=>setWish(false)}
            >
               <DialogHeader><FaRegHeart/></DialogHeader>
               <DialogBody className='flex flex-col justify-center items-start'>
                   {wish.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className="grid grid-cols-2 py-4">
                                    <div>
                                        <img
                                            className='h-[125px] rounded-md font-inter sans-serif '
                                            src={item.img}
                                            alt={item.name}
                                            
                                        ></img>
                                        <div className='flex flex-col items-start'>
                                            <h4 className='text-black font-inter text-base font-bold tracking-normal leading-none pt-2'>
                                                {item.name}
                                            </h4>
                                        </div>
                                        <div className='max-w-xs'>
                                            <p className='text-black text-xs font-inter tracking-normal leading-none pt-2'>
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>
                                            Selected Size :{" "} <span className='ml-2'>{item.size}</span>
                                        </p>
                                        <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>
                                            Selected Color :{" "} <span className='ml-2 rounded-full px-2'
                                            style={{ backgroundColor : item.color }}></span>
                                        </p>
                                        <p className='text-black text-sm font-inter tracking-normal leading-none pt-2'>
                                            Item Price :{" "} <span className='ml-2'>${item.price}</span>
                                        </p>
                                        <div className='pt-4'>
                                            <Tooltip content='Remove from the Wishlist' placement='bottom'>
                                                <Button
                                                    size='sm'
                                                    color='red'
                                                    ripple={true}
                                                    variant='filled'
                                                    onClick={()=>dispatch(removeWish(item))}
                                                >
                                                    Remove
                                                </Button>
                                            </Tooltip>
                                            {/* <Tooltip content='Add from the Wishlist' placement='bottom'>
                                                <Button
                                                    size='6px'
                                                    color='red'
                                                    ripple={true}
                                                    variant='filled'
                                                    onClick={()=>{
                                                        <ProductSelectionItem 
                                                        id={item.id}
                                                        name={item.name}
                                                        img={item.img}
                                                        text={item.text}
                                                        price={item.price}
                                                        color={item.color}
                                                        size={item.size}
                                                        totalPrice={item.totalPrice}  
                                                    />
                                                    }}>
                                                
                                                    Visit
                                                </Button>
                                            </Tooltip> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                   })}
               </DialogBody>
              <DialogFooter className='flex justify-start items-center'>
                <p className='text-black text-base font-inter tracking-normal leading-none pt-2'>
                    Here is Your Wishlist :)   
                </p>
              </DialogFooter>
            </Dialog>
   </>
    ):(<>
        <Dialog 
            className='border-0 outline-0'
            open={openModal} 
            handler={()=>setWish(false)}>
            <DialogHeader><FaRegHeart/></DialogHeader>
            <DialogBody>
              <div>
                 <h1 className='text-black text-3xl font-inter font-bold tracking-normal leading-none py-4'>
                     No Item On Wishlist 
                 </h1>
                 <p  className='text-black text-base font-inter  tracking-normal leading-none '>
                     Add some Item
                 </p>
              </div>
            </DialogBody>       
     </Dialog>
    </>)}
    </div>
  )
}

export default Wishlist