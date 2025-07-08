import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const Vouchers = async (category_id) => {
  const response = await axios.get(
    `${BaseUrl}/api/vouchers-detail/?category_id=${category_id}`,
    
    {
      headers: {
        "ngrok-skip-browser-warning": "true", // Add ngrok header
      },
    }
  );
  return response.data;
};


// Custom hook to use the query
export const VoucherDetails = (category_id) => {
  return useQuery({
    queryKey: ["VoucherDetails", category_id], // Include `category_id` in the query key
    queryFn: () => Vouchers(category_id), // Pass the ID to the fetch function
    enabled: !!category_id, // Ensures the query only runs when `category_id` is defined
  });
};
