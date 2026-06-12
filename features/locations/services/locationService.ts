import { api } from "@/shared/lib/api";
import { LocationResponse } from "../types";

export const locationService = {
  getLocations: async (): Promise<LocationResponse> => {
    const { data } = await api.get<LocationResponse>("/location");

    return data;
  },
};
