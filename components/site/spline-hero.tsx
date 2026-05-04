"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

/**
 * The 3D Spline scene for the homepage hero, wrapped in the editorial card frame.
 * Sits where the static .mesh canvas used to live.
 */
export function SplineHero() {
  return (
    <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden border-0 rounded-[28px]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#bf5700" />
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-[11px] font-mono z-[2]">
        <span className="opacity-70">EXP · 40+</span>
        <span className="opacity-80" style={{ color: "#ffb380" }}>PRACTICES · 03</span>
        <span className="opacity-70">UPTIME · 100%</span>
      </div>
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/70 text-[11px] font-mono tracking-[0.22em] z-[2]">
        <span data-scramble>SYSTEMS · IN · PRODUCTION</span>
        <span>2026 · ALWAYS ONLINE</span>
      </div>
    </Card>
  );
}
