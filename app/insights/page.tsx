import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { SparkleField } from "@/components/site/sparkle-field";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights — Proxiant",
  description: "Case studies, industry views, and applied research notes — written from real engagements, not vendor opinion pieces.",
};

export default function Page() {
  return (
    <div>
      <SiteHeader />
<header data-theme="light" className="relative pt-40 pb-20 lg:pt-56 lg:pb-28">
        <SparkleField id="sparkles-insights-page" />
  <div className="page-stars"></div>
  <div className="hero-orbit" aria-hidden="true">
    <div className="hero-orbit-glow"></div>
    <span className="hero-orbit-dot"></span>
  </div>
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-9">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INSIGHTS</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Writing from the work.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Case studies, industry views, and applied research notes. Not vendor opinion pieces — what
          we have actually shipped, and what we've learned shipping it.
        </p>
      </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Strategy", "Org", "Risk", "Eval", "Ship"]}
        eyebrow="What we write about"
      />
<section data-theme="paper" className="pb-32">
  <div className="container-x relative">
    <a href="/case-studies/fortune500-bank/" className="card block p-10 lg:p-14 hover-line mb-16" data-reveal>
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-2 font-mono text-[11px] tracking-[0.14em] text-zinc-500">FEATURED CASE STUDY</div>
        <div className="lg:col-span-7">
          <h3 className="display-md mb-4">Fortune 500 bank cuts model evaluation cycle from weeks to a day.</h3>
          <p className="muted text-[15.5px] leading-relaxed">
            Designed and built an evaluation harness for a global bank's risk-modeling group. Now
            ships evaluation results inside the same audit channel the bank already runs.
          </p>
        </div>
        <div className="lg:col-span-3 flex lg:justify-end items-center gap-3 text-[15px] font-medium">
          Read the study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </div>
      </div>
    </a>

    <div>
      <a href="/insights/generative-ai-enterprise/" className="feature-link" data-reveal>
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500"><div>INSIGHT</div><div className="mt-1">STRATEGY</div></div>
        <div>
          <h3 className="display-sm mb-3">Generative AI in the enterprise: what actually moves</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl">A field view from regulated-industry programs. Where the value sits, where the failure modes are, and what the next twelve months look like.</p>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">Read →</div>
      </a>
      <a href="/insights/scaling-ai-teams/" className="feature-link" data-reveal data-delay="1">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500"><div>INSIGHT</div><div className="mt-1">ORGANIZATION</div></div>
        <div>
          <h3 className="display-sm mb-3">Scaling AI teams without scaling chaos</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl">How to grow an AI engineering team beyond the founding cohort without losing the discipline that made the first system work.</p>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">Read →</div>
      </a>
      <a href="/insights/trustworthy-ai/" className="feature-link" data-reveal data-delay="2">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500"><div>INSIGHT</div><div className="mt-1">RISK & GOVERNANCE</div></div>
        <div>
          <h3 className="display-sm mb-3">Trustworthy AI is an operating practice, not a poster</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl">A working playbook for evaluation, red-teaming, and governance that survives a real auditor walking the floor.</p>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">Read →</div>
      </a>
      <a href="/industries/financial-services/" className="feature-link" data-reveal>
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500"><div>INDUSTRY VIEW</div><div className="mt-1">FINANCIAL SERVICES</div></div>
        <div>
          <h3 className="display-sm mb-3">How AI ships into a regulated industry without breaking it</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl">What we have learned about delivering AI inside banks, insurers, and asset managers without tripping the audit trail.</p>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">Read →</div>
      </a>
      <a href="/proxitrades/" className="feature-link" data-reveal data-delay="1">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500"><div>LAB / PRODUCT</div><div className="mt-1">QUANT TRADING</div></div>
        <div>
          <h3 className="display-sm mb-3">ProxiTrades — agent-driven trading, live leads and results</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-xl">Walk-forward strategy research, paper trading, and daily published leads with honest results. ProxiAlpha is now part of ProxiTrades.</p>
        </div>
        <div className="flex items-center gap-3 lg:justify-end text-[15px] font-medium">Read →</div>
      </a>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Field notes"
        title="From the work."
        theme="light"
        words={[{ text: "Strategy" }, { text: "Org", em: true }, { text: "Risk" }, { text: "Eval", em: true }, { text: "Ship" }]}
      />


<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Working on something interesting?</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          We're always interested in problems that haven't been solved before. Send a brief.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">Get in touch
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      <SiteFooter />
    </div>
  );
}
