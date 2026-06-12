import { useQuery } from "@tanstack/react-query";
import { episodeService } from "../services/episodeService";

export const useEpisodes = () => {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: episodeService.getEpisodes,
  });
};
