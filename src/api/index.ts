import axios from "axios";
import type { ContactForm } from "../types";
import type { AxiosError } from "axios";

const api = axios.create({ baseURL: "https://server.robertkelley.xyz" });

export async function sendEmail(formData: ContactForm) {
  try {
    const { data } = await api.post("/contact", { formData });
    return data;
  } catch (err) {
    let error = {
      status: 500,
      message: "Server error. Please try again later.",
    };

    if (axios.isAxiosError(err)) {
      err = err as AxiosError;
      if (err.response) {
        const { status, data } = err.response;
        if (status) error.status = status;
        if (data?.message) error.message = data.message;
      }
    }

    return { error };
  }
}
