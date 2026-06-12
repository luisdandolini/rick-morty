import { api } from "@/shared/lib/api";
import { EpisodeResponse } from "../types";

export const episodeService = {
  getEpisodes: async (): Promise<EpisodeResponse> => {
    const { data } = await api.get<EpisodeResponse>("/episode");

    return data;
  },
};
