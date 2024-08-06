import React from "react";
import { useFormFields } from "../../../hooks/useFormFields";
import TextInput from "../TextInput";

function Subject() {
  const { formFields, setFieldError } = useFormFields();
  const { subject } = formFields;

  function handleChange() {
    setFieldError("subject", "");
  }

  return (
    <TextInput
      onChange={handleChange}
      error={subject.error}
      placeholder="Subject"
      name="subject"
      ref={subject.ref}
    />
  );
}

export default Subject;
