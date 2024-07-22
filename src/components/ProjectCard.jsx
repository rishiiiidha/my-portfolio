import React from 'react'
import { EvervaultCard, Icon } from './ui/evervault-card';

const ProjectCard = ({description ,link,title}) => {
  return (
    <div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xs mx-auto p-4 relative  ">
        <EvervaultCard text="hover" link={link} />
        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          {description}
        </h2>
        <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          {title}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard