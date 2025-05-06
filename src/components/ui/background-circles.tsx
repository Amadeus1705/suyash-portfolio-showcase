
import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundCirclesProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary" | "septenary" | "octonary";
  className?: string;
}

const COLOR_VARIANTS = {
  primary: {
    border: [
      "border-emerald-500/60",
      "border-cyan-400/50",
      "border-slate-600/30",
    ],
    gradient: "from-emerald-500/30",
  },
  secondary: {
    border: [
      "border-violet-500/60",
      "border-fuchsia-400/50",
      "border-slate-600/30",
    ],
    gradient: "from-violet-500/30",
  },
  tertiary: {
    border: [
      "border-orange-500/60",
      "border-yellow-400/50",
      "border-slate-600/30",
    ],
    gradient: "from-orange-500/30",
  },
  quaternary: {
    border: [
      "border-purple-500/60",
      "border-pink-400/50",
      "border-slate-600/30",
    ],
    gradient: "from-purple-500/30",
  },
  quinary: {
    border: [
      "border-red-500/60",
      "border-rose-400/50",
      "border-slate-600/30",
    ],
    gradient: "from-red-500/30",
  },
  senary: {
    border: [
      "border-blue-500/60",
      "border-sky-400/50",
      "border-slate-600/30",
    ],
    gradient: "from-blue-500/30",
  },
  septenary: {
    border: [
      "border-gray-500/60",
      "border-gray-400/50",
      "border-slate-600/30",
    ],
    gradient: "from-gray-500/30",
  },
  octonary: {
    border: [
      "border-theme-blue/60",
      "border-theme-light-blue/50",
      "border-slate-600/30",
    ],
    gradient: "from-theme-blue/30",
  },
} as const;

export function BackgroundCircles({
  variant = "octonary",
  className,
}: BackgroundCirclesProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center overflow-hidden -z-10",
        className
      )}
    >
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] md:w-[120%] h-[200%] md:h-[120%]",
        )}
      >
        {/* Circle 1 */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square rounded-full border-[8px] md:border-[12px] opacity-20 animate-[spin_100s_linear_infinite]",
            COLOR_VARIANTS[variant].border[0]
          )}
        />
        {/* Circle 2 */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full border-[8px] md:border-[12px] opacity-20 animate-[spin_120s_linear_infinite_reverse]",
            COLOR_VARIANTS[variant].border[1]
          )}
        />
        {/* Circle 3 */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border-[8px] md:border-[12px] opacity-10 animate-[spin_140s_linear_infinite]",
            COLOR_VARIANTS[variant].border[2]
          )}
        />
        {/* Gradient */}
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-full bg-gradient-to-b to-transparent opacity-30",
            COLOR_VARIANTS[variant].gradient
          )}
        />
      </div>
    </div>
  );
}
