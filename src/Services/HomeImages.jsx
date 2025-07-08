import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const fetchHomeTopImages = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/home-top-images/`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const useHomeTopImages = () => {
  return useQuery({
    queryKey: ["homeTopImages"],
    queryFn: fetchHomeTopImages,
  });
};
