import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Loading() {
  return (
    <section className="h-full flex-1">
      <div className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 lg:py-20 text-foreground">
        <h1 className="text-lg md:text-xl font-bold mb-4">Your Results</h1>

        <div className="flex flex-col gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton className="w-full h-[134px] rounded-xl" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
