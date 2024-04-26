import { Bio } from "./Bio";
import { Badge } from "./badge";
import { ChangePassword } from "./change_password";
import { Preferences } from "./preference";
import { ProfileHeader } from "./profile_header";

import { Separator } from "../ui/separator";

const Profile = ({ data }: any) => {
  return (
    <section className="h-full flex-1">
      <div className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 lg:py-20 text-foreground">
        <ProfileHeader data={data} />

        <div className="">
          <Bio bio={data.bio} email={data.email} />
        </div>

        <Separator className="my-5" />

        <div className="">
          <Preferences id={data._id} />
        </div>

        <Separator className="my-5" />

        <div className="">
          <ChangePassword id={data._id} />
        </div>

        <Separator className="my-5" />

        <div className="">
          <Badge results={data.results} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
