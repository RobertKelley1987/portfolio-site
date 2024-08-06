import { useEffect } from "react";
import { useFormFields } from "./useFormFields";

// Hook to resize text area as user types.
export function useUpdateHeight() {
  const { message } = useFormFields().formFields;

  const updateHeight = () => {
    const ref = message.ref.current;

    if (ref) {
      ref.style.height = "inherit";
      ref.style.height = ref.scrollHeight + "px";
    }
  };

  // Set height of textarea when component mounts.
  // Experience was a little janky when I left this out.
  useEffect(() => {
    updateHeight();
  }, [message.ref]);

  return updateHeight;
}
