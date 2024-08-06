import React from "react";
import { Link } from "gatsby";
import GatsbyTextLink from "../../common/GatsbyTextLink";

function Header() {
  return (
    <header className="w-full bg-white flex justify-between p-4 sm:px-8 font-mono">
      <Link
        to="/"
        title="Home page"
        className="font-bold font-sans text-2xl hover:underline focus:outline-none focus:underline"
      >
        RK
      </Link>
      <nav className="flex items-center">
        <ul className="flex gap-6">
          <li className="list-none">
            <GatsbyTextLink
              to="/about"
              title="About page"
              activeStyle={{ textDecoration: "underline" }}
            >
              About
            </GatsbyTextLink>
          </li>
          <li className="list-none">
            <GatsbyTextLink
              to="/projects"
              title="Projects page"
              activeStyle={{ textDecoration: "underline" }}
            >
              Projects
            </GatsbyTextLink>
          </li>
          <li className="list-none">
            <GatsbyTextLink
              to="/contact"
              title="Contact page"
              activeStyle={{ textDecoration: "underline" }}
            >
              Contact
            </GatsbyTextLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
