import React from "react";
import TextLink from "../common/TextLink";
import { Technology } from "types";

type TechnologyListItemProps = {
  technology: Technology;
  addComma: boolean;
};

function TechnologyListItem({ technology, addComma }: TechnologyListItemProps) {
  return (
    <span className="text-nowrap whitespace-pre-wrap">
      <TextLink href={technology.url} title={technology.title}>
        {technology.name}
      </TextLink>
      {addComma && ", "}
    </span>
  );
}

export default TechnologyListItem;
