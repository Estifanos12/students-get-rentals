"use client";

import { formatTime } from "@/lib/formatTime";

export const Countdown = ({ countdown }) => {
  return (
    <div>
      <p className="text-foreground text-right text-lg">
        Time left: {formatTime(countdown as number)}
      </p>
    </div>
  );
};
