import React from "react";
import TextLink from "../common/TextLink";
import { Technology } from "types";

type TechnologyListItemProps = {
  technology: Technology;
  isLast: boolean;
  isNextToLast: boolean;
};

function TechnologyListItem({
  technology,
  isLast,
  isNextToLast,
}: TechnologyListItemProps) {
  return (
    <span className="text-nowrap whitespace-pre-wrap">
      {isLast && ` and `}
      <TextLink href={technology.url} title={technology.title}>
        {technology.name}
      </TextLink>
      {!isLast ? !isNextToLast && ", " : "."}
    </span>
  );
}

export default TechnologyListItem;
