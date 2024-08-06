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
        const addComma = i !== technologies.length - 1;

        return (
          <TechnologyListItem
            key={technology.name}
            addComma={addComma}
            technology={technology}
          />
        );
      })}
    </>
  );
}

export default TechnologyList;
