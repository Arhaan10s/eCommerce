import React from 'react'

import { storeData } from '../../assets/data/dummyData';
import ProductSelectionItem from './ProductSelectionItem';


const ProductSection = () => {
 
  return (
    <div>
        <div className='bg-gray-500 p-2 w-[55%] font-inter mx-auto rounded-md '>
            <h2 className='text-black-900 text-center text-lg font-inter font-bold tracking-normal leading-none'>
                SUMMER T-Shirt SALE 30%
            </h2>
        </div>
        <div className='grid grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
            {storeData.slice(0,6).map((product,index)=>{
                return(
                    <div key={index}>
                        <ProductSelectionItem
                            id={product.id}
                            name={product.name}
                            img={product.img}
                            text={product.text}
                            price={product.price}
                            color={product.color}
                            size={product.size}
                            totalPrice={product.totalPrice}
                            
                        ></ProductSelectionItem>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductSection