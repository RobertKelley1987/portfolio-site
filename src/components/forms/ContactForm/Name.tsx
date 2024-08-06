import React from "react";
import { useFormFields } from "../../../hooks/useFormFields";
import TextInput from "../TextInput";

function Name() {
  const { formFields, setFieldError } = useFormFields();
  const { name } = formFields;

  function handleChange() {
    setFieldError("name", "");
  }

  return (
    <TextInput
      onChange={handleChange}
      error={name.error}
      placeholder="Name"
      name="name"
      ref={name.ref}
    />
  );
}

export default Name;
