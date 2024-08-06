import React from "react";
import type { AnchorHTMLAttributes } from "react";

function SocialLink({
  href,
  children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="font-mono flex gap-2 border-b border-white hover:border-black focus:border-black focus:outline-none mt-1px"
    >
      {children}
    </a>
  );
}

export default SocialLink;
