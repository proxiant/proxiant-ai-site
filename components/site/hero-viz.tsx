"use client";

/**
 * Three contextual hero visualizations for the practice pages, replacing the
 * old "01 / 02 / 03" placeholder mesh cards. All three share the same outer
 * frame (.hero-viz-frame) so the page layout slot remains identical, but the
 * inner SVG/animation tells a story relevant to the page.
 *
 * - ConsultingViz: a stylized architecture diagram — input nodes feeding into
 *   a central evaluator, paths drawing in sequence, dots pulsing as data
 *   flows through. Echoes "strategy → architecture → build → operate".
 * - LabsViz: a research orbit — concentric rings with electrons orbiting a
 *   core, plus a slow signal sweep. Echoes "experiment → measure → ship".
 * - TrainingViz: a cohort progression — a stack of program cards advancing
 *   through six weeks, with a curve showing capability rising. Echoes the
 *   bootcamp arc.
 */

import React from "react";

function HudCorners() {
  return (
    <>
      <span className="absolute top-3 left-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 top-0 h-px bg-white/30" />
        <span className="absolute inset-y-0 left-0 w-px bg-white/30" />
      </span>
      <span className="absolute top-3 right-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 top-0 h-px bg-white/30" />
        <span className="absolute inset-y-0 right-0 w-px bg-white/30" />
      </span>
      <span className="absolute bottom-3 left-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 bottom-0 h-px bg-white/30" />
        <span className="absolute inset-y-0 left-0 w-px bg-white/30" />
      </span>
      <span className="absolute bottom-3 right-3 w-3 h-3" aria-hidden>
        <span className="absolute inset-x-0 bottom-0 h-px bg-white/30" />
        <span className="absolute inset-y-0 right-0 w-px bg-white/30" />
      </span>
    </>
  );
}

function HudLabel({ kicker, value }: { kicker: string; value: string }) {
  return (
    <div className="absolute top-4 left-5 right-5 flex items-center justify-between text-white/70 text-[10.5px] font-mono tracking-[0.22em]">
      <span data-scramble>{kicker}</span>
      <span className="flex items-center gap-2">
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ background: "#bf5700", boxShadow: "0 0 8px #bf5700" }}
        />
        {value}
      </span>
    </div>
  );
}

