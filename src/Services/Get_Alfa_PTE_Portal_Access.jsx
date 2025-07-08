import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const  Portal_Access = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/alpha-pte-portal-access/`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const Alfa_PTE_Portal_Access = () => {
  return useQuery({
    queryKey: ["Portal_Access"],
    queryFn: Portal_Access,
  });
};
