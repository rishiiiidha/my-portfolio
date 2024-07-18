import React from 'react'
import Vector from '../../assets/Vector.png'
const Navbar = () => {
  return (
    <div className="flex ">
    <div className="w-[120px] relative border-2 border-[#262626] bg-[#1B1B1B]  rounded-full ">
      <img className='text-center absolute top-2.5 left-3 ' src={Vector} alt=""/>
    </div>
      <div className="flex bg-[#1B1B1B] w-screen text-white h-[64px] justify-between items-center rounded-full px-6 border-2 border-[#262626]">
      <div className="uppercase font-bold text-[#F35034]">
        About
      </div> 
      <div className="uppercase">
       Resume
      </div>
      <div className="uppercase">
       Contact
      </div>
    </div>
  </div>
  )
}
export default Navbar