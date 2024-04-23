import { Skeleton } from "@/components/ui/skeleton";

export const BadgeSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-[max(40%,200px)]  h-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-7">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-[125px] rounded-lg" />
        ))}
      </div>
    </div>
  );
};
