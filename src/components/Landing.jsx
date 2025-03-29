import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='h-screen w-full bg-[#202124] gap-4    flex flex-col items-center justify-center overflow-hidden'>
       
        <div className = 'h-30 w-30 rounded-full bg-white overflow-hidden '>
              <img src="images/crop.png" alt="" />
        </div>
        
        <h1 id='font' className='text-3xl text-purple-500'> Welcome To Hiring Wallah<span className='text-5xl'>🦉</span> </h1>
          
          <div className='flex gap-4 mt-3' >
            <Link to="Interview">
            <button className='p-3 text-white rounded-xl bg-purple-500 cursor-pointer'> HR Interview</button>
            </Link>
            <Link to="coading">
            <button className='p-3 text-white rounded-xl bg-purple-500  cursor-pointer'>Competitive Test</button>
            </Link>
          </div>


    </div>
  )
}

export default Landing