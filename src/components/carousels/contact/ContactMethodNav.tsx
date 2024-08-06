import React from "react";
import { CONTACT_METHODS } from "../../../lib/constants/contact-methods";
import ContactOptionButton from "./ContactMethodButton";

function ContactMethodNav() {
  return (
    <div className="font-mono flex gap-4">
      {CONTACT_METHODS.map((option) => (
        <ContactOptionButton key={option} name={option} />
      ))}
    </div>
  );
}

export default ContactMethodNav;
