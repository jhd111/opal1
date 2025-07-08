import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const  Score_Practice = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/score-practice-mock-test/`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const Score_Practice_Mock_Test = () => {
  return useQuery({
    queryKey: ["Score Practice"],
    queryFn: Score_Practice,
  });
};
