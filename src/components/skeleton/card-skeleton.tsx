import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "../ui/card";

export const CardSkeleton = () => {
  return (
    <Card className="flex  min-h-56 w-full md:w-[90%] dark:bg-gray-800">
      <Skeleton className="flex-[3] md:flex-[1] rounded-l-lg" />
      <div className="flex-[4]">
        <div className="p-3 space-y-3">
          <Skeleton className="w-[60%] h-7" />
          <Skeleton className="w-[30%] h-5" />
          <Skeleton className="w-[30%] h-5" />
          <Skeleton className="w-[30%] h-5" />

          <div className="py-2 flex flex-wrap items-center gap-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="outline outline-1 outline-light  rounded-xl"
              >
                <Skeleton className="w-20 h-10 " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
