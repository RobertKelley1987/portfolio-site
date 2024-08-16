import React, { useEffect } from "react";
import { useFormStatus } from "../../../hooks/useFormStatus";
import { useFormFields } from "../../../hooks/useFormFields";
import { useContactForm } from "../../../hooks/useContactForm";
import Name from "./Name";
import Email from "./Email";
import Subject from "./Subject";
import Message from "./Message";
import Button from "../../common/Button";
import type { FormEvent } from "react";

function ContactForm() {
  const { error, submitting, setError } = useFormStatus();
  const { clearFormErrors } = useFormFields();
  const submitForm = useContactForm();

  // If user navigates away from form, clear errors.
  useEffect(() => {
    return () => {
      clearFormErrors();
      setError("");
    };
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    submitForm();
  }

  return (
    <div className="w-full md:max-w-[525px] flex flex-col gap-6">
      {error && <p className="font-mono text-red">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full font-mono"
      >
        <Name />
        <Email />
        <Subject />
        <Message />
        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
