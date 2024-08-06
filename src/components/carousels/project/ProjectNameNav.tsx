import React from "react";
import { PROJECTS } from "../../../lib/constants/projects";
import ProjectNameButton from "./ProjectNameButton";

function ProjectNav() {
  return (
    <div className="font-mono flex gap-4">
      {PROJECTS.map((project) => (
        <ProjectNameButton key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectNav;
