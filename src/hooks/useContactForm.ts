import { useFormFields } from "./useFormFields";
import { useFormStatus } from "./useFormStatus";
import { useValidateForm } from "./useValidateForm";
import { sendEmail } from "../api";
import { capitalize } from "../lib/strings";

// Helper to format errors with commas
function formatList(items: string[]) {
  // If only one item, capitalize and return.
  if (items.length === 1) return `${capitalize(items[0])}.`;

  // Otherwise, format list with commas.
  const tailIndex = items.length - 1;
  const withTailRemoved = items.slice(0, tailIndex);
  const withCommas = withTailRemoved.join(", ");
  return `${capitalize(withCommas)} and ${items[tailIndex]}.`;
}

// Hook to provide submit function for contact form/
export function useContactForm() {
  const { setError, setSuccess, setSubmitting } = useFormStatus();
  const { getFormValues, getFormErrors } = useFormFields();
  const validateForm = useValidateForm();

  async function submitForm() {
    const formData = getFormValues();

    // Validate data
    const { hasError } = validateForm(formData);
    if (hasError) {
      const formErrors = getFormErrors();
      const editedForGrammar = formatList(formErrors);
      setError(editedForGrammar);
      return;
    }

    // Send email
    setSubmitting(true);
    const { error } = await sendEmail(formData);
    if (!error) {
      setError("");
      setSuccess(true);
    } else {
      setError(error.message);
    }
    setSubmitting(false);
  }

  return submitForm;
}
