import React, { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type ProjectContextType = {
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
};

export const ProjectContext = createContext<ProjectContextType>(null);

type ProjectContextProviderProps = {
  children: ReactNode;
};

export default function ProjectContextProvider({
  children,
}: ProjectContextProviderProps) {
  const [selected, setSelected] = useState<number>(1);

  return (
    <ProjectContext.Provider value={{ selected, setSelected }}>
      {children}
    </ProjectContext.Provider>
  );
}
