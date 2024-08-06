import React from "react";
import { useProject } from "../../../hooks/useProject";
import type { Project } from "../../../types";

type ProjectNameButtonProps = {
  project: Project;
};

function ProjectNameButton({ project }: ProjectNameButtonProps) {
  const { selected, setSelected } = useProject();
  const isActive = selected === project.id;

  let styles = "focus:outline-none focus:underline hover:underline";
  if (isActive) styles += " underline";

  return (
    <button onClick={() => setSelected(project.id)} className={styles}>
      {project.repoName}
    </button>
  );
}

export default ProjectNameButton;
