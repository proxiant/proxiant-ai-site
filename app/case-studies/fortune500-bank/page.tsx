import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>CASE STUDY · FINANCIAL SERVICES · 6 MONTHS</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Cutting model evaluation from weeks to a day.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          A global Fortune 500 bank needed an evaluation harness that satisfied model-risk-management
          requirements at the cadence the business actually moved. We designed and shipped one over
          six months. It now runs every model change inside the audit channel the bank already had.
        </p>
      </div>
    </div>
  </div>
</header>



      <PinScroll
        eyebrow="Engagement arc"
        meta="WEEKS · TO · DAYS"
        intro="↳ Six month build"
        outro="⏵ Audit-channel native"
        words={[ { text: "Discover" }, { text: "Design", em: true }, { text: "Wire" }, { text: "Evaluate", em: true }, { text: "Ship" }, { text: "Hand back" } ]}
      />
<section data-theme="paper" className="section-tight">
  <div className="container-x relative">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div className="line-top py-10 pr-6" data-reveal>
        <div className="counter text-[clamp(48px,6vw,88px)]">14d → 1d</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Evaluation cycle time</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="1">
        <div className="counter text-[clamp(48px,6vw,88px)]" data-count="3">0</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Internal data systems integrated</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="2">
        <div className="counter text-[clamp(48px,6vw,88px)]" data-count="100" data-suffix="%">0</div>
        <div className="muted text-[13.5px] mt-2 max-w-[24ch]">Outputs reproducible from logged inputs</div>
      </div>
      <div className="line-top py-10" data-reveal data-delay="3">
        <div className="counter text-[clamp(48px,6vw,88px)]" data-count="6">0</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Months from kickoff to production</div>
      </div>
    </div>
  </div>
</section>

<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>The brief</div>
        <h2 className="display-md" data-reveal data-delay="1">A risk team boxed in <span className="italic-accent font-serif">by its own process.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 muted text-[16.5px] leading-relaxed space-y-5">
        <p data-reveal>The bank's risk-modeling group was working with three different LLM providers across half a dozen production use cases. Every change — vendor swap, model upgrade, prompt revision — required a full evaluation pass. The pass took two weeks. Most of the two weeks was spent reassembling fixtures, re-running comparisons by hand, and writing the audit memo.</p>
        <p data-reveal data-delay="1">The result was that the team was either slow or unsafe. Either they took two weeks for every change, or they shipped without the eval pass and prayed the model risk function didn't notice. Neither was acceptable.</p>
        <p data-reveal data-delay="2">They came to us asking for a system that gave them the eval cadence they needed without compromising the audit trail.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>What we built</div>
        <h2 className="display-md" data-reveal data-delay="1">An evaluation harness <span className="italic-accent font-serif">inside the audit channel.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
          <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">A versioned fixture system</h3><p className="muted text-[15.5px] leading-relaxed">Every input the system has ever seen is captured, tagged, and replayable. New eval runs are diffs against prior runs.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Three internal data systems integrated</h3><p className="muted text-[15.5px] leading-relaxed">The harness pulls reference data directly from the bank's golden sources rather than copying it. Lineage is automatic.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Vendor LLM gateway integration</h3><p className="muted text-[15.5px] leading-relaxed">A single layer fronts the three model providers. Vendor swaps become a configuration change, not a code change.</p></div></li>
          <li data-reveal><div className="num">04</div><div><h3 className="display-xs mb-2">Audit-channel publishing</h3><p className="muted text-[15.5px] leading-relaxed">Eval results flow directly into the bank's existing model-risk audit channel. The MRM team reviews the same artifacts they were already reviewing.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">05</div><div><h3 className="display-xs mb-2">Drift and regression detection</h3><p className="muted text-[15.5px] leading-relaxed">Scheduled comparisons run nightly. The team learns about regressions from the dashboard, not from a customer.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">06</div><div><h3 className="display-xs mb-2">Operator runbook</h3><p className="muted text-[15.5px] leading-relaxed">A written runbook shipped with the system. Six months later, the bank's own engineers run the harness without us.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>The outcome</div>
        <h2 className="display-md" data-reveal data-delay="1">Faster cadence, stronger audit posture.</h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 muted text-[16.5px] leading-relaxed space-y-5">
        <p data-reveal>The eval cycle dropped from two weeks to one day. Vendor swaps that used to take a quarter are now done in a week.</p>
        <p data-reveal data-delay="1">More importantly, the audit posture is materially stronger. The MRM team has structured eval evidence for every model change going back to launch. The team that operates the system can answer a regulator's reproducibility question without preparation.</p>
        <p data-reveal data-delay="2">Six months after launch, Proxiant transitioned the system fully to the bank's own engineers. We continue on a quarterly retainer for evaluation methodology and red-team support.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Have a similar brief?</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Tell us where you are. We'll come back with a written shape and sized plan.</p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">Send a brief
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="/solutions/" className="btn btn-outline">See consulting</a>
        </div>
      </div>
    </div>
  </div>
</section>
      <SiteFooter />
    </div>
  );
}
