import React, { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

type FormStatusContextType = {
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  success: boolean;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  submitting: boolean;
  setSubmitting: Dispatch<SetStateAction<boolean>>;
};

export const FormStatusContext = createContext<FormStatusContextType>(null);

type FormStatusContextProviderProps = {
  children: ReactNode;
};

export default function FormStatusContextProvider({
  children,
}: FormStatusContextProviderProps) {
  // Email form submission state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <FormStatusContext.Provider
      value={{
        error,
        setError,
        success,
        setSuccess,
        submitting,
        setSubmitting,
      }}
    >
      {children}
    </FormStatusContext.Provider>
  );
}
