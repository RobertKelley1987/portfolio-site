import React from "react";
import Email from "./icons/Email";

function EmailAddress() {
  return (
    <a
      className="font-mono flex gap-2 hover:underline"
      href="mailto:robertkelley1987@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Email />
      robertkelley1987@gmail.com
    </a>
  );
}

export default EmailAddress;
