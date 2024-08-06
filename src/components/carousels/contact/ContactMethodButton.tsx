import React from "react";
import { useContactMethod } from "../../../hooks/useContactMethod";
import type { ContactMethod } from "../../../types";

type ContactMethodButtonProps = {
  name: ContactMethod;
};

function ContactMethodButton({ name }: ContactMethodButtonProps) {
  const { selected, setSelected } = useContactMethod();
  const activeStyles = selected === name ? " underline" : "";

  return (
    <button
      onClick={() => setSelected(name)}
      className={`focus:outline-none focus:underline hover:underline${activeStyles}`}
    >
      {name}
    </button>
  );
}

export default ContactMethodButton;
