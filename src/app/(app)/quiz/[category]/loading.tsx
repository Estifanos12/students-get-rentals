import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function Loading() {
  return (
    <section className="px-3 lg:max-w-7xl mx-auto space-y-8 py-12 text-center lg:mb-20 overflow-hidden">
      <Skeleton className="w-[200px] h-10 ml-auto" />
      <div className="flex flex-col lg:flex-row gap-7 items-center lg:items-stretch">
        <div className="flex-[5] flex flex-col gap-10">
          <div className="flex flex-col">
            <Skeleton className="w-[max(300px,50%)] self-center h-10 mb-10 rounded-lg" />
            <div className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton className="w-full h-10 rounded-xl" key={i} />
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="w-[200px] h-10" />
            <Skeleton className="w-[200px] h-10" />
          </div>
        </div>

        <div className="flex-[1]  flex flex-col outline outline-1 gap-5 outline-transparent lg:outline-slate-300 lg:p-5 lg:rounded-lg">
          <h2 className="text-foreground font-bold my-2">Questions</h2>

          <div className="flex flex-wrap gap-2 h-max  ">
            {Array.from({ length: 10 }).map((answer, index) => (
              <Skeleton
                className="w-[40px] aspect-square rounded-xl"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
