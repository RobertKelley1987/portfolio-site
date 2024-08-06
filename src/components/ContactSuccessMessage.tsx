import React from "react";
import GatsbyButtonLink from "./common/GatsbyButtonLink";

function ContactSuccessMessage() {
  return (
    <div className="font-mono mt-32 flex flex-col gap-4 items-center">
      <p className="text-center">Your message is on its way!</p>
      <GatsbyButtonLink to="/">Return Home</GatsbyButtonLink>
    </div>
  );
}

export default ContactSuccessMessage;
