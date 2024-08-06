import { z } from "zod";
import { useFormFields } from "./useFormFields";
import type { ZodIssue } from "zod";
import type { ContactForm } from "types";

const FormData = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

// Helper to format error message from a Zod issue
function getMessageFromIssue(issue: ZodIssue) {
  const formField = issue.path[0].toString();
  const zodCode = issue.code.toString();
  let message: string;

  if (zodCode === "too_small") {
    message = `${formField} is required`;
  } else {
    message = issue.message.replace("String", formField);
  }

  return message.toLowerCase();
}

// Hook to provide form validation function that also updates state of form
// fields.
export function useValidateForm() {
  const { setFieldError, clearFormErrors } = useFormFields();

  function validateForm(form: ContactForm) {
    clearFormErrors();

    const { error } = FormData.safeParse(form);
    if (error) {
      error.issues.forEach((issue) => {
        const message = getMessageFromIssue(issue);
        const field = issue.path[0] as keyof ContactForm;
        setFieldError(field, message);
      });
    }

    return { hasError: !!error };
  }

  return validateForm;
}
