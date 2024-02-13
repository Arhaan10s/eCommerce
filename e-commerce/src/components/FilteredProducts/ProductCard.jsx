import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";


const ProductCard = ({ id,name,img,price,text,colors}) => {
  return (
    <Card className="mt-6 w-96">
    <CardHeader color="blue-gray" className="relative h-96">
      <img
        src={img}
        alt="img"
        
      />
    </CardHeader>
    <CardBody>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        {name}
      </Typography>
      <Typography>
        {text}
      </Typography>
    </CardBody>
    <CardFooter divider className="flex items-center justify-between py-3">
    
    <Typography variant="small">${price}</Typography>
    
    <Typography variant="small" color="gray" className='flex gap-1'>
        {colors?.map((color,index)=>{
            return (
                <i 
                    className='fas fa-map-market-alt fa-sm mt-[3px]'>
                    key={index}
                    style={{ backgroundColor:color}}
                </i>
            )
        })}
    </Typography>
    </CardFooter>
  </Card>
  )
}

export default ProductCard