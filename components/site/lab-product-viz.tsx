"use client";

/**
 * Themed visuals for the two ProxiantLabs product cards on /labs.
 *
 * - AlphaViz   → ProxiAlpha. Orange / stocks aesthetic: candlestick chart,
 *   moving price line, scrolling ticker tape across the top, big serif α
 *   floating at center, telemetry strip at bottom (Sharpe / PnL / Eval).
 * - TauViz     → ProxiTrades. Green Matrix-style aesthetic: vertical rain
 *   of katakana glyphs in green, automated-bot status list, big serif τ
 *   floating at center with phosphor glow, telemetry strip at bottom
 *   (Bots / Latency / Audit).
 */

import React, { useMemo } from "react";

/* ─────────── Shared HUD chrome ─────────── */

function HudCorners({ tone = "orange" }: { tone?: "orange" | "green" }) {
  const c = tone === "green" ? "rgba(74,222,128,0.55)" : "rgba(255,180,128,0.55)";
  return (
    <>
      <span className="absolute top-3 left-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 top-0 h-px" style={{ background: c }} />
        <span className="absolute inset-y-0 left-0 w-px" style={{ background: c }} />
      </span>
      <span className="absolute top-3 right-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 top-0 h-px" style={{ background: c }} />
        <span className="absolute inset-y-0 right-0 w-px" style={{ background: c }} />
      </span>
      <span className="absolute bottom-3 left-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 bottom-0 h-px" style={{ background: c }} />
        <span className="absolute inset-y-0 left-0 w-px" style={{ background: c }} />
      </span>
      <span className="absolute bottom-3 right-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 bottom-0 h-px" style={{ background: c }} />
        <span className="absolute inset-y-0 right-0 w-px" style={{ background: c }} />
      </span>
    </>
  );
}

/* ─────────── ProxiAlpha — orange stocks theme ─────────── */

const TICKER = [
  "AAPL +0.83%", "MSFT +0.61%", "NVDA −0.79%", "GOOG +0.42%",
  "AMZN +1.12%", "META −0.34%", "TSLA +2.04%", "AVGO +0.55%",
  "JPM +0.18%", "WMT +0.07%", "AAPL +0.83%", "MSFT +0.61%",
];

// Deterministic candle heights so SSR matches client.
const CANDLES = [
  { o: 38, c: 44, h: 52, l: 34, up: true },
  { o: 44, c: 41, h: 47, l: 38, up: false },
  { o: 41, c: 48, h: 53, l: 39, up: true },
  { o: 48, c: 55, h: 60, l: 46, up: true },
  { o: 55, c: 51, h: 58, l: 49, up: false },
  { o: 51, c: 58, h: 63, l: 50, up: true },
  { o: 58, c: 56, h: 62, l: 53, up: false },
  { o: 56, c: 62, h: 67, l: 55, up: true },
  { o: 62, c: 60, h: 65, l: 57, up: false },
  { o: 60, c: 67, h: 72, l: 58, up: true },
  { o: 67, c: 73, h: 78, l: 65, up: true },
  { o: 73, c: 71, h: 76, l: 69, up: false },
  { o: 71, c: 78, h: 83, l: 70, up: true },
  { o: 78, c: 84, h: 88, l: 76, up: true },
];

