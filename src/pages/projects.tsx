import React from "react";
import SiteLayout from "../components/layouts/SiteLayout";
import ProjectContextProvider from "../context/ProjectContext";
import ProjectCarousel from "../components/carousels/project/ProjectCarousel";

function Projects() {
  return (
    <SiteLayout>
      <main className="text-black mx-auto max-w-2xl md:max-w-4xl w-full flex flex-col items-center justify-center grow shrink-0 basis-full">
        <ProjectContextProvider>
          <ProjectCarousel />
        </ProjectContextProvider>
      </main>
    </SiteLayout>
  );
}

export default Projects;
