import React, { createContext, useRef, useState } from "react";
import type { MutableRefObject, ReactNode } from "react";
import type { ContactForm } from "types";

type Field<T> = {
  ref: MutableRefObject<T>;
  error: string;
  value: string;
};

type FormFields = {
  name: Field<HTMLInputElement>;
  email: Field<HTMLInputElement>;
  subject: Field<HTMLInputElement>;
  message: Field<HTMLTextAreaElement>;
};

type FormFieldsContextType = {
  formFields: FormFields;
  setFieldError: (name: keyof FormFields, error: string) => void;
  setFieldValue: (name: keyof FormFields, error: string) => void;
  getFormValues: () => ContactForm;
  getFormErrors: () => string[];
  clearFormErrors: () => void;
};

export const FormFieldsContext = createContext<FormFieldsContextType>(null);

type FormFieldsContextProviderProps = {
  children: ReactNode;
};

export default function FormFieldsContextProvider({
  children,
}: FormFieldsContextProviderProps) {
  const emptyFormFields = {
    name: {
      ref: useRef<HTMLInputElement>(null),
      value: "",
      error: "",
    },
    email: {
      ref: useRef<HTMLInputElement>(null),
      value: "",
      error: "",
    },
    subject: {
      ref: useRef<HTMLInputElement>(null),
      value: "",
      error: "",
    },
    message: {
      ref: useRef<HTMLTextAreaElement>(null),
      value: "",
      error: "",
    },
  };

  const [formFields, setFormFields] = useState<FormFields>(emptyFormFields);

  function setFieldError(name: keyof FormFields, error: string) {
    const updated = { ...formFields };
    updated[name].error = error;
    setFormFields(updated);
  }

  function setFieldValue(name: keyof FormFields, value: string) {
    const updated = { ...formFields };
    updated[name].value = value;
    setFormFields(updated);
  }

  function getFormValues() {
    let values: ContactForm = { name: "", email: "", subject: "", message: "" };
    for (let key in formFields) {
      values[key] = formFields[key].ref.current.value;
    }
    return values;
  }

  function getFormErrors() {
    let errors: string[] = [];
    for (let prop in formFields) {
      const error = formFields[prop].error;
      if (error) errors.push(formFields[prop].error);
    }
    return errors;
  }

  function clearFormErrors() {
    const updated = { ...formFields };
    for (let prop in updated) {
      updated[prop].error = "";
    }
    setFormFields(updated);
  }

  return (
    <FormFieldsContext.Provider
      value={{
        formFields,
        setFieldError,
        setFieldValue,
        getFormValues,
        getFormErrors,
        clearFormErrors,
      }}
    >
      {children}
    </FormFieldsContext.Provider>
  );
}
