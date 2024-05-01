import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const InitialsAvatar = ({
  name,
  className,
  profile,
  fallbackClassName,
}: {
  name: string;
  className?: string;
  profile: string;
  fallbackClassName?: string;
}) => {
  return (
    <Avatar className={cn("bg-primary", className)}>
      <AvatarImage
        src={profile}
        alt={name}
        className="rounded-full object-cover w-full h-full"
      />

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
