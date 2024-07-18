import React from 'react'
import AvailableForWork from '../AvailableForWork'
import Vector from '../../assets/Vector.png'
import Plus from '../../assets/Plus.png'
import Profile from '../../assets/Profile.png'
import Copy from '../../assets/Copy.png'

const AboutMe = () => {
  return (
    <div>
      <section className="flex rounded-2xl border-2 bg-[#1B1B1B] border-neutral-800 w-full h-full p-8">
        <div className='flex flex-col justify-between md:max-h-[300px] gap-4'>
         <div className='flex flex-col h-full'>
       <div className='flex justify-between p-4'>
       <h6 className='text-sm font-light m-0 text-gray-500'>welcome</h6>
       <AvailableForWork/>
       </div>
        <div className='flex'>
       <div className='flex flex-col justify-between p-4'>
       <p className='m-0 font-light '>
           Hi,I'm  
           <b className='font-bold'> Rishidha</b> , a junior year undergrad who loves tackling challenges and creating cool stuff!
           </p>
           <div className='flex gap-4'>
           <button className="flex flex-col justify-center px-2 text-sm font-light text-white bg-red-600 rounded-lg">
      <div className="flex items-center justify-center">
        <span className="my-auto border-r-2 border-gray-900 py-2 pr-2">Hire me</span>
        <img src={Plus} className="shrink-0 w-3 ml-2 aspect-square" alt="" />
      </div>
    </button>
    <button className="flex flex-col justify-center text-sm font-light px-2 text-white  bg-[#161616] rounded-lg">
        <div className="flex items-center justify-center">
          <span className="my-auto py-2 pr-2">Copy Email</span>
          <img  src={Copy} className="shrink-0 w-4 ml-2 aspect-square" alt="" />
      </div>
    </button>
           </div>
       </div>
           <img className='w-64 rounded-full' src={Profile} alt="" />
        </div>
         </div>
        </div>
    </section>
    </div>
  )
}

export default AboutMe