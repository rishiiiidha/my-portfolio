import React from "react";
import Navbar from "../components/Navbar";
import { aboutPageContent } from "../constants/constant";
import { identity } from "../constants/constant";
import ResumeItem from "../components/ResumeItem";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section className="mt-10 max-w-2xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-3xl mb-1"
        >
          About
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="opacity-50 mb-10"
        >
          {aboutPageContent.subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 opacity-90 leading-relaxed"
        >
          <div>{aboutPageContent.about.description}</div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center mb-14"
        >
          <a
            href="https://github.com/rishiiiidha/my-portfolio"
            className="opacity-60 hover:opacity-100 transition-opacity"
            target="_blank"
          >
            <p className="opacity-80 hover:opacity-100">
              {aboutPageContent.now}
            </p>
          </a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row"
        >
          <div className="flex">
            <img
              src="/pic1.png"
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl rotate-[10deg] mx-auto sm:ml-auto hover:rotate-0 transition-transform duration-300"
            />
            <img
              src="/pic2.png"
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl -rotate-[20deg] mx-auto sm:ml-auto hover:rotate-0 transition-transform duration-300"
            />
          </div>
          <div className="flex">
            <img
              src="/pic4.png"
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl rotate-[2deg] mx-auto sm:ml-auto hover:rotate-0 transition-transform duration-300"
            />
            <img
              src="/pic3.png"
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl -rotate-[10deg] mx-auto sm:ml-auto hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </motion.div>
      </section>
      <section className="my-16 mt-24 max-w-2xl mx-auto px-6 sm:flex sm:gap-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-0 opacity-60"
        >
          Work
        </motion.h2>
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 opacity-90 leading-relaxed"
          >
            <div>{aboutPageContent.work.description}</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-8"
          >
            {aboutPageContent.work.items.map((item, index) => (
              <div key={index} className="group">
                <ResumeItem {...item} />
                {item.description && (
                  <div className="mt-4 pl-4 border-l-2 border-gray-800">
                    <ul className="space-y-2">
                      {item.description.map((desc, idx) => (
                        <li key={idx} className="text-sm opacity-70 leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>
                    {item.stack && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.stack.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 bg-gray-800/50 rounded-md opacity-60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
