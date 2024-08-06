import React, { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

function TextInput(props: TextInputProps, ref) {
  const { onChange, placeholder, name, error } = props;
  const borderStyles = error
    ? "border-red border-solid"
    : "border-black border-dotted";

  return (
    <input
      onChange={onChange}
      ref={ref}
      className={`border ${borderStyles} placeholder:text-black focus:border-solid focus:outline-none p-3`}
      placeholder={placeholder}
      name={name}
      type="text"
    />
  );
}

export default forwardRef(TextInput);
