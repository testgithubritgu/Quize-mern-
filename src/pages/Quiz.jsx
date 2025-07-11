import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Quiz() {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/")
    }

    
  return (
    <>
      <div className='fixed h-screen w-screen flex justify-center items-center bg-gradient-to-br from-slate-400 to-blue-500'>
           <button onClick={()=>logout()}  className='p-2 border rounded-lg px-3 text-[20px] cursor-pointer absolute top-4 active:scale-95 '>Logout</button>
            <div className='flex justify-center items-center flex-col '>
                <span  className='text-[70px]'>Hey! Lets play the game!</span>
            <br />
            <button className='text-[30px] bg-blue-600 text-white py-4 px-[10px] rounded-xl cursor-pointer active:scale-95'>Lets start😃</button>
            </div>

      </div>
    </>
  )
}
