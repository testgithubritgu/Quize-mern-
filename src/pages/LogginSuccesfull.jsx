import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
export default function LogginSuccesfull() {
    const name = localStorage.getItem("user")
   
    const showname = name? JSON.parse(name).name :null
  
  return (
    <>

      <div className='h-screen flex justify-center items-center flex-col'>

            <div className='w-fit h-fit rounded-full animate-bounce bg-gradient-to-r from-green-200 to-green-400'>
        <IoCheckmarkOutline className='text-[150px]   font-extrabold ' />
      </div>
        <h1 className='font-bold text-[20px] font-serif'>{showname &&  `Login Successfull!☺️`}</h1>
        <h1 className='font-bold text-[30px] font-serif'>{showname &&  `Hey! Devloper ${showname}!👏`}</h1>
        <p>Click the <span className='font-semibold'>go-to-home</span> button to return home</p>
      </div>
    </>
  )
}