export function AlphaViz() {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[28px]"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(60% 80% at 50% 0%, rgba(191, 87, 0, 0.20), transparent 60%), linear-gradient(180deg, #1a0c02 0%, #0a0506 100%)",
      }}
    >
      <HudCorners tone="orange" />

      {/* Top ticker tape */}
      <div className="absolute top-3 inset-x-3 h-5 overflow-hidden border-y border-white/5">
        <div
          className="font-mono text-[10.5px] tracking-[0.16em] whitespace-nowrap inline-flex gap-6 leading-5 text-white/75"
          style={{ animation: "alpha-ticker 38s linear infinite" }}
        >
          {[...TICKER, ...TICKER].map((t, i) => {
            const up = t.includes("+");
            return (
              <span key={i} style={{ color: up ? "#ffb380" : "#fb7185" }}>
                {t}
              </span>
            );
          })}
        </div>
      </div>

      {/* Chart area */}
      <svg viewBox="0 0 480 240" className="absolute inset-x-0 bottom-12 w-full">
        <defs>
          <linearGradient id="alpha-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(191,87,0,0)" />
            <stop offset="50%" stopColor="rgba(255, 153, 51, 0.95)" />
            <stop offset="100%" stopColor="rgba(255, 200, 128, 0)" />
          </linearGradient>
          <linearGradient id="alpha-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(191,87,0,0.30)" />
            <stop offset="100%" stopColor="rgba(191,87,0,0)" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[40, 80, 120, 160, 200].map((y) => (
          <line key={y} x1="20" y1={y} x2="460" y2={y} stroke="rgba(255,255,255,0.04)" strokeDasharray="2,4" />
        ))}

        {/* Candlesticks */}
        {CANDLES.map((c, i) => {
          const w = 24;
          const x = 20 + i * 30;
          // map price 30→90 to y 200→40 (inverted)
          const map = (p: number) => 240 - (p - 25) * 2.5;
          const top = Math.min(map(c.o), map(c.c));
          const bot = Math.max(map(c.o), map(c.c));
          const fill = c.up ? "#10b981" : "#ef4444";
          const stroke = fill;
          return (
            <g key={i}>
              <line x1={x + w / 2} y1={map(c.h)} x2={x + w / 2} y2={map(c.l)} stroke={stroke} strokeWidth="1" />
              <rect x={x} y={top} width={w} height={Math.max(2, bot - top)} fill={fill} fillOpacity={0.85} />
            </g>
          );
        })}

        {/* Price line overlay (alpha trace) */}
        <path
          d="M 20 200 C 60 190, 90 195, 120 175 S 200 145, 240 130 S 320 105, 360 100 S 430 75, 460 65"
          fill="none"
          stroke="url(#alpha-line)"
          strokeWidth="2.4"
          strokeLinecap="round"
        >
          <animate attributeName="stroke-dasharray" from="0,800" to="800,0" dur="3s" fill="freeze" />
        </path>
        {/* Filled area beneath the trace */}
        <path
          d="M 20 200 C 60 190, 90 195, 120 175 S 200 145, 240 130 S 320 105, 360 100 S 430 75, 460 65 L 460 240 L 20 240 Z"
          fill="url(#alpha-fill)"
        />
        {/* Latest-price marker */}
        <circle cx="460" cy="65" r="5" fill="#ffb380">
          <animate attributeName="r" values="4;7;4" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="460" cy="65" r="2" fill="#fff" />
      </svg>

      {/* Big alpha centered */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <span
          className="font-serif italic leading-none"
          style={{
            fontSize: "clamp(80px, 14vw, 180px)",
            color: "rgba(255, 235, 215, 0.92)",
            textShadow: "0 0 40px rgba(191, 87, 0, 0.55), 0 0 80px rgba(191, 87, 0, 0.3)",
          }}
        >
          α
        </span>
      </div>

      {/* Bottom telemetry */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-[0.2em]" style={{ color: "rgba(255, 200, 160, 0.85)" }}>
        <span>SHARPE · 1.42</span>
        <span style={{ color: "#ffb380" }}>PnL · +0.08</span>
        <span>EVAL · OK</span>
      </div>

      <style jsx>{`
        @keyframes alpha-ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ─────────── ProxiTrades — green Matrix bots theme ─────────── */

const MATRIX_CHARS = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ01XΣΔΞ#@&";

function MatrixColumn({ x, delay, duration, density }: { x: number; delay: number; duration: number; density: number }) {
  // Build a deterministic char stream per column (no Math.random for SSR stability)
  const chars = useMemo(() => {
    const out: string[] = [];
    for (let i = 0; i < density; i++) {
      out.push(MATRIX_CHARS[(i * 7 + Math.floor(x)) % MATRIX_CHARS.length]);
    }
    return out;
  }, [x, density]);

  return (
    <div
      className="absolute top-0 bottom-0 font-mono whitespace-pre leading-[1.2]"
      style={{
        left: `${x}%`,
        fontSize: "11px",
        animation: `matrix-fall ${duration}s linear ${delay}s infinite`,
      }}
    >
      {chars.map((ch, i) => {
        const alpha = i === density - 1 ? 1 : Math.max(0.18, 0.9 - i * (0.9 / density));
        const head = i === density - 1;
        return (
          <span
            key={i}
            style={{
              display: "block",
              color: head ? "#d6ffe6" : `rgba(74, 222, 128, ${alpha})`,
              textShadow: head ? "0 0 8px rgba(74, 222, 128, 0.95)" : "0 0 4px rgba(74, 222, 128, 0.45)",
            }}
          >
            {ch}
          </span>
        );
      })}
    </div>
  );
}

export function TauViz() {
  // Deterministic column positions (no Math.random — SSR-stable)
  const cols = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        x: i * 5.6 + 1,
        delay: (i * 0.41) % 3,
        duration: 5 + ((i * 13) % 7),
        density: 14 + (i % 5),
      })),
    []
  );

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[28px]"
      aria-hidden="true"
      style={{ background: "#020a04" }}
    >
      <HudCorners tone="green" />

      {/* Matrix rain */}
      <div className="absolute inset-0 overflow-hidden">
        {cols.map((c, i) => (
          <MatrixColumn key={i} x={c.x} delay={c.delay} duration={c.duration} density={c.density} />
        ))}
      </div>

      {/* Vignette so the center reads */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(2,10,4,0.55) 0%, rgba(2,10,4,0.0) 70%), linear-gradient(180deg, rgba(2,10,4,0.5) 0%, transparent 25%, transparent 75%, rgba(2,10,4,0.65) 100%)",
        }}
      />

      {/* Bot status panel — top-left */}
      <div
        className="absolute top-7 left-5 font-mono text-[10px] leading-[1.65] tracking-[0.14em]"
        style={{ color: "rgba(74, 222, 128, 0.92)" }}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #4ade80" }} />
          BOT_01 ONLINE
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #4ade80" }} />
          BOT_02 ONLINE
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #4ade80" }} />
          BOT_03 ONLINE
        </div>
      </div>

      {/* Live order panel — top-right */}
      <div
        className="absolute top-7 right-5 font-mono text-[10px] leading-[1.65] tracking-[0.14em] text-right"
        style={{ color: "rgba(74, 222, 128, 0.78)" }}
      >
        <div>FILL · AAPL · 0.7%</div>
        <div>FILL · MSFT · 0.4%</div>
        <div style={{ color: "#d6ffe6" }}>FILL · NVDA · 1.2%</div>
      </div>

      {/* Big tau centered */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <span
          className="font-serif italic leading-none"
          style={{
            fontSize: "clamp(80px, 14vw, 180px)",
            color: "#d6ffe6",
            textShadow:
              "0 0 30px rgba(74, 222, 128, 0.85), 0 0 80px rgba(74, 222, 128, 0.45), 0 0 140px rgba(74, 222, 128, 0.25)",
          }}
        >
          τ
        </span>
      </div>

      {/* Terminal cursor — bottom-left */}
      <div
        className="absolute bottom-9 left-5 font-mono text-[11px] tracking-[0.12em]"
        style={{ color: "rgba(74, 222, 128, 0.95)" }}
      >
        <span>{"$ proxi tail signals"}</span>
        <span style={{ animation: "tau-blink 1.1s steps(1) infinite" }}> ▍</span>
      </div>

      {/* Bottom telemetry */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-[0.2em]" style={{ color: "rgba(74, 222, 128, 0.85)" }}>
        <span>BOTS · 03</span>
        <span style={{ color: "#d6ffe6" }}>LATENCY · 80ms</span>
        <span>AUDIT · OK</span>
      </div>

      <style jsx global>{`
        @keyframes matrix-fall {
          from { transform: translateY(-110%); }
          to { transform: translateY(110%); }
        }
        @keyframes tau-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
