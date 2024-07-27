import React from 'react'
import { LinkPreview } from '../components/ui/link-preview';

const Achievements = () => {
  return (
    <div className="flex justify-center items-start mt-24 flex-col px-4">
      <p className="text-neutral-600 dark:text-neutral-500 text-xl md:text-2xl max-w-3xl  text-left mb-10">
        Achieved a rating of{" "}
        <LinkPreview
          url="https://www.codechef.com/users/rishidhaa"
          className="font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          1602 and a global rank of 270
        </LinkPreview>{" "}
        in Codechef Starters 143 Division 3 (Rated) on July 17, 2024.
      </p>
      <p className="text-neutral-600 dark:text-neutral-500 text-xl md:text-2xl max-w-3xl  text-left mb-10">
        Winner of the{" "}
        <LinkPreview
          url="https://drive.google.com/file/d/11yyRXsojvrNnNXVXnJq3Opc5a4U4IuPV/view?usp=sharing"
          className="font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          imageSrc="/certif2.png"
          isStatic
        >
          SandCodes Hackathon
        </LinkPreview>{" "}
        organized by the Educathon team in 2024.
      </p>

      <p className="text-neutral-600 dark:text-neutral-500 text-xl md:text-2xl max-w-3xl  text-left mb-10">
        One of the{" "}
        <LinkPreview
          url="https://drive.google.com/file/d/1iULlzC0tqIjh05PX7MVjI13ZagTFX5_k/view?usp=sharing"
          className="font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          imageSrc="/certif1.png"
          isStatic
        >
          top 25 submissions in the DevStorm Hackathon
        </LinkPreview>{" "}
        at DevFest 3.0, organized by The Developers Society, BITS Goa, January
        2024.
      </p>
    </div>
  );
}

export default Achievements
