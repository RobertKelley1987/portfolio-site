import React, { createContext, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { ContactMethod } from "types";

type ContactMethodContextType = {
  selected: ContactMethod;
  setSelected: Dispatch<SetStateAction<ContactMethod>>;
};

export const ContactMethodContext =
  createContext<ContactMethodContextType>(null);

type ContactMethodContextProviderProps = {
  children: ReactNode;
};

export default function ContactMethodContextProvider({
  children,
}: ContactMethodContextProviderProps) {
  const [selected, setSelected] = useState<ContactMethod>("form");

  return (
    <ContactMethodContext.Provider value={{ selected, setSelected }}>
      {children}
    </ContactMethodContext.Provider>
  );
}
