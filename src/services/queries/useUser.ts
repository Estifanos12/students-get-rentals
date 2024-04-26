import useSWR from "swr";

import { fetcher } from "./fetcher";

export const useUser = (email: string) => {
  return useSWR(email ? `/api/get-student?email=${email}` : null, fetcher, {
    revalidateOnFocus: false,
  });
};
