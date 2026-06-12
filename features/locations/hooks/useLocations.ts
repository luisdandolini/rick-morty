import { useQuery } from "@tanstack/react-query";
import { locationService } from "../services/locationService";

export const useLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: locationService.getLocations,
  });
};
