import React from "react";
import ButtonLink from "../../common/ButtonLink";
import { Project } from "../../../types";

type ProjectLinksProps = {
  project: Project;
};

function ProjectLinks({ project }: ProjectLinksProps) {
  const { repos } = project;

  function renderRepoLink(text: string, url?: string) {
    return url ? (
      <ButtonLink href={url} title="Code repository">
        {text}
      </ButtonLink>
    ) : null;
  }
  return (
    <div className="flex gap-4">
      {renderRepoLink("Client", repos?.client)}
      {renderRepoLink("Server", repos?.server)}
    </div>
  );
}

export default ProjectLinks;
