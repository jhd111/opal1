import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const ApeUni = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/vouchers-detail/?category_id=${5}`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const ApeUniVoucher = () => {
  return useQuery({
    queryKey: ["ApeUni Vouchers"],
    queryFn: ApeUni,
  });
};
