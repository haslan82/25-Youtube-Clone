import React from 'react'
import { PiUserCircleFill } from "react-icons/pi";


const Loader = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //! returndan sonrasını alt satıra indirince neden hata veriyor?
  return arr.map((i)=>(
    (
    
        <div key={i} className='p-4 shadow animate-pulse md:p-6'>
       <div className='flex items-center rounded bg-gray-700 h-48'/>
    <div className=' flex items-center mt-4 gap-3'>
    <PiUserCircleFill  className='text-5xl text-gray-700 '/>
    <div>
        <div  className='h-2.5 bg-gray-700 w-44 rounded-full'/>
        <div className='w-16 h-2 rounded-full bg-gray-700 my-3'/>
        <div className='flex gap-2'>
        <div className='w-16 h-2 rounded-full bg-gray-700 my-3'/>
        <div className='w-16 h-2 rounded-full bg-gray-700 my-3'/>
        </div>
    </div>
    </div>
        </div>
      )
  ))
}

export default Loader
