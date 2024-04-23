import { BadgeSkeleton } from "@/components/skeleton/badge-skeleton";
import { BioSkeleton } from "@/components/skeleton/bio-skeleton";
import { PreferenceSkeleton } from "@/components/skeleton/preference-skeleton";
import { ProfileHeaderSkeleton } from "@/components/skeleton/profile-header-skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <section className="h-full flex-1">
      <div className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 lg:py-20 text-foreground">
        <ProfileHeaderSkeleton />

        <div className="">
          <BioSkeleton />
        </div>

        <Separator className="my-5" />

        <div className="">
          <PreferenceSkeleton />
        </div>

        <Separator className="my-5" />

        <div className="">
          <BadgeSkeleton />
        </div>
      </div>
    </section>
  );
}
