import React from "react";
import SocialLink from "./SocialLink";
import Email from "../../icons/Email";
import LinkedIn from "../../icons/LinkedIn";
import GitHub from "../../icons/GitHub";

function Socials() {
  return (
    <div className="flex gap-3 h-8 items-center">
      <SocialLink href="mailto:robertkelley1987@gmail.com">
        <Email />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/robert-kelley-38182a128/">
        <LinkedIn />
      </SocialLink>
      <SocialLink href="https://github.com/RobertKelley1987">
        <GitHub />
      </SocialLink>
    </div>
  );
}

export default Socials;
