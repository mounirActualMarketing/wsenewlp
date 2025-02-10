import { cn } from "../../../lib/utils";
import React from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="relative h-full w-full">
        {/* Beams */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(29,78,216,0.15),transparent)]" />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-[radial-gradient(circle_800px_at_0%_200px,rgba(29,78,216,0.15),transparent)]" />
        
        {/* Noise texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  );
}; 