import { Skeleton } from "@/components/ui/skeleton";

export const BioSkeleton = () => {
  return (
    <>
      <Skeleton className="w-[200px]  h-10 mb-5" />
      <Skeleton className="w-full h-[400px] rounded-md" />
    </>
  );
};
