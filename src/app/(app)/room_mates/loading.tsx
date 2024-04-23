import { CardSkeleton } from "@/components/skeleton/card-skeleton";
import { SearchSkeleton } from "@/components/skeleton/search-skeleton";

export default function Loading() {
  return (
    <section className="w-full px-3 h-full">
      <div className="border border-x-0 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-3 py-5  flex flex-col-reverse items-start gap-3 md:flex-row  md:items-center justify-end">
          <SearchSkeleton />
        </div>
      </div>
      <div className="bg-light dark:bg-gray-900 min-h-[50vh] ">
        <div className="max-w-7xl mx-auto">
          <h1 className="max-w-7xl mx-auto py-5 text-foreground font-bold text-xl">
            Avaliable Students
          </h1>
          <div className="pt-5 pb-28 flex flex-col gap-3 overflow-hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
