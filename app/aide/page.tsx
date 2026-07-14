import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SparkleField } from "@/components/site/sparkle-field";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIDE: AI Development Engine | Proxiant Labs",
  description:
    "A terminal coding agent on a provider-agnostic LLM gateway: phase-routed multi-model orchestration, local GPU models, code-graph retrieval, and a desktop client. Private preview.",
};

const PHASES = [
  { phase: "Plan", tier: "Frontier", why: "Architecture decisions need the deepest reasoning" },
  { phase: "Review", tier: "Frontier", why: "Adversarial review catches what implementation misses" },
  { phase: "Analyze", tier: "Balanced", why: "High-volume code reading at the best quality per dollar" },
  { phase: "Implement", tier: "Balanced", why: "Bulk code writing with strong quality" },
  { phase: "Test", tier: "Efficient", why: "Mostly mechanical; a small model matches frontier quality" },
  { phase: "Document", tier: "Efficient", why: "Same economics as testing" },
];

const HIGHLIGHTS = [
  {
    k: "ORCHESTRATION",
    t: "Every phase on the right model",
    d: "AIDE splits software work into phases and routes each one to the model tier where it is most cost-effective: planning and review on frontier models, implementation on balanced ones, tests and docs on efficient ones. A budget estimator prices the whole job first, shows the savings against running everything on the frontier tier, and asks before spending.",
  },
  {
    k: "GATEWAY",
    t: "One gateway, every provider",
    d: "Anthropic, OpenAI, Azure, Google, DeepSeek, and self-hosted backends sit behind a single gateway: one place for authentication, rate limits, cost accounting, and model governance. When a provider throttles, work cascades down a configured fallback chain instead of stopping.",
  },
  {
    k: "YOUR HARDWARE",
    t: "Local models, local code",
    d: "Point the gateway at models running on your own GPUs and 70B-class open models serve any phase. Code and prompts never have to leave your machines, which is the difference between adopting AI tooling and getting it past security review.",
  },
  {
    k: "CODE GRAPH",
    t: "Retrieval over a code knowledge graph",
    d: "AIDE builds a local knowledge graph of the repository from syntax trees, spending zero model tokens on parsing. Questions about the codebase resolve through graph queries instead of file reading, refactors get a verified blast-radius analysis before any edit, and useful answers persist so knowledge accumulates across sessions.",
  },
  {
    k: "SURFACES",
    t: "Terminal, server, desktop",
    d: "The same engine runs three ways: a full terminal UI for daily work, an HTTP server for remote setups, and a cross-platform desktop client. Run the models on a GPU server, drive them from a laptop.",
  },
  {
    k: "SKILLS",
    t: "Thirty bundled skills, MCP native",
    d: "Code review, security audit, test generation, refactoring, documentation, dashboards, diagrams, and embedded-systems checks (MISRA C and C++, Verilog linting) ship as skills that trigger by command or keyword. MCP support connects any external toolserver; subagents fan work out under the same budget plan.",
  },
];

export default function AidePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <SparkleField />
          <div className="container-site pt-36 pb-20 relative">
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-6" data-reveal>
              LAB · PRODUCT · PRIVATE PREVIEW
            </div>
            <h1 className="display-xl mb-6 max-w-4xl" data-reveal>
              AIDE
            </h1>
            <p className="text-[19px] text-zinc-300 max-w-2xl leading-relaxed mb-4" data-reveal data-delay="1">
              The AI Development Engine: a terminal coding agent on a provider-agnostic
              LLM gateway.
            </p>
            <p className="muted text-[16px] max-w-2xl leading-relaxed" data-reveal data-delay="2">
              One engine that plans on the strongest model, implements on the most
              economical one, falls back automatically when providers throttle, and runs
              just as well against your own GPUs as against any cloud.
            </p>
          </div>
        </section>

        <section className="container-site pb-8">
          <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-6" data-reveal>
            WHAT MAKES IT DIFFERENT
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <div key={h.k} className="card p-8 flex flex-col" data-reveal data-delay={String((i % 3) + 1)}>
                <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-4">{h.k}</div>
                <h3 className="text-[19px] font-semibold mb-3">{h.t}</h3>
                <p className="muted text-[14.5px] leading-relaxed">{h.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-site py-14">
          <div className="card p-10" data-reveal>
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-3">
              DEFAULT ROUTING
            </div>
            <h2 className="display-sm mb-6">Where each phase runs, and why</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[14.5px]">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left font-mono text-[11px] tracking-[0.14em] text-zinc-500 pb-3 pr-6 font-normal">PHASE</th>
                    <th className="text-left font-mono text-[11px] tracking-[0.14em] text-zinc-500 pb-3 pr-6 font-normal">TIER</th>
                    <th className="text-left font-mono text-[11px] tracking-[0.14em] text-zinc-500 pb-3 font-normal">WHY</th>
                  </tr>
                </thead>
                <tbody>
                  {PHASES.map((r) => (
                    <tr key={r.phase} className="border-b border-zinc-900">
                      <td className="py-3 pr-6 font-medium">{r.phase}</td>
                      <td className="py-3 pr-6 text-zinc-300">{r.tier}</td>
                      <td className="py-3 muted">{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="muted text-[13px] mt-5 max-w-3xl leading-relaxed">
              Every mapping is configuration, not code: presets range from
              everything-on-one-provider to fully open-source, and any gateway backend can
              serve any phase. Pin a phase to an exact model, replace a tier&apos;s fallback
              chain, or disable routing entirely with one setting.
            </p>
          </div>
        </section>

        <section className="container-site pb-24">
          <div className="card p-10 grid lg:grid-cols-12 gap-8 items-center" data-reveal>
            <div className="lg:col-span-8">
              <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-3">
                AVAILABILITY
              </div>
              <h2 className="display-sm mb-4">Private preview</h2>
              <p className="muted text-[15.5px] leading-relaxed max-w-2xl">
                AIDE is in private preview inside Proxiant Labs, running daily production
                work across our own products. If phase-routed orchestration on your own
                hardware is the shape of tooling your team needs, talk to us.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="/contact/"
                className="inline-flex items-center gap-3 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white transition-colors px-7 py-4 text-[15px] font-semibold"
              >
                Talk to us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
