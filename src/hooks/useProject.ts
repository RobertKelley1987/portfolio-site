import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export function useProject() {
  const projectContext = useContext(ProjectContext);
  if (!projectContext) {
    throw new Error(
      "ProjectContext must be accessed withins ProjectContext.Provider."
    );
  }

  return projectContext;
}
