import useSWR from "swr";
import { useSession } from "next-auth/react";

import { fetcher } from "./fetcher";
import { useUser } from "./useUser";
import { InferSchemaType } from "mongoose";
import {
  basePreferenceSchema,
  FullGroupSchema,
  GroupSchema,
  NotRentalSchema,
  SingleSchema,
} from "@/models/preference";

type TPreference = InferSchemaType<
  | typeof GroupSchema
  | typeof SingleSchema
  | typeof FullGroupSchema
  | typeof NotRentalSchema
> &
  InferSchemaType<typeof basePreferenceSchema>;

export const usePreference = () => {
  const { data: session } = useSession();

  const { data: user } = useUser(session?.user?.email as string);
  return useSWR<TPreference>(
    () => (user._id ? `/api/get_preferences?id=${user._id}` : null),
    fetcher
  );
};
