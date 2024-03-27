import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

import { Tooltip } from "../common/tooltip";
import { Bio } from "./Bio";

export const Profile = ({ data }: any) => {
  const avatar = createAvatar(initials, {
    seed: data.fullname,
    size: 40,
    radius: 50,
    backgroundColor: ["#43a047"],
  });

  const svg = avatar.toDataUriSync();

  return (
    <section className="h-full flex-1">
      <div className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 lg:py-20 text-foreground">
        <div className="flex items-center gap-5">
          <Image src={svg} alt="Profile" width={120} height={120} />
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
      </div>
    </section>
  );
};
