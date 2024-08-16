import React from "react";
import { useFormStatus } from "../hooks/useFormStatus";
import ContactSuccessMessage from "./ContactSuccessMessage";
import ContactCarousel from "./carousels/contact/ContactCarousel";
import PaperAirplane from "./art/PaperAirplane";

function ContactPageContent() {
  const { success } = useFormStatus();

  if (success) {
    return <ContactSuccessMessage />;
  } else {
    return (
      <>
        <ContactCarousel />
        <PaperAirplane className="hidden md:block max-w-[275px] max-h-[275px] shrink-0" />
      </>
    );
  }
}

export default ContactPageContent;
