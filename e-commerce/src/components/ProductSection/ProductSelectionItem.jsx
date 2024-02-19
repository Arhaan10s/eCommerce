import React from 'react'
import {
    
    Card,
    CardHeader,
    CardBody,
    
    Typography,
    
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';

import { singleProduct } from '../../features/slices/productSlice';
import {Link,useParams} from 'react-router-dom';

const ProductSelectionItem = ({id,img,name,text,size,price,color,totalPrice}) => {
    
    const dispatch = useDispatch();
    const defaultSize = size[0];
    const {type} = useParams();
    const defaultColor = color[0];

  return (
    <Link to={`/filteredProducts/${type}/`+id}>
      <Card className="w-96" onClick={()=>dispatch(singleProduct(id))}>
    <CardHeader floated={false} className="h-96">
      <img src={img} alt={name} />
    </CardHeader>
    <CardBody className="text-center">
      <Typography variant="h4" color="gray" className="mb-2">
        {name}
      </Typography>
      <Typography color="gray" className="font-medium" textGradient>
        {text}
      </Typography>
      <div className='flex justify-between items-center pt-4'>
      <Typography color="gray" className="font-medium" textGradient>
        Size Left : {defaultSize}
      </Typography>
      <Typography color="gray" className="font-medium" textGradient>
        Color  : <span className='px-2 rounded-full ml-2' 
                        style={{backgroundColor:defaultColor}}
                ></span>
      </Typography>
      </div>
    </CardBody>
    
  </Card></Link>
  )
}

export default ProductSelectionItem