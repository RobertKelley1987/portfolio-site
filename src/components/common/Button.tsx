import React from "react";
import type { ButtonHTMLAttributes } from "react";

function Button({ type, children }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className="font-mono border border-dotted border-black p-3 hover:bg-black hover:text-white hover:border-solid focus:bg-black focus:text-white focus:border-solid focus:outline-none"
    >
      {children}
    </button>
  );
}

export default Button;
