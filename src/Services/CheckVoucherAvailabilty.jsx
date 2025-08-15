import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Base_url from "../Base_url/Base_url";

// Function to send POST request
const VoucherAvailabilty = async ({ payload, path }) => {
  const token = localStorage.getItem("token");
  
  // Determine content type and headers based on payload type
  const isFormData = payload instanceof FormData;
  
  const headers = {
    "ngrok-skip-browser-warning": "true",
    Authorization: `Token ${token}`,
  };

  // Only add Content-Type for JSON, let browser set it for FormData
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  } else {
    headers["Content-Type"] = "multipart/form-data";
  }

  console.log("Sending payload:", payload);
  console.log("Is FormData:", isFormData);

  const response = await axios.post(`${Base_url}/api/${path}`, payload, {
    headers,
  });
  
  return response.data;
};

// Custom Hook for Mutation
export const CheckVoucherAvailabilty = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: VoucherAvailabilty,
    onSuccess: (_, variables) => {
      // Invalidate the relevant query
      queryClient.invalidateQueries({ queryKey: [variables.queryKey] });
    },
  });
};