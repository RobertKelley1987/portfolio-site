import React from "react";
import { techSkills } from "../lib/constants/tech-skills";
import GatsbyButtonLink from "../components/common/GatsbyButtonLink";
import GatsbyTextLink from "../components/common/GatsbyTextLink";
import Laptop from "../components/art/Laptop";
import Layout from "../components/layouts/SiteLayout";
import TechnologyList from "../components/lists/TechnologyList";
import ButtonLink from "../components/common/ButtonLink";

function About() {
  return (
    <Layout>
      <main className="text-black mx-auto max-w-2xl md:max-w-4xl flex justify-center items-center grow basis-full">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 mt-8 md:my-0 px-4 sm:px-8">
          <Laptop className="max-w-[275px] shrink-0" />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold font-sans text-5xl sm:text-6xl">
              About me.
            </h1>
            <p className="font-mono leading-loose">
              My name is Robert and I'm a web developer from central
              Massachusetts. I've been learning to build web apps while working
              full-time for the past 2 years. My passion is building projects
              with React and TypeScript. I hope that passion shows in my{" "}
              <GatsbyTextLink to="/projects" title="Projects page">
                recent work
              </GatsbyTextLink>
              .
            </p>
            <p className="font-mono flex flex-wrap leading-loose">
              <span className="font-bold whitespace-pre-wrap">
                Technical Skills:{" "}
              </span>
              <TechnologyList technologies={techSkills} />
            </p>
            <div className="flex gap-4">
              <ButtonLink href="/resume.pdf">get resume</ButtonLink>
              <GatsbyButtonLink to="/projects" title="Projects page">
                view projects
              </GatsbyButtonLink>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
