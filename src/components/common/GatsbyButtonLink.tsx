import React from "react";
import { Link } from "gatsby";
import type { GatsbyLinkProps } from "gatsby";

function GatsbyButtonLink({
  to,
  title,
  children,
}: GatsbyLinkProps<HTMLAnchorElement>) {
  return (
    <Link
      to={to}
      title={title}
      className="font-mono lowercase w-max border border-black p-3 hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none"
    >
      {children}
    </Link>
  );
}

export default GatsbyButtonLink;
