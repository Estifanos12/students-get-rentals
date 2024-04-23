import { Separator } from "@/components/ui/separator";

import { Badge } from "./badge";
import { Bio } from "./bio";
import { Preference } from "./preference";
import { ProfileHeader } from "./profile_header";

export const Profile = ({ data }: any) => {
  return (
    <section className="h-full flex-1">
      <div className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 lg:py-20 text-foreground">
        <ProfileHeader data={data} />

        <div className="">
          <Bio bio={data.bio} />
        </div>

        <Separator className="my-5" />

        <div className="">
          <Preference id={data._id.toString()} />
        </div>

        <Separator className="my-5" />

        <div className="">
          <Badge results={data.results} />
        </div>
      </div>
    </section>
  );
};
