// src/Config/axioss.js
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";
import toast from "react-hot-toast";

const Axioss = axios.create({
  baseURL: BaseUrl,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

// Remove the logic for attaching the JWT
Axioss.interceptors.request.use(
  (config) => {
    // Optional: Add any custom configurations here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response interceptor
Axioss.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    switch (status) {
      case 400:
        // Bad Request: often validation errors
        {
          const msg =
            error.response.data?.message ||
            error.response.data?.errors ||
            "Bad request.";
          toast.error(`400: ${msg}`);
        }
        break;

      case 401:
        // Unauthorized: clear token and redirect to login
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        window.location.href = "/login";
        break;

      case 403:
        // Forbidden: user doesn’t have permission
        localStorage.removeItem("token");
        window.location.href = "/";
        toast.error("403: You do not have permission to perform this action.");
        break;

      case 404:
        // Not Found: resource doesn't exist
        toast.error("404: The requested resource was not found.");
        break;

      case 500:
        // Internal Server Error
        toast.error("500: Server error. Please try again later.");
        break;

      default:
        if (!error.response) {
          // Network error
          toast.error("Network error: please check your connection.");
        } else if (status >= 400 && status < 500) {
          // Other 4xx
          toast.error(
            `Error ${status}: ${
              error.response.data?.message || "Client error."
            }`
          );
        } else if (status >= 500) {
          // Other 5xx
          toast.error(`Error ${status}: Server error.`);
        }
        break;
    }

    return Promise.reject(error);
  }
);

export default Axioss;
