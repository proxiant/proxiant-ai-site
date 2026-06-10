"use client";

/**
 * Themed visuals for the two ProxiantLabs product cards on /labs and on the
 * standalone product pages. Both render in the brand palette: warm cream over
 * deep ink, accented with the burnt-orange brand color. No retro Matrix tropes.
 *
 * - AlphaViz   → ProxiAlpha. A quantitative research surface: scrolling ticker
 *   tape, candlestick chart with brand-aligned up/down colors, animated alpha
 *   trace over a gradient fill, latest-price marker, big serif α floating at
 *   center, telemetry strip at bottom (Sharpe / PnL / Eval).
 * - TauViz     → ProxiTrades. An execution-engine surface: dense
 *   monospace event log streaming on the right (signal → validate → route →
 *   fill), routing graph rendered in burnt orange / cream on the left, big
 *   serif τ at center, telemetry strip at bottom (Bots / Latency / Audit).
 */

import React from "react";

/* ─────────── Shared HUD chrome ─────────── */

function HudCorners({ tone = "orange" }: { tone?: "orange" }) {
  const c = "rgba(255,180,128,0.55)";
  void tone;
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
              <span key={i} style={{ color: up ? "#ffb380" : "#8b93a7" }}>
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
          // Brand-aligned candle colors — warm cream for up, muted slate for down,
          // not the cheap pure-green / pure-red of a consumer trading app.
          const fill = c.up ? "#e8d5a8" : "#5b6478";
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
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-[0.2em]" style={{ color: "rgba(232, 213, 168, 0.85)" }}>
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

/* ─────────── ProxiTrades — execution engine, brand palette ─────────── */

// Deterministic event log entries — signal → validate → route → fill.
const TAU_EVENTS = [
  { t: "10:42:18.221", k: "SIG",   d: "strategy_v7 · AAPL · long",  hot: false },
  { t: "10:42:18.230", k: "VAL",   d: "risk gates · pass",          hot: false },
  { t: "10:42:18.236", k: "ROUTE", d: "alpaca · paper",             hot: false },
  { t: "10:42:18.301", k: "FILL",  d: "AAPL · 0.7% · 80ms",         hot: true },
  { t: "10:43:51.110", k: "SIG",   d: "mean_rev · MSFT · hold",     hot: false },
  { t: "10:43:51.114", k: "VAL",   d: "exposure check · pass",      hot: false },
  { t: "10:45:09.882", k: "SIG",   d: "strategy_v7 · NVDA · exit",  hot: false },
  { t: "10:45:09.890", k: "VAL",   d: "stop-loss honored",          hot: false },
  { t: "10:45:09.897", k: "ROUTE", d: "tradier · live",             hot: false },
  { t: "10:45:09.961", k: "FILL",  d: "NVDA · 1.2% · 79ms",         hot: true },
  { t: "10:47:02.404", k: "AUDIT", d: "ledger write · sealed",      hot: false },
  { t: "10:48:30.012", k: "SIG",   d: "momentum_x · SPY · long",    hot: false },
];

export function TauViz() {
  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-[28px]"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(60% 80% at 50% 0%, rgba(191, 87, 0, 0.14), transparent 60%), linear-gradient(180deg, #120b04 0%, #0a0706 100%)",
      }}
    >
      <HudCorners tone="orange" />

      {/* Routing graph — left side */}
      <svg viewBox="0 0 220 420" className="absolute left-0 top-0 h-full w-1/2 opacity-90">
        <defs>
          <linearGradient id="tau-path" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(191,87,0,0)" />
            <stop offset="50%" stopColor="rgba(255,153,51,0.9)" />
            <stop offset="100%" stopColor="rgba(232,213,168,0)" />
          </linearGradient>
        </defs>
        {/* Pipeline stages, top to bottom */}
        {[
          { y: 90,  label: "SIGNAL" },
          { y: 170, label: "VALIDATE" },
          { y: 250, label: "ROUTE" },
          { y: 330, label: "FILL" },
        ].map((s, i) => (
          <g key={i}>
            <circle cx="60" cy={s.y} r="11" fill="rgba(255,255,255,0.05)" stroke="rgba(232,213,168,0.45)" strokeWidth="1" />
            <circle cx="60" cy={s.y} r="3.5" fill="#e8d5a8">
              <animate attributeName="opacity" values="0.35;1;0.35" dur="2.6s" begin={`${i * 0.55}s`} repeatCount="indefinite" />
            </circle>
            <text x="82" y={s.y + 3} fill="rgba(232,213,168,0.6)" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
              {s.label}
            </text>
          </g>
        ))}
        {/* Connecting spine */}
        <line x1="60" y1="101" x2="60" y2="319" stroke="rgba(232,213,168,0.18)" strokeWidth="1" strokeDasharray="2,5" />
        {/* Packet pulse traveling the spine */}
        {[0, 1].map((i) => (
          <circle key={i} cx="60" cy="100" r="2.5" fill="#bf5700" opacity="0.9">
            <animate attributeName="cy" from="100" to="320" dur="2.8s" begin={`${i * 1.4}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;1;0" dur="2.8s" begin={`${i * 1.4}s`} repeatCount="indefinite" />
          </circle>
        ))}
        {/* Branch from ROUTE to two brokers */}
        <path d="M 71 250 Q 110 250, 130 230" fill="none" stroke="url(#tau-path)" strokeWidth="1.2" />
        <path d="M 71 250 Q 110 250, 130 274" fill="none" stroke="url(#tau-path)" strokeWidth="1.2" />
        <text x="138" y="228" fill="rgba(232,213,168,0.5)" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">PAPER</text>
        <text x="138" y="282" fill="rgba(232,213,168,0.5)" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">LIVE</text>
      </svg>

      {/* Scrolling event log — right side */}
      <div className="absolute right-4 top-10 bottom-12 w-[52%] overflow-hidden" style={{ maskImage: "linear-gradient(180deg, transparent 0%, black 12%, black 84%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 12%, black 84%, transparent 100%)" }}>
        <div className="font-mono text-[9.5px] leading-[1.9] tracking-[0.06em]" style={{ animation: "tau-log 16s linear infinite" }}>
          {[...TAU_EVENTS, ...TAU_EVENTS].map((e, i) => (
            <div key={i} className="flex gap-2 whitespace-nowrap">
              <span style={{ color: "rgba(232,213,168,0.4)" }}>{e.t}</span>
              <span style={{ color: e.hot ? "#ff9933" : "rgba(232,213,168,0.65)", minWidth: 38 }}>{e.k}</span>
              <span style={{ color: e.hot ? "#e8d5a8" : "rgba(232,213,168,0.55)" }}>{e.d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Big tau centered */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <span
          className="font-serif italic leading-none"
          style={{
            fontSize: "clamp(80px, 14vw, 180px)",
            color: "rgba(255, 240, 220, 0.94)",
            textShadow: "0 0 40px rgba(191, 87, 0, 0.55), 0 0 90px rgba(191, 87, 0, 0.28)",
          }}
        >
          τ
        </span>
      </div>

      {/* Bottom telemetry */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-[0.2em]" style={{ color: "rgba(232, 213, 168, 0.85)" }}>
        <span>BROKERS · 03</span>
        <span style={{ color: "#ffb380" }}>LATENCY · 80ms</span>
        <span>AUDIT · SEALED</span>
      </div>

      <style jsx>{`
        @keyframes tau-log {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
      `}</style>
    </div>
  );
}
