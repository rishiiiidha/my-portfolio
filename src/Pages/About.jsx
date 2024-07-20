import React from "react";
import Navbar from "../components/Navbar";
import { aboutPageContent } from "../constants/constant";
import { identity } from "../constants/constant";
import ResumeItem from "../components/ResumeItem";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="mt-10 max-w-2xl mx-auto px-6">
        <h1 className="font-bold text-3xl mb-1">About</h1>
        <p className="opacity-50 mb-10">{aboutPageContent.subtitle}</p>
        <div className="mb-12 opacity-90">
          <div>{aboutPageContent.about.description}</div>
        </div>
        <div className="flex items-center mb-14">
          <a
            href="https://github.com/rishiiiidha/interviuzilla_ai/"
            className=" opacity-60  hover:opacity-100 transition-opacity"
            target="_blank"
          >
            <p className="opacity-80 hover:opacity-100">
              {aboutPageContent.now}
            </p>
          </a>
        </div>
        <div className="flex flex-col min-[410px]:flex-row">
          <div className="flex">
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl rotate-[10deg] mx-auto sm:ml-auto hover:rotate-0"
            />
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl -rotate-[20deg] mx-auto sm:ml-auto hover:rotate-0"
            />
          </div>
          <div className="flex">
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl rotate-[2deg] mx-auto sm:ml-auto hover:rotate-0"
            />
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              className="w-[150px] h-[120px] object-cover rounded-xl -rotate-[10deg] mx-auto sm:ml-auto hover:rotate-0"
            />
          </div>
        </div>
      </section>
      <section className="my-16 mt-24 max-w-2xl mx-auto px-6 sm:flex sm:gap-16">
        <h2 className="mb-4 sm:mb-0 opacity-60">Work</h2>
        <div>
          <div className="mb-6 opacity-90">
            <div>{aboutPageContent.work.description}</div>
          </div>
          <div className="grid grid-cols-1 group">
            {aboutPageContent.work.items.map((item) => (
              <ResumeItem {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className=" max-w-2xl mx-auto px-6 sm:flex sm:gap-16">
        <h2 className="mb-4 sm:mb-0 opacity-60">Connect</h2>
        <div className="mb-10">
          <div className="mb-4 opacity-90">
            {aboutPageContent.connect.description}
          </div>

          <div className="flex gap-2">
            <a
              href={`mailto:${`rishidha04@gmail.com`}`}
              className="block  opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Email"
            >
              <MdEmail name="mdi:email" width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rishidha-addanki/"
              className="  gap-2 opacity-60  hover:opacity-100 transition-opacity"
              target="_blank"
            >
              <FaLinkedinIn width={25} height={25} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
