import React from "react";
import { useFormStatus } from "../hooks/useFormStatus";
import ContactSuccessMessage from "./ContactSuccessMessage";
import ContactCarousel from "./carousels/contact/ContactCarousel";

function ContactPageContent() {
  const { success } = useFormStatus();
  return success ? <ContactSuccessMessage /> : <ContactCarousel />;
}

export default ContactPageContent;
