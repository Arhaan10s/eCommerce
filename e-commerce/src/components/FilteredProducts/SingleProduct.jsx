import React from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Dropdown from '../Dropdown/Dropdown';

import { useState } from 'react';
import Dropdown2 from '../Dropdown/Dropdown2';
import { Tooltip,Button } from '@material-tailwind/react'
import { addToCart } from '../../features/slices/cartSlice';
import { addToWish } from '../../features/slices/wishSlice';
import { useDispatch } from 'react-redux';
import { FaRegHeart } from "react-icons/fa";




const SingleProduct = () => {

  const dispatch= useDispatch();
  const product = useSelector((state)=>state.products.singleProduct);
  const {id} = useParams(product);

  const [sizeSelect,setSelection] = useState('Select...');
  const handleSelect=(item)=>{
    setSelection(item);
    
  }
  const [clicked, setClicked] = useState(false);


  const [colorselect,setColorselect] = useState('Select...');
  const handleColorSelect=(item)=>{
    setColorselect(item);
  }
  const handleClick=(item)=>{
    setClicked(true);
    dispatch(addToWish({
      id: item.id,
      name: item.name,
      img: item.img,
      text: item.text,
      size: sizeSelect,
      color: colorselect,
      price: item.price,
    }))
    
  }

  return (
    <div>
      {product
      .filter((product)=>product.id === id)
      .map((item,index)=>{
        return (
        <div key={index} className='flex justify-center items-center py-10'>
          <div className='pl-44 grow-[2]'>
            <img 
            className='h-[800px] rounded-lg'
            src={item.img}
            alt={item.name}
            />
          </div>
          <div className='grow-[3]'>
            <div className='max-w-lg pb-4'>
              <h5 className='text-2xl font-inter font-bold tracking-normal leading-none pb-4'>
                {item.name}
              </h5>
              <p className='text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                15% OFF
              </p>
              <p className='text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                {item.text}
              </p>
              <p className='text-black-600 text-xl font-inter font-bold tracking-normal leading-none pb-4'>
                ${item.price}
              </p>
              
              <div className='flex font-inter pb-4'>
                {item.size ? 
                <div >
                <label  className="block mb-2 text-lg font-inter font-medium text-gray-900 dark:text-white">Select Size</label>
                    <div >
                        
                        <Dropdown 
                         
                          options={item.size}
                          value={sizeSelect}
                          onChange={handleSelect}
                          label={item}
                        />
                      
                    </div>
                </div>:(
                  <div >
                  <label  className="block mb-2 text-lg font-inter font-medium text-gray-900 dark:text-white">Select Size</label>
                      <div >
                          
                          <Dropdown
                           disabled={true}
                            options={item.size}
                            value={sizeSelect}
                            onChange={handleSelect}
                            label={item}
                          />
                        
                      </div>
                  </div>
                )}                
              
              <div >
                  <label  className="block mb-2 text-lg font-inter font-medium text-gray-900 dark:text-white">Select Color</label>
                      <div >
                          <Dropdown2
                            options={item.color}
                            value={colorselect}
                            onChange={handleColorSelect}
                            label={item}
                          />
                        
                      </div>
                  </div>
              </div>
              <Tooltip  placement="bottom">
                  <Button 
                    color="gray"
                    size="lg"
                    
                    ripple={true}
                    onClick={()=>{
                    dispatch(addToCart({
                      id:item.id,
                      name:item.name,
                      img:item.img,
                      text:item.text,
                      size:sizeSelect,
                      color:colorselect,
                      price:item.price,
                      amount:1,
                      totalPrice:item.price
                    }))
                  alert("Added to the cart")
                  }}
                    >
                      Add to Cart
                  </Button>
              </Tooltip>
              <Tooltip  placement="bottom">
              <FaRegHeart
                    className='heart-icon'
                    color={clicked ? 'red' : 'gray'}
                    size={40} 
                    style={{ padding: '7px' , fill: clicked ? 'red' : 'gray'}} 
                    ripple={true}
                    onClick={()=>{handleClick(item)}
                  }
                    >
                  </FaRegHeart>
              </Tooltip>
            </div>
          </div>
        </div>
        )
      })
      }

    </div>
  )
}

export default SingleProduct