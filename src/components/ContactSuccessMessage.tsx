import React from "react";
import GatsbyButtonLink from "./common/GatsbyButtonLink";

function ContactSuccessMessage() {
  return (
    <div className="font-mono flex flex-col gap-4 items-center basis-full grow justify-center">
      <p className="text-center">Your message is on its way!</p>
      <GatsbyButtonLink to="/">Return Home</GatsbyButtonLink>
    </div>
  );
}

export default ContactSuccessMessage;
