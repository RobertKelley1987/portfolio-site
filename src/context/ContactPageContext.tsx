import React from "react";
import FormStatusContextProvider from "./FormStatusContext";
import ContactMethodContextProvider from "./ContactMethodContext";
import FormFieldsContextProvider from "./FormFieldsContext";
import type { ReactNode } from "react";

type ContactPageContextProviderProps = {
  children: ReactNode;
};

export default function ContactPageContextProvider({
  children,
}: ContactPageContextProviderProps) {
  return (
    <FormStatusContextProvider>
      <ContactMethodContextProvider>
        <FormFieldsContextProvider>{children}</FormFieldsContextProvider>
      </ContactMethodContextProvider>
    </FormStatusContextProvider>
  );
}
