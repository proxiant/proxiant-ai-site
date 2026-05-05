import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";

export default function Page() {
  return (
    <div>
      <SiteHeader />
{/* Hero */}
<header data-theme="light" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32">
  <div className="page-stars"></div>
  <div className="hero-orbit" aria-hidden="true">
    <div className="hero-orbit-glow"></div>
    <span className="hero-orbit-dot"></span>
  </div>
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
      <div className="lg:col-span-7">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>PRACTICE / 01 — AI CONSULTING</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>
          Strategy through delivery, in production.
        </h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          We come in early, when the brief is still ambiguous, and stay until the system is
          observably working in your environment. Strategy, architecture, build, and operate —
          under one team, on one operating bar.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-dark magnetic">
            Send a brief
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#engagements" className="btn btn-outline">Engagement models</a>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
        <div className="mesh aspect-[4/5] scanline relative">
          <div className="starfield" data-twinkles="20"></div>
          <div className="orbit-ring"></div>
          <div className="orbit-ring r2"></div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mb-3">CONSULTING</div>
              <div className="font-serif italic text-[clamp(48px,6vw,96px)] text-white leading-none">01</div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mt-3">PRACTICE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Strategy", "Architecture", "Build", "Evaluate", "Operate", "Risk", "Governance", "Hand-off"]}
        eyebrow="What we ship into"
      />
{/* Capabilities — split content layout */}
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Capabilities</div>
        <h2 className="display-md" data-reveal data-delay="1">
          Six areas, <span className="italic-accent font-serif">one team.</span>
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 self-end">
        <p className="lead" data-reveal data-delay="2">
          The same partners cover all six. We don't run a separate strategy team that hands off to
          a separate delivery team. The people who make the call live with the call.
        </p>
      </div>
    </div>

        {/* Services — innovative card layout, no sequential counter */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      <article className="service-card" data-reveal>
        <span className="corner">PROXIANT · A</span>
        <div className="glyph"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><path d="M24 4v40M4 24h40M10 10l28 28M10 38l28-28"/><circle cx="24" cy="24" r="3" fill="currentColor"/></svg></div>
        <span className="tag">Strategy</span>
        <h3>Strategy & roadmap</h3>
        <p>Capability assessment, portfolio mapping, build / buy / partner decisions, and a sequenced twelve-month plan with sized milestones.</p>
      </article>
      <article className="service-card" data-reveal data-delay="1">
        <span className="corner">PROXIANT · B</span>
        <div className="glyph"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="6" width="36" height="36" rx="2"/><rect x="14" y="14" width="20" height="20"/><rect x="20" y="20" width="8" height="8" fill="currentColor" stroke="none"/></svg></div>
        <span className="tag">Architecture</span>
        <h3>Reference architectures</h3>
        <p>Integration design, vendor selection, and the trade-offs documented so the team that runs the system after us knows why each call was made.</p>
      </article>
      <article className="service-card" data-reveal data-delay="2">
        <span className="corner">PROXIANT · C</span>
        <div className="glyph"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="10" r="4"/><circle cx="10" cy="34" r="4"/><circle cx="38" cy="34" r="4"/><circle cx="24" cy="24" r="2.5" fill="currentColor"/><path d="M24 14v6M22 22l-10 10M26 22l10 10"/></svg></div>
        <span className="tag">RAG & agents</span>
        <h3>Retrieval, agents, tool use</h3>
        <p>Retrieval pipelines, agent systems, tool design, and the operating discipline to keep them honest under load and audit.</p>
      </article>
      <article className="service-card" data-reveal>
        <span className="corner">PROXIANT · D</span>
        <div className="glyph"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 42V8M6 42h36"/><path d="M14 36V22M22 36V14M30 36V28M38 36V18"/><circle cx="14" cy="22" r="2" fill="currentColor" stroke="none"/><circle cx="22" cy="14" r="2" fill="currentColor" stroke="none"/><circle cx="30" cy="28" r="2" fill="currentColor" stroke="none"/><circle cx="38" cy="18" r="2" fill="currentColor" stroke="none"/></svg></div>
        <span className="tag">Evaluation</span>
        <h3>Evaluation & observability</h3>
        <p>Eval harnesses, regression tests, drift detection. The instrumentation that tells you whether your system is still working a quarter from now.</p>
      </article>
      <article className="service-card" data-reveal data-delay="1">
        <span className="corner">PROXIANT · E</span>
        <div className="glyph"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4l16 6v12c0 11-7 19-16 22-9-3-16-11-16-22V10l16-6z"/><path d="M16 24l6 6 12-12"/></svg></div>
        <span className="tag">Risk & governance</span>
        <h3>Risk, red-team, governance</h3>
        <p>Threat modeling, red-teaming, and governance frameworks calibrated to your industry. Built to survive auditor review.</p>
      </article>
      <article className="service-card" data-reveal data-delay="2">
        <span className="corner">PROXIANT · F</span>
        <div className="glyph"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="26" r="16"/><path d="M24 10v3M40 26h-3M10 26h3M24 26l9-7"/><path d="M16 6l3 4M32 6l-3 4"/></svg></div>
        <span className="tag">Operate</span>
        <h3>Operate & support</h3>
        <p>After launch we stay on as the production team for as long as you need us. Monthly evals, model upgrades, regression catches.</p>
      </article>
    </div>
  </div>
</section>

{/* Engagement models — dark section */}
<section id="engagements" data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16 lg:mb-20">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Engagement models</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Sized to the decision <span className="italic-accent font-serif">it unlocks.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 self-end">
        <p className="lead" data-reveal data-delay="2">
          We don't sell time-and-materials by the warehouse. We sell shaped work that maps to a
          decision you're trying to make.
        </p>
      </div>
    </div>

    <div>
      <a href="/contact/" className="feature-link group" data-reveal>
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500">
          <div>SPRINT</div>
          <div className="mt-1">2 – 4 WEEKS</div>
        </div>
        <div>
          <h3 className="display-sm mb-3">Discovery sprint</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl mb-5">
            A bounded discovery. The output is a written architecture, a working spike, and a
            delivery plan with sized milestones. Right when the question is "is this even
            feasible".
          </p>
          <div className="tag-row">
            <span className="pill">Feasibility unclear</span>
            <span className="pill">Vendor decision pending</span>
            <span className="pill">Need a written architecture</span>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">
          Start a sprint
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>
      <a href="/contact/" className="feature-link group" data-reveal data-delay="1">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500">
          <div>BUILD</div>
          <div className="mt-1">8 – 24 WEEKS</div>
        </div>
        <div>
          <h3 className="display-sm mb-3">Build engagement</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl mb-5">
            A small embedded team that ships the system. We pair with your engineers as we go so
            the result is something they can run after we leave. Output is a system in production
            with documentation and runbooks.
          </p>
          <div className="tag-row">
            <span className="pill">Target is clear</span>
            <span className="pill">Need senior delivery</span>
            <span className="pill">Hand-off to internal team</span>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">
          Start a build
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>
      <a href="/contact/" className="feature-link group" data-reveal data-delay="2">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500">
          <div>OPERATE</div>
          <div className="mt-1">QUARTERLY RETAINER</div>
        </div>
        <div>
          <h3 className="display-sm mb-3">Operate retainer</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl mb-5">
            Production support after launch. Monthly evaluation runs, model upgrades, regression
            catches, and a standing channel for the team operating the system. Renewable each
            quarter.
          </p>
          <div className="tag-row">
            <span className="pill">System is live</span>
            <span className="pill">Model landscape changing</span>
            <span className="pill">Ops team building up</span>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">
          Start a retainer
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </a>
    </div>
  </div>
</section>

{/* Industries */}
<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Industries</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Where we have <span className="italic-accent font-serif">shipped.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 self-end" data-reveal data-delay="2">
        <a href="/industries/" className="btn btn-outline">All industries →</a>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <a href="/industries/financial-services/" className="card p-7 hover-line" data-reveal>
        <div className="font-mono text-[11px] text-zinc-500 mb-4">01</div>
        <div className="display-xs mb-2">Financial Services</div>
        <div className="muted text-[13px]">Risk, fraud, ops automation</div>
      </a>
      <a href="/industries/healthcare/" className="card p-7 hover-line" data-reveal data-delay="1">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">02</div>
        <div className="display-xs mb-2">Healthcare</div>
        <div className="muted text-[13px]">Clinical, claims, prior auth</div>
      </a>
      <a href="/industries/insurance/" className="card p-7 hover-line" data-reveal data-delay="2">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">03</div>
        <div className="display-xs mb-2">Insurance</div>
        <div className="muted text-[13px]">Underwriting, claims triage</div>
      </a>
      <a href="/industries/manufacturing/" className="card p-7 hover-line" data-reveal data-delay="3">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">04</div>
        <div className="display-xs mb-2">Manufacturing</div>
        <div className="muted text-[13px]">Quality, predictive ops</div>
      </a>
      <a href="/industries/energy/" className="card p-7 hover-line" data-reveal>
        <div className="font-mono text-[11px] text-zinc-500 mb-4">05</div>
        <div className="display-xs mb-2">Energy</div>
        <div className="muted text-[13px]">Grid, asset, optimization</div>
      </a>
      <a href="/industries/retail/" className="card p-7 hover-line" data-reveal data-delay="1">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">06</div>
        <div className="display-xs mb-2">Retail</div>
        <div className="muted text-[13px]">Demand, merchandising</div>
      </a>
      <a href="/industries/telecom/" className="card p-7 hover-line" data-reveal data-delay="2">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">07</div>
        <div className="display-xs mb-2">Telecom</div>
        <div className="muted text-[13px]">Network ops, customer care</div>
      </a>
      <a href="/industries/transportation/" className="card p-7 hover-line" data-reveal data-delay="3">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">08</div>
        <div className="display-xs mb-2">Transportation</div>
        <div className="muted text-[13px]">Routing, fleet, logistics</div>
      </a>
    </div>
  </div>
</section>

{/* Case study spotlight */}
<section data-theme="paper" className="section">
  <div className="container-x">
    <a href="/case-studies/fortune500-bank/" className="card block p-10 lg:p-14 hover-line" data-reveal>
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-7">
          <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-6">CASE STUDY · FINANCIAL SERVICES</div>
          <h3 className="display-md mb-5">Fortune 500 bank cuts model evaluation cycle from weeks to a day.</h3>
          <p className="muted text-[16px] leading-relaxed max-w-2xl mb-6">
            Designed and built an evaluation harness for a global bank's risk-modeling group.
            Integrated with three internal data systems and a vendor LLM gateway. Now ships
            evaluation results inside the same audit channel the bank already runs.
          </p>
          <div className="flex items-center gap-3 text-[15px] font-medium">
            Read the study
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </div>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          <div className="card-flat p-5 bg-elev"><div className="font-mono text-[11px] text-zinc-500 mb-2">CYCLE</div><div className="counter text-[40px]">14d → 1d</div></div>
          <div className="card-flat p-5 bg-elev"><div className="font-mono text-[11px] text-zinc-500 mb-2">SYSTEMS</div><div className="counter text-[40px]"><span data-count="3">0</span></div></div>
          <div className="card-flat p-5 bg-elev"><div className="font-mono text-[11px] text-zinc-500 mb-2">AUDIT-READY</div><div className="counter text-[40px]"><span data-count="100" data-suffix="%">0</span></div></div>
          <div className="card-flat p-5 bg-elev"><div className="font-mono text-[11px] text-zinc-500 mb-2">TIME TO PROD</div><div className="counter text-[40px]"><span data-count="6">0</span> mo</div></div>
        </div>
      </div>
    </a>
  </div>
</section>

{/* CTA */}

      <PinScroll
        eyebrow="How we work"
        title="Same partners on every layer."
        theme="light"
        words={[{ text: "Strategy" }, { text: "Architecture", em: true }, { text: "Build" }, { text: "Evaluate", em: true }, { text: "Operate" }, { text: "Repeat", em: true }]}
      />

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Have a brief? Send it.</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          We respond within one business day. The first call is for shape and fit.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">
            Start the conversation
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="/labs/" className="btn btn-outline">See the labs</a>
        </div>
      </div>
    </div>
  </div>
</section>
      <SiteFooter />
    </div>
  );
}
