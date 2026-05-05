"use client";

import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

/**
 * Hero canvas — 3D Spline scene tuned toward an Optimus-style humanoid aesthetic
 * (Tesla white + chrome + dark visor) via overlays and tinting. To swap to a
 * different 3D model entirely, change SCENE_URL below to any
 * https://prod.spline.design/<id>/scene.splinecode published from Spline.
 */
const SCENE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function SplineHero() {
  return (
    <Card className="w-full h-full bg-[#0c0c0e] relative overflow-hidden border-0 rounded-[28px]">
      {/* Cold-white spotlight to push the metal toward Optimus chrome */}
      <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="#ffffff" />

      {/* Subtle radial tint — Optimus white-on-dark gradient */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 30%, rgba(232,236,242,0.12), transparent 60%), radial-gradient(40% 60% at 50% 100%, rgba(191,87,0,0.10), transparent 70%)",
        }}
      />

      {/* The actual scene — desaturated + cool-tinted via filter */}
      <div
        className="absolute inset-0"
        style={{ filter: "saturate(70%) brightness(108%) contrast(110%) hue-rotate(-6deg)" }}
      >
        <SplineScene scene={SCENE_URL} className="w-full h-full" />
      </div>

      {/* HUD-style overlay top */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/80 text-[10.5px] font-mono tracking-[0.22em] z-[2]">
        <span data-scramble>OPTIMUS · UNIT 03</span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "#bf5700", boxShadow: "0 0 8px #bf5700" }}
          />
          ONLINE
        </span>
      </div>

      {/* Targeting reticles — corner crosshairs */}
      <Reticle className="top-14 left-6" />
      <Reticle className="top-14 right-6" />
      <Reticle className="bottom-14 left-6" />
      <Reticle className="bottom-14 right-6" />

      {/* Telemetry strip bottom */}
      <div className="absolute bottom-5 left-6 right-6 z-[2]">
        <div className="flex items-center justify-between text-white/85 text-[10.5px] font-mono tracking-[0.18em] mb-1.5">
          <span>EXP · 40+</span>
          <span style={{ color: "#ffb380" }}>PRACTICES · 03</span>
          <span>UPTIME · 100%</span>
        </div>
        <div className="h-px bg-white/15 relative overflow-hidden">
          <span
            className="absolute inset-y-0 left-0 w-1/3 animate-[hudbar_3.5s_ease-in-out_infinite]"
            style={{ background: "linear-gradient(90deg, transparent, #bf5700, transparent)" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes hudbar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </Card>
  );
}

function Reticle({ className = "" }: { className?: string }) {
  return (
    <span className={`absolute w-3 h-3 z-[2] pointer-events-none ${className}`} aria-hidden>
      <span className="absolute inset-x-0 top-0 h-px bg-white/35" />
      <span className="absolute inset-y-0 left-0 w-px bg-white/35" />
    </span>
  );
}
