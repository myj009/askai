"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export function LaunchingSoon() {
  const words = [
    {
      text: "Launching",
    },
    {
      text: "Soon...",
    },
  ];

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20 md:shadow-xl">
      <div className="z-10">
        <TypewriterEffectSmooth words={words} />
      </div>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
