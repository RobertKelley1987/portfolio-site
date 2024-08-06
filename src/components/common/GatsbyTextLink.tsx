import React from "react";
import { Link } from "gatsby";
import type { GatsbyLinkProps } from "gatsby";

function GatsbyTextLink({
  to,
  title,
  activeStyle,
  children,
}: GatsbyLinkProps<HTMLAnchorElement>) {
  return (
    <Link
      to={to}
      title={title}
      activeStyle={activeStyle}
      className="hover:underline focus:outline-none focus:underline"
    >
      {children}
    </Link>
  );
}

export default GatsbyTextLink;
