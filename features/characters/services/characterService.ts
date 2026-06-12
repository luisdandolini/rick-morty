import { api } from "@/shared/lib/api";
import { CharactersResponse } from "../types";

export const characterService = {
  getCharacters: async (): Promise<CharactersResponse> => {
    const { data } = await api.get<CharactersResponse>("/character");

    return data;
  },
};
