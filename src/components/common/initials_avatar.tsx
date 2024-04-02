import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "../ui/avatar";

export const InitialsAvatar = ({
  name,
  className,
  fallbackClassName,
}: {
  name: string;
  className?: string;
  fallbackClassName?: string;
}) => {
  return (
    <Avatar className={cn("bg-primary", className)}>
      <AvatarFallback
        className={cn(
          "uppercase font-semibold text-white bg-transparent",
          fallbackClassName
        )}
      >
        {name ? name.slice(0, 2) : ""}
      </AvatarFallback>
    </Avatar>
  );
};
