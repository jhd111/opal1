import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const Testing = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/testing-services/`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const TestingServicesData = () => {
  return useQuery({
    queryKey: ["Testing Services"],
    queryFn: Testing,
  });
};
