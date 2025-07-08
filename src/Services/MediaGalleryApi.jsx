import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BaseUrl from "../Base_url/Base_url";

// Function to fetch data from the API
const gallery = async () => {
  const response = await axios.get(
    `${BaseUrl}/api/media-gallery/`,
    {
        headers: {
          "ngrok-skip-browser-warning": "true", // Add ngrok header
        },
      }
  );
  return response.data;
};

// Custom hook to use the query
export const Media_gallery = () => {
  return useQuery({
    queryKey: ["media-gallery"],
    queryFn: gallery,
  });
};
