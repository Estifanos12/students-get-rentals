import { Skeleton } from "@/components/ui/skeleton";

export const ProfileHeaderSkeleton = () => {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-[85px] h-[85px] rounded-full" />
      <div className="flex flex-col space-y-2">
        <Skeleton className="w-[200px] h-4" />
        <Skeleton className="w-[150px] h-4" />
      </div>
    </div>
  );
};
