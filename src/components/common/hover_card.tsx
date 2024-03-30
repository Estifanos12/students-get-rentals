import {
  HoverCardContent,
  HoverCardTrigger,
  HoverCard as ShadcnHoverCard,
} from "../ui/hover-card";

type HoverCardProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const HoverCard = ({ trigger, children }: HoverCardProps) => {
  return (
    <ShadcnHoverCard>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent>{children}</HoverCardContent>
    </ShadcnHoverCard>
  );
};
