import React from "react";
import SiteLayout from "../components/layouts/SiteLayout";
import GatsbyButtonLink from "../components/common/GatsbyButtonLink";
import Folders from "../components/art/Folders";

function NotFound() {
  return (
    <SiteLayout>
      <main className="font-mono text-black mx-auto max-w-2xl md:max-w-4xl w-full flex flex-col items-center justify-center grow shrink-0 basis-full">
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-8 mb-16 mt-4 md:my-0 px-4 sm:px-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold font-sans text-5xl sm:text-6xl">
              Page not found.
            </h1>
            <p>Sorry dude, I couldn't find that page.</p>
            <GatsbyButtonLink to="/">take me home.</GatsbyButtonLink>
          </div>
          <Folders className="max-w-xs shrink-0" />
        </div>
      </main>
    </SiteLayout>
  );
}

export default NotFound;
