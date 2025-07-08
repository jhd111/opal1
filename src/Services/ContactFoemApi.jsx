import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url"; // Replace with your actual Base URL

// Function to send POST request
const Contact = async (payload) => {
  const response = await axios.post(
    `${BaseUrl}/api/contact-us/`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type
        "ngrok-skip-browser-warning": "true", // Optional for ngrok
      },
    }
  );
  return response.data;
};

// Custom Hook for Mutation (React Query v5 syntax)
export const ContactFormApi = () => {
  return useMutation({
    mutationFn: Contact, // Explicitly specify mutationFn
  });
};

// Alternative: If you're still using React Query v4, use this instead:
// export const usePostPaymentDetails = () => {
//   return useMutation(postPaymentDetails);
// };