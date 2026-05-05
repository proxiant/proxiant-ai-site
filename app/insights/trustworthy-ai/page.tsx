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
<header data-theme="light" className="relative pt-40 pb-20 lg:pt-56 lg:pb-28">
  <div className="page-stars"></div>
  <div className="hero-orbit" aria-hidden="true">
    <div className="hero-orbit-glow"></div>
    <span className="hero-orbit-dot"></span>
  </div>
  <div className="container-x relative">
    <a href="/insights/" className="muted text-[13px] mb-7 inline-flex items-center gap-2" data-reveal>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      All insights
    </a>
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-9">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INSIGHT — RISK & GOVERNANCE</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Trustworthy AI is an operating practice, not a poster</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">A working playbook for evaluation, red-teaming, and governance that survives a real auditor walking the floor.</p>
      </div>
    </div>
  </div>
</header>





      <PageMarquee
        items={["Reproduce", "Lineage", "Change record", "Drill"]}
        eyebrow="What we ship into"
      />
<section data-theme="light" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 01</div>
        <h2 className="display-md" data-reveal>Why posters don't work</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>Most enterprise AI governance is documentation that nobody operates against. The principles document is downloaded once, the policy is approved, and the operating teams keep doing what they were doing.</p>
        <p data-reveal data-delay="1">What actually changes outcomes is operational practice — evaluation cadence, red-team protocol, change review, incident process — built into how the team runs.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 02</div>
        <h2 className="display-md" data-reveal>The minimum operating practice</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>An evaluation harness that runs on a schedule, with a named owner and a written process for handling regressions. The gap between this and the average enterprise practice is large.</p>
        <p data-reveal data-delay="1">A change-review process that distinguishes model upgrades from infrastructure changes from data changes, with different review thresholds for each.</p>
        <p data-reveal data-delay="2">A red-team protocol that runs at least quarterly, with a written report and named follow-ups.</p>
        <p data-reveal data-delay="3">An incident process that captures AI-specific failure modes — drift, prompt injection, retrieval failure — alongside the standard production incident categories.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 03</div>
        <h2 className="display-md" data-reveal>What the auditor wants to see</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>Reproducibility. Given the same inputs, can the system produce the same outputs, and is that traceable? For systems that are deliberately stochastic, can the team explain the bound on the variance?</p>
        <p data-reveal data-delay="1">Lineage. For a given output, can the team trace back to the prompt, retrieval set, model version, and configuration that produced it?</p>
        <p data-reveal data-delay="2">Change record. When the model was upgraded, who approved it, and what evaluation evidence supported the call?</p>
        <p data-reveal data-delay="3">Most teams have the data. Few have it organized in a way that survives a one-hour walk-through with a regulator.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 04</div>
        <h2 className="display-md" data-reveal>The cost of doing this right</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>The cost is operational discipline, not tooling spend. The teams we work with that have working AI governance are not the ones that bought the most platforms. They are the ones that wrote the eval harness, run the rotation, and own the call.</p>
        <p data-reveal data-delay="1">It is cheaper than the alternative. A regulated firm that has to pause an AI program in the middle of an audit pays orders of magnitude more than the team that ran evals on a schedule.</p>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Posture"
        title="An operating practice."
        theme="light"
        words={[{ text: "Reproduce" }, { text: "Lineage", em: true }, { text: "Change record" }, { text: "Drill", em: true }]}
      />



<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Want our writing in your inbox?</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Send a note. We add you to a short list that gets a write-up when there is something substantive to share.</p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">Get in touch
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="/insights/" className="btn btn-outline">More insights</a>
        </div>
      </div>
    </div>
  </div>
</section>
      <SiteFooter />
    </div>
  );
}