function HudFooter({ readout }: { readout: [string, string, string] }) {
  return (
    <div className="absolute bottom-4 left-5 right-5 z-[3]">
      <div className="flex items-center justify-between text-white/85 text-[10.5px] font-mono tracking-[0.18em] mb-1.5">
        <span>{readout[0]}</span>
        <span style={{ color: "#ffb380" }}>{readout[1]}</span>
        <span>{readout[2]}</span>
      </div>
      <div className="h-px bg-white/15 relative overflow-hidden">
        <span
          className="absolute inset-y-0 left-0 w-1/3"
          style={{
            background: "linear-gradient(90deg, transparent, #bf5700, transparent)",
            animation: "hudbar 3.5s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}

const FRAME_BG =
  "absolute inset-0 mesh rounded-[28px] overflow-hidden border-0";

/* ─────────── Consulting — architecture flow diagram ─────────── */
export function ConsultingViz() {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <div className={FRAME_BG}>
        <HudCorners />
        <HudLabel kicker="ARCHITECTURE · v1.0" value="LIVE" />
        <svg viewBox="0 0 360 420" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="cgradline" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(191,87,0,0)" />
              <stop offset="50%" stopColor="rgba(191,87,0,0.85)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
            <radialGradient id="cnode" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="60%" stopColor="#bf5700" />
              <stop offset="100%" stopColor="rgba(191,87,0,0)" />
            </radialGradient>
          </defs>

          {/* Input nodes — left column */}
          {[110, 175, 240].map((y, i) => (
            <g key={i}>
              <circle cx="60" cy={y} r="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
              <circle cx="60" cy={y} r="3" fill="#fff">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              </circle>
              <text x="38" y={y - 16} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="end">
                {["INTAKE", "DATA", "POLICY"][i]}
              </text>
            </g>
          ))}

          {/* Central evaluator */}
          <circle cx="200" cy="175" r="36" fill="rgba(191,87,0,0.08)" stroke="rgba(191,87,0,0.55)" strokeWidth="1" />
          <circle cx="200" cy="175" r="20" fill="url(#cnode)" opacity="0.85">
            <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
          </circle>
          <text x="200" y="178" fill="#fff" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="middle" letterSpacing="2">
            EVAL
          </text>

          {/* Paths from inputs to evaluator */}
          {[110, 175, 240].map((y, i) => {
            const length = 200;
            return (
              <path
                key={i}
                d={`M 71 ${y} Q 130 ${y}, 165 175`}
                fill="none"
                stroke="url(#cgradline)"
                strokeWidth="1.4"
                strokeDasharray={`${length}`}
                strokeDashoffset={`${length}`}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={length}
                  to="0"
                  dur="2.4s"
                  begin={`${0.6 + i * 0.4}s`}
                  fill="freeze"
                />
              </path>
            );
          })}

          {/* Output paths to operate / ship / audit */}
          {[110, 175, 240].map((y, i) => {
            const length = 200;
            return (
              <path
                key={i}
                d={`M 235 175 Q 270 ${y}, 305 ${y}`}
                fill="none"
                stroke="url(#cgradline)"
                strokeWidth="1.2"
                strokeDasharray={`${length}`}
                strokeDashoffset={`${length}`}
                opacity="0.7"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from={length}
                  to="0"
                  dur="2.4s"
                  begin={`${1.6 + i * 0.4}s`}
                  fill="freeze"
                />
              </path>
            );
          })}

          {/* Output nodes — right column */}
          {[110, 175, 240].map((y, i) => (
            <g key={i}>
              <circle cx="316" cy={y} r="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
              <circle cx="316" cy={y} r="3" fill="#bf5700">
                <animate attributeName="opacity" values="1;0.3;1" dur="2.6s" begin={`${0.3 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
              <text x="338" y={y - 16} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="start">
                {["SHIP", "MONITOR", "AUDIT"][i]}
              </text>
            </g>
          ))}

          {/* Bottom flow — packet pulses */}
          {[0, 1, 2].map((i) => (
            <circle key={i} cx="20" cy="350" r="2" fill="#bf5700" opacity="0.85">
              <animate attributeName="cx" from="20" to="340" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
            </circle>
          ))}
          <line x1="20" y1="350" x2="340" y2="350" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="2,4" />
        </svg>
        <HudFooter readout={["NODES · 06", "PATHS · LIVE", "EVAL · OK"]} />
      </div>
    </div>
  );
}

/* ─────────── Labs — atomic / orbit visualization ─────────── */
export function LabsViz() {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <div className={FRAME_BG}>
        <HudCorners />
        <HudLabel kicker="EXPERIMENT · 042" value="RUNNING" />
        <svg viewBox="0 0 360 420" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="lcore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="40%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </radialGradient>
          </defs>

          <g transform="translate(180,210)">
            {/* Concentric orbits */}
            {[60, 90, 130, 165].map((r, i) => (
              <ellipse
                key={i}
                cx="0"
                cy="0"
                rx={r}
                ry={r * 0.42}
                fill="none"
                stroke={i === 1 ? "rgba(191,87,0,0.4)" : "rgba(255,255,255,0.18)"}
                strokeWidth="1"
                strokeDasharray={i === 0 ? "" : "2,3"}
                transform={`rotate(${[15, -10, 25, -5][i]})`}
              />
            ))}

            {/* Orbiting electrons */}
            <g style={{ animation: "labs-rot 9s linear infinite", transformOrigin: "0 0" }}>
              <ellipse cx="0" cy="0" rx="60" ry="25" fill="none" stroke="none" />
              <circle cx="60" cy="0" r="4" fill="#bf5700">
                <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
            <g style={{ animation: "labs-rot-rev 15s linear infinite", transformOrigin: "0 0" }}>
              <ellipse cx="0" cy="0" rx="90" ry="38" fill="none" stroke="none" transform="rotate(-10)" />
              <g transform="rotate(-10)">
                <circle cx="90" cy="0" r="3" fill="#a855f7">
                  <animate attributeName="r" values="2;4;2" dur="2.4s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>
            <g style={{ animation: "labs-rot 22s linear infinite", transformOrigin: "0 0" }}>
              <g transform="rotate(25)">
                <circle cx="-130" cy="0" r="3" fill="#fff" opacity="0.9">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
              </g>
            </g>

            {/* Nucleus */}
            <circle cx="0" cy="0" r="36" fill="rgba(168,85,247,0.12)" />
            <circle cx="0" cy="0" r="22" fill="url(#lcore)">
              <animate attributeName="r" values="20;24;20" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="6" fill="#fff" />
          </g>

          {/* Telemetry lines outside the orbit */}
          <g transform="translate(20,360)" fontFamily="JetBrains Mono, monospace" fontSize="8.5" fill="rgba(255,255,255,0.55)" letterSpacing="1.5">
            <text x="0" y="0">SHARPE 1.42</text>
            <text x="120" y="0" fill="#ffb380">DRIFT 0.07</text>
            <text x="230" y="0">EVAL DAILY</text>
          </g>
        </svg>

        <style jsx>{`
          @keyframes labs-rot { to { transform: rotate(360deg); } }
          @keyframes labs-rot-rev { to { transform: rotate(-360deg); } }
        `}</style>
        <HudFooter readout={["EXP · 042", "STATUS · RUN", "EVAL · OK"]} />
      </div>
    </div>
  );
}

/* ─────────── Training — cohort progression ─────────── */
export function TrainingViz() {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      <div className={FRAME_BG}>
        <HudCorners />
        <HudLabel kicker="COHORT · WK 03" value="ACTIVE" />
        <svg viewBox="0 0 360 420" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="tcurve" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(191,87,0,0)" />
              <stop offset="40%" stopColor="rgba(191,87,0,0.9)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0.95)" />
            </linearGradient>
          </defs>

          {/* Capability curve — rising line */}
          <path
            d="M 30 320 C 80 315, 130 300, 170 250 S 260 130, 330 100"
            fill="none"
            stroke="url(#tcurve)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="500"
            strokeDashoffset="500"
          >
            <animate attributeName="stroke-dashoffset" from="500" to="0" dur="3s" fill="freeze" />
          </path>

          {/* Week markers */}
          {[
            { x: 50, y: 318, label: "W1", active: true },
            { x: 110, y: 305, label: "W2", active: true },
            { x: 165, y: 250, label: "W3", active: true },
            { x: 220, y: 195, label: "W4", active: false },
            { x: 270, y: 145, label: "W5", active: false },
            { x: 320, y: 105, label: "W6", active: false },
          ].map((m, i) => (
            <g key={i}>
              <circle
                cx={m.x}
                cy={m.y}
                r={m.active ? 6 : 4}
                fill={m.active ? "#bf5700" : "rgba(255,255,255,0.18)"}
                stroke={m.active ? "#fff" : "rgba(255,255,255,0.45)"}
                strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values={m.active ? "0.7;1;0.7" : "0.4;0.7;0.4"}
                  dur="2.6s"
                  begin={`${i * 0.3}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <text
                x={m.x}
                y={m.y - 12}
                fill={m.active ? "#fff" : "rgba(255,255,255,0.5)"}
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
                textAnchor="middle"
                letterSpacing="1.5"
              >
                {m.label}
              </text>
            </g>
          ))}

          {/* Capstone halo */}
          <circle cx="320" cy="105" r="16" fill="none" stroke="rgba(168,85,247,0.45)" strokeWidth="1">
            <animate attributeName="r" values="14;22;14" dur="2.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.8s" repeatCount="indefinite" />
          </circle>

          {/* Cohort grid — bottom strip showing 12 participants advancing */}
          <g transform="translate(30,365)">
            {Array.from({ length: 12 }).map((_, i) => {
              const x = i * 24;
              return (
                <g key={i}>
                  <rect
                    x={x}
                    y={0}
                    width={18}
                    height={18}
                    rx={3}
                    fill={i < 7 ? "rgba(191,87,0,0.85)" : "rgba(255,255,255,0.08)"}
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="0.8"
                  >
                    {i < 7 && (
                      <animate
                        attributeName="opacity"
                        values="0.65;1;0.65"
                        dur="2.4s"
                        begin={`${i * 0.18}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </rect>
                </g>
              );
            })}
            <text
              x={300}
              y={13}
              fill="rgba(255,255,255,0.55)"
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
              textAnchor="end"
              letterSpacing="1.5"
            >
              7 / 12 SHIPPED
            </text>
          </g>

          {/* Y-axis label */}
          <text x="20" y="100" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5">
            CAPABILITY
          </text>
          <text x="340" y="335" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="JetBrains Mono, monospace" letterSpacing="1.5" textAnchor="end">
            6 WEEKS
          </text>
        </svg>
        <HudFooter readout={["WK · 03", "CURVE · UP", "CAPSTONE · 6W"]} />
      </div>
    </div>
  );
}
