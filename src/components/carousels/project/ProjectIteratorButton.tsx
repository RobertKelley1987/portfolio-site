import React from "react";
import { useProject } from "../../../hooks/useProject";
import type { ButtonHTMLAttributes } from "react";

type ProjectIteratorButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  targetId: number;
};

function ProjectIteratorButton({
  targetId,
  children,
  className,
}: ProjectIteratorButtonProps) {
  const { setSelected } = useProject();

  let styles =
    "font-mono hover:underline focus:underline focus:outline-none flex gap-2";
  if (className) styles += ` ${className}`;

  function handleClick() {
    // Set selected project to specified id.
    setSelected(targetId);
  }

  return (
    <button className={styles} onClick={handleClick}>
      {children}
    </button>
  );
}

export default ProjectIteratorButton;
