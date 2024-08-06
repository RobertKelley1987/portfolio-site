import React from "react";
import { useProject } from "../../../hooks/useProject";
import { PROJECTS } from "../../../lib/constants/projects";
import ProjectIteratorButton from "./ProjectIteratorButton";

function ProjectIteratorNav() {
  const { selected } = useProject();
  const prevExists = PROJECTS.find((project) => project.id === selected - 1);
  const nextExists = PROJECTS.find((project) => project.id === selected + 1);

  const prevButton = (
    <ProjectIteratorButton
      targetId={selected - 1}
      className="self-start"
    >{`<< prev`}</ProjectIteratorButton>
  );

  const nextButton = (
    <ProjectIteratorButton
      targetId={selected + 1}
      className="self-end"
    >{`next >>`}</ProjectIteratorButton>
  );

  return (
    <>
      {prevExists && prevButton}
      {nextExists && nextButton}
    </>
  );
}

export default ProjectIteratorNav;
