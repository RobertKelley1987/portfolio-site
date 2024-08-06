import React from "react";
import TechnologyList from "../../lists/TechnologyList";
import ProjectLinks from "./ProjectLinks";
import TextLink from "../../common/TextLink";
import type { Project as ProjectType } from "../../../types";

type ProjectProps = {
  project: ProjectType;
};

function Project({ project }: ProjectProps) {
  const { id, title, desc, img, demoURL, technologies } = project;
  const order = id % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className="font-mono flex flex-col gap-4">
      <h2 className="font-bold">
        {`${id}. `}
        <TextLink href={demoURL} title="Live demo">
          {title}
        </TextLink>
      </h2>
      <div className={`flex flex-col ${order} gap-8`}>
        <div className="basis-[65%] flex flex-col gap-4">
          <a
            href={demoURL}
            rel="noopener noreferrer"
            target="_blank"
            className="group focus:outline-none"
            title="Live demo"
          >
            <img
              src={`/imgs/${img.file}`}
              alt={img.alt}
              className="w-full h-auto border border-dotted border-black group-focus:border-solid group-hover:border-solid"
            />
          </a>
          <div className="flex flex-col gap-2">
            <h3 className="font-mono font-bold">Code Repositories: </h3>
            <ProjectLinks project={project} />
          </div>
        </div>
        <div className="flex flex-col gap-4 basis-[35%]">
          <p>{desc}</p>
          <div className="flex flex-wrap">
            <span className="font-bold whitespace-pre-wrap">Built with: </span>
            <TechnologyList technologies={technologies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
