import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const  Deals_data = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/our-deals/`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const Our_Deals = () => {
  return useQuery({
    queryKey: ["Our Deals"],
    queryFn: Deals_data,
  });
};
