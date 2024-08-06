import React from "react";
import SiteLayout from "../components/layouts/SiteLayout";
import Desk from "../components/art/Desk";
import GatsbyButtonLink from "../components/common/GatsbyButtonLink";
import GatsbyTextLink from "../components/common/GatsbyTextLink";

export default function Home() {
  return (
    <SiteLayout>
      <main className="text-black mx-auto max-w-2xl md:max-w-4xl w-full flex flex-col items-center justify-center grow shrink-0 basis-full">
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center gap-8 mb-16 mt-8 md:my-0 px-4 sm:px-8">
          <div className="flex flex-col gap-4">
            <span className="leading-loose font-mono text-black">
              Hey guys. My name's
            </span>
            <h1 className="font-bold font-sans text-5xl sm:text-6xl">
              Robert Kelley.
            </h1>
            <p className="leading-loose font-mono text-black">
              I'm a self-taught web developer specializing in JavaScript and
              front-end frameworks. Check out{" "}
              <GatsbyTextLink to="/projects" title="Projects page">
                my projects
              </GatsbyTextLink>{" "}
              and learn more about me using the links below.
            </p>
            <div className="flex gap-4">
              <GatsbyButtonLink to="/about" title="About page">
                about me
              </GatsbyButtonLink>
              <GatsbyButtonLink to="/projects" title="Projects page">
                my projects
              </GatsbyButtonLink>
            </div>
          </div>
          <Desk className="max-w-xs shrink-0" />
        </div>
      </main>
    </SiteLayout>
  );
}
