import useSWR from "swr";

import { fetcher } from "./fetcher";

export const usePreference = (id: string) => {
  return useSWR(id ? `/api/get_preferences?id=${id}` : null, fetcher);
};
