import React from "react";
import { useContactMethod } from "../../../hooks/useContactMethod";
import ContactForm from "../../forms/ContactForm";
import EmailAddress from "../../EmailAddress";
import ContactMethodNav from "./ContactMethodNav";

const VIEWS = {
  form: <ContactForm />,
  email: <EmailAddress />,
};

function ContactCarousel() {
  const { selected } = useContactMethod();
  let styles = "flex flex-col gap-6";
  if (selected === "form") styles += " basis-full";

  return (
    <div className={styles}>
      <ContactMethodNav />
      <h1 className="font-bold font-sans text-5xl sm:text-6xl">Contact me.</h1>
      {VIEWS[selected]}
    </div>
  );
}

export default ContactCarousel;
