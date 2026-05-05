"use client";

import { SparklesCore } from "@/components/ui/sparkles";

/**
 * Light-theme sparkle field for page heroes.
 * Sits as an absolute layer behind the hero copy. Particles are charcoal so
 * they read on the off-white paper bg; a burnt-orange / violet gradient
 * underline echoes the demo's neon strip.
 */
export function SparkleField({
  id,
  className = "",
}: {
  id?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
    >
      <div className="relative w-full h-full">
        <SparklesCore
          id={id}
          background="transparent"
          minSize={0.4}
          maxSize={1.1}
          particleDensity={70}
          particleColor="#1a1a1c"
          speed={1.2}
          className="w-full h-full"
        />
        {/* Soft mask so particles fade at the bottom and don't fight with body */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, transparent 55%, rgba(250,250,247,0.7) 80%, var(--bg) 100%)",
          }}
        />
      </div>
    </div>
  );
}

/**
 * The horizontal accent strip from the demo, repurposed in burnt orange + violet.
 * Drop directly under a hero headline for the gradient underline + sparkle effect.
 */
export function SparkleAccentLine({ id }: { id?: string }) {
  return (
    <div className="relative w-full max-w-[40rem] h-24 mx-auto" aria-hidden="true">
      {/* Gradient lines */}
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#bf5700] to-transparent h-[2px] w-3/4 blur-sm" />
      <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#bf5700] to-transparent h-px w-3/4" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-violet-500 to-transparent h-px w-1/4" />
      {/* Particle stripe */}
      <SparklesCore
        id={id}
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={900}
        particleColor="#1a1a1c"
        className="w-full h-full"
      />
      {/* Radial mask so the strip fades at the edges */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "var(--bg)",
          WebkitMaskImage:
            "radial-gradient(350px 200px at top, transparent 20%, white)",
          maskImage:
            "radial-gradient(350px 200px at top, transparent 20%, white)",
        }}
      />
    </div>
  );
}
