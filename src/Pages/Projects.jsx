import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2  mb-24 mt-16">
      <a
        href="https://github.com/rishiiiidha/alien_invansion_hacks"
        target="_blank"
      >
        <ProjectCard
          description="Navigate, survive, and thrive with our humorous yet effective guide to outsmarting alien invaders on Planet Hackunia!"
          link="/vid1.mp4"
          title="Alien Invansion Hacks"
        />
      </a>
      <a
        href="https://github.com/rishiiiidha/users-team-application"
        target="_blank"
      >
        <ProjectCard
          description="This application empowers individuals to connect across domains, form teams, and collaborate effectively!"
          link="/vid3.mp4"
          title="Users Team Application"
        />
      </a>
      <a href="https://github.com/rishiiiidha/parallax-scroll" target="_blank">
        <ProjectCard
          description="This project is Parallax Scroll website using HTML and CSS, parallax scroll creates an illusion of depth by moving background elements at different speeds"
          link="/vid4.mp4"
          title="Parallax Scroll"
        />
      </a>
      <a href="https://github.com/rishiiiidha/weather-whiz" target="_blank">
        <ProjectCard
          description="This Weather API application allows users to retrieve the current temperature and forecast for a given location.!"
          link="/vid5.mp4"
          title="Weather Whizz"
        />
      </a>
    </div>
  );
};

export default Projects;
