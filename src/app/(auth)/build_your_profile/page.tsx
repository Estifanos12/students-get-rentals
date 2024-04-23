import { BuildProfile } from "@/components/auth/build_profile/build_profile";

export default function ProfileBuilding() {
  return (
    <div className="grid h-full md:grid-cols-[360px_1fr]">
      <BuildProfile />
    </div>
  );
}
