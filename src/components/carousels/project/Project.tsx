import React from "react";
import TechnologyList from "../../lists/TechnologyList";
import ProjectLinks from "./ProjectLinks";
import TextLink from "../../common/TextLink";
import ProjectScreenshot from "./ProjectScreenshot";
import type { Project as ProjectType } from "../../../types";

type ProjectProps = {
  project: ProjectType;
};

function Project({ project }: ProjectProps) {
  const { title, desc, imgs, demoURL, technologies } = project;

  return (
    <div className="font-mono flex flex-col gap-4">
      <div className={`flex flex-col md:flex-row-reverse gap-8`}>
        <div className="basis-[60%] flex flex-col gap-4 items-start">
          <ProjectScreenshot key={imgs[0].src} img={imgs[0]} />
          {imgs[1] && <ProjectScreenshot key={imgs[1].src} img={imgs[1]} />}
        </div>
        <div className="basis-[40%] flex flex-col shrink gap-4">
          <h2>
            <span className="font-bold">Title: </span>
            <TextLink href={demoURL} title="Live demo">
              {title}
            </TextLink>
          </h2>
          <p>
            <span className="font-bold">Live Demo: </span>
            <TextLink href={demoURL} title="Live demo">
              {demoURL}
            </TextLink>
          </p>
          <p>
            <span className="font-bold">Description: </span>
            {desc}
          </p>
          <div className="flex flex-wrap">
            <span className="font-bold whitespace-pre-wrap">Built with: </span>
            <TechnologyList technologies={technologies} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-mono font-bold">Code Repositories: </h3>
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
