import React from "react";
import type { AnchorHTMLAttributes } from "react";

function ButtonLink({
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
      className="font-mono lowercase border border-black p-3 hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none"
    >
      {children}
    </a>
  );
}

export default ButtonLink;
