import React from 'react'
import {useState,useEffect,useRef} from 'react';
import {GoChevronDown,GoChevronLeft} from "react-icons/go";

const Dropdown = ({options,label,value,onChange}) => {
    const divEl=useRef();
    const [isOpen,setIsOpen] = useState(false);

    const handleClick=()=>{
        setIsOpen(!isOpen);
    }
    
    useEffect(()=>{                 // to close dropdown after clicking outside
        const handler = (event) =>{
            if(!divEl.current)
            {
                return ;
            }
            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click',handler,true);

        return ()=>{
            document.removeEventListener('click',handler);
        }

    },[])

    const handleOptionClick=(item)=>{
        setIsOpen(false);
        onChange(item);
    }
    const renderedOptions=options?.map((item,index)=>{
        return( 
            <div 
                className="hover:bg-gray-300 rounded cursor-pointer p-1 font-inter" 
                key={index}
                onClick={()=>handleOptionClick(item)}>
                    {item}
            </div>
            )
    })
    return (
        <div ref={divEl} className="w-48 relative">
            <div className="flex font-inter justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full " onClick={handleClick}>
                {value} 
                {isOpen ? <GoChevronDown className="text-lg"/> : <GoChevronLeft className="text-lg"/>}            
            </div>
            {isOpen && <div className="absolute font-inter top-full  border rounded p-3 shadow bg-white w-full">{renderedOptions}</div>}
        </div>

    )
}

export default Dropdown