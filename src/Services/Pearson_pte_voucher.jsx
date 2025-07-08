import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const  Pearson_Pte = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/pearson-pte-voucher/`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const Pearson_Pte_voucher = () => {
  return useQuery({
    queryKey: ["Pearson Pte"],
    queryFn: Pearson_Pte,
  });
};
