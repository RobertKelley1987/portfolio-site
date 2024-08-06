import React from "react";
import type { AnchorHTMLAttributes } from "react";

function TextLink({
  href,
  title,
  children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      title={title}
      rel="noopener noreferrer"
      target="_blank"
      className="hover:underline focus:outline-none focus:underline"
    >
      {children}
    </a>
  );
}

export default TextLink;
