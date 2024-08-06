import React from "react";
import { useFormFields } from "../../../hooks/useFormFields";
import TextInput from "../TextInput";

function Email() {
  const { formFields, setFieldError } = useFormFields();
  const { email } = formFields;

  function handleChange() {
    setFieldError("email", "");
  }

  return (
    <TextInput
      onChange={handleChange}
      error={email.error}
      placeholder="Email"
      name="email"
      ref={email.ref}
    />
  );
}

export default Email;
