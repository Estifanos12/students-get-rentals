import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Bio } from "./Bio";
import { InitialsAvatar } from "../common/initials_avatar";

import { Badge } from "./badge";

const Profile = ({ data }: any) => {
  return (
    <section className="h-full flex-1">
      <div className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 lg:py-20 text-foreground">
        <div className="flex items-center gap-5">
          <InitialsAvatar
            name={data.fullname}
            className="w-[100px] h-[100px] "
            fallbackClassName="text-lg md:text-2xl"
          />
          <div className="flex items-center justify-between  w-full">
            <div>
              <h1 className="text-lg lg:text-xl font-semibold">
                {data.fullname}
              </h1>
              <p>{data.email}</p>

              <Link
                href={"/profile/results"}
                className="text-primary flex items-center gap-1 mt-2 hover:underline"
                target="_blank"
              >
                <span>Show my results</span>
                <FaExternalLinkAlt className="inline" size={13} />
              </Link>
            </div>
          </div>
        </div>

        <div className="py-10">
          <Bio bio={data.bio} email={data.email} />
        </div>
        <div className="py-10">
          <Badge results={data.results} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
