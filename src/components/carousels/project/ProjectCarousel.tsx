import React from "react";
import { useProject } from "../../../hooks/useProject";
import { PROJECTS } from "../../../lib/constants/projects";
import ProjectNameNav from "./ProjectNameNav";
import Project from "./Project";
import ProjectIteratorNav from "./ProjectIteratorNav";

function ProjectCarousel() {
  const { selected } = useProject();
  const project = PROJECTS.find((project) => project.id === selected);

  return (
    <div className="flex flex-col gap-6 mb-16 mt-12 px-4 sm:px-8">
      <ProjectNameNav />
      <div className="flex flex-col gap-8">
        <h1 className="font-bold font-sans text-5xl sm:text-6xl">
          My projects.
        </h1>
        {<Project project={project} />}
      </div>
      <ProjectIteratorNav />
    </div>
  );
}

export default ProjectCarousel;
