import { useFormFields } from "./useFormFields";
import { useFormStatus } from "./useFormStatus";
import { useValidateForm } from "./useValidateForm";
import { sendEmail } from "../api";
import { capitalize } from "../lib/strings";

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
      const formErrors = getFormErrors().join(", ");
      const editedForGrammar = capitalize(formErrors) + ".";
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
