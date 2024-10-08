import React from "react";
import { useFormFields } from "../../../hooks/useFormFields";
import { useUpdateHeight } from "../../../hooks/useUpdateHeight";

function Message() {
  const updateHeight = useUpdateHeight();
  const { formFields, setFieldError } = useFormFields();
  const { message } = formFields;

  function handleChange() {
    setFieldError("message", "");
  }

  const borderStyles = message.error ? "border-red" : "border-black";

  return (
    <textarea
      onChange={handleChange}
      ref={message.ref}
      onInput={updateHeight}
      className={`border ${borderStyles} placeholder:text-black focus:outline-none overflow-y-hidden p-3`}
      placeholder="Message..."
      name="message"
    ></textarea>
  );
}

export default Message;
