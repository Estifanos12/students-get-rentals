import { cn } from "@/lib/utils";
import { Card, CardTitle, CardDescription } from "../ui/card";

export const OfferMobile = ({
  content,
  className,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 relative",
        className
      )}
    >
      {content.map((item) => (
        <Card
          key={item.title}
          className="flex cursor-pointer flex-grow h-full flex-col items-center justify-between gap-4 pb-3 bg-background dark:bg-gray-800 shadow-lg dark:shadow-none dark:hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#20b256,0_0_10px_#20b256,0_0_20px_#20b256] transition-shadow duration-300  border-transparent overflow-hidden"
        >
          <div className="space-y-2 px-5 mt-3">
            <CardTitle className="text-lg font-semibold">
              {item.title}
            </CardTitle>
            <CardDescription className="py-3 text-start text-md">
              {item.description}
            </CardDescription>
          </div>
        </Card>
      ))}
    </div>
  );
};
