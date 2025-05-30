import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className='mt-10 mb-10 max-w-2xl mx-auto px-6'>
      <div className='flex flex-col items-center'>
        <div className="relative">
          <h2 className='font-bold text-3xl mb-4 relative z-10 text-center'>Get in Touch</h2>
        
        </div>
        
        <p className='opacity-60 mb-8 text-[15px] relative z-10 text-center max-w-[500px]'>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className='group flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 w-fit relative z-10'>
          <a
            href='mailto:rishidha04@gmail.com'
            className='flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-bg opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-all w-full sm:w-auto'
            target='_blank'
            rel="noopener noreferrer"
          >
            <MdEmail size={20} />
            <span>Email</span>
          </a>
          <a
            href='https://www.linkedin.com/in/rishidha-addanki/'
            className='flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-bg opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-all w-full sm:w-auto'
            target='_blank'
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href='https://github.com/rishiiiidha'
            className='flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-bg opacity-60 group-hover:opacity-20 hover:!opacity-100 transition-all w-full sm:w-auto'
            target='_blank'
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch; 