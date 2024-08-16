import React from "react";
import type { Technology } from "types";
import TechnologyListItem from "./TechnologyListItem";

type TechnologyListProps = {
  technologies: Technology[];
};

function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <>
      {technologies.map((technology, i) => {
        const isLast = i === technologies.length - 1;
        const isNextToLast = i === technologies.length - 2;

        return (
          <TechnologyListItem
            key={technology.name}
            technology={technology}
            isLast={isLast}
            isNextToLast={isNextToLast}
          />
        );
      })}
    </>
  );
}

export default TechnologyList;
