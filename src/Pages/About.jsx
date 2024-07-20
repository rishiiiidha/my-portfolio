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
      <section class="mt-10 max-w-2xl mx-auto px-6">
        <h1 class="font-bold text-3xl mb-1">About</h1>
        <p class="opacity-50 mb-10">{aboutPageContent.subtitle}</p>
        <div class="mb-12 opacity-90">
          <div>{aboutPageContent.about.description}</div>
        </div>
        <div className="flex items-center mb-14">
          <a
            href="https://github.com/rishiiiidha/interviuzilla_ai/"
            class=" opacity-60  hover:opacity-100 transition-opacity"
            target="_blank"
          >
            <p class="opacity-80 hover:opacity-100">{aboutPageContent.now}</p>
          </a>
        </div>
        <div class="flex flex-col min-[410px]:flex-row">
          <div className="flex">
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              class="w-[150px] h-[120px] object-cover rounded-xl rotate-[10deg] mx-auto sm:ml-auto hover:rotate-0"
            />
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              class="w-[150px] h-[120px] object-cover rounded-xl -rotate-[20deg] mx-auto sm:ml-auto hover:rotate-0"
            />
          </div>
          <div className="flex">
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              class="w-[150px] h-[120px] object-cover rounded-xl rotate-[2deg] mx-auto sm:ml-auto hover:rotate-0"
            />
            <img
              src={aboutPageContent.about.image.url}
              alt={aboutPageContent.about.image.alt}
              width={150}
              height={250}
              class="w-[150px] h-[120px] object-cover rounded-xl -rotate-[10deg] mx-auto sm:ml-auto hover:rotate-0"
            />
          </div>
        </div>
      </section>
      <section class="my-16 mt-24 max-w-2xl mx-auto px-6 sm:flex sm:gap-16">
        <h2 class="mb-4 sm:mb-0 opacity-60">Work</h2>
        <div>
          <div class="mb-6 opacity-90">
            <div>{aboutPageContent.work.description}</div>
          </div>
          <div class="grid grid-cols-1 group">
            {aboutPageContent.work.items.map((item) => (
              <ResumeItem {...item} />
            ))}
          </div>
        </div>
      </section>
      <section class=" max-w-2xl mx-auto px-6 sm:flex sm:gap-16">
        <h2 class="mb-4 sm:mb-0 opacity-60">Connect</h2>
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
              class="  gap-2 opacity-60  hover:opacity-100 transition-opacity"
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
