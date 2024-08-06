import { useContext } from "react";
import { ContactMethodContext } from "../context/ContactMethodContext";

export function useContactMethod() {
  const contactMethodContext = useContext(ContactMethodContext);
  if (!contactMethodContext) {
    throw new Error(
      "ContactMethodContext must be accessed withins ContactMethodContext.Provider."
    );
  }

  return contactMethodContext;
}
