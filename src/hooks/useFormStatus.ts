import { useContext } from "react";
import { FormStatusContext } from "../context/FormStatusContext";

export function useFormStatus() {
  const formStatusContext = useContext(FormStatusContext);
  if (!formStatusContext) {
    throw new Error(
      "FormStatusContext must be accessed within FormStatusContext.Provider."
    );
  }

  return formStatusContext;
}
