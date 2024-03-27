"use client";

import { formatTime } from "@/lib/formatTime";
import { useCountdown } from "@/hooks/useCountdown";
import { Button } from "../ui/button";

export const Countdown = () => {
  const { countdown } = useCountdown(3600);

  return (
    <div>
      <p className="text-foreground text-right text-lg">
        Time left: {formatTime(countdown as number)}
      </p>
    </div>
  );
};
