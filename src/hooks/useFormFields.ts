import { useContext } from "react";
import { FormFieldsContext } from "../context/FormFieldsContext";

export function useFormFields() {
  const formFieldsContext = useContext(FormFieldsContext);
  if (!formFieldsContext) {
    throw new Error(
      "FormFieldContext must be accessed within FormFieldContext.Provider."
    );
  }

  return formFieldsContext;
}
