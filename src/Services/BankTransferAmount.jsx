import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url"; // Replace with your actual Base URL

// Function to send POST request
const postPaymentDetails = async ({payload, path}) => {
  
  const response = await axios.post(
    `${BaseUrl}/api/${path}`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "ngrok-skip-browser-warning": "true",
      },
    }
  );
  return response.data;
};


// Custom Hook for Mutation (React Query v5 syntax)
export const usePostPaymentDetails = () => {
  return useMutation({
    mutationFn: postPaymentDetails, // Explicitly specify mutationFn
  });
};

// Alternative: If you're still using React Query v4, use this instead:
// export const usePostPaymentDetails = () => {
//   return useMutation(postPaymentDetails);
// };