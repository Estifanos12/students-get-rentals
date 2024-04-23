import { Skeleton } from "@/components/ui/skeleton";

export const PreferenceSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-[max(40%,200px)]  h-10" />
      <div className="flex flex-col space-y-3">
        <Skeleton className="w-[max(20%,100px)]  h-6" />
        <Skeleton className="w-[max(20%,100px)]  h-6" />
        <Skeleton className="w-[max(20%,100px)]  h-6" />
        <Skeleton className="w-[max(20%,100px)]  h-6" />
      </div>
    </div>
  );
};
