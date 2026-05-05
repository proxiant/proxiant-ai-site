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
    <a href="/industries/" className="muted text-[13px] mb-7 inline-flex items-center gap-2" data-reveal>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      All industries
    </a>
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INDUSTRY / 01 — FINANCIAL SERVICES</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>AI inside the audit trail.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          We build AI for banks, asset managers, and broker-dealers — the kind of organizations
          where every model has to clear model risk, every output has to be reproducible, and the
          audit channel was running long before AI showed up.
        </p>
      </div>
        <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
          <a href="/case-studies/fortune500-bank/" className="img-card aspect-[4/5] block">
            <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="Trading floor with computer screens and abstract data" loading="lazy" />
            <div className="img-card-content">
              <span className="img-card-tag">FINANCIAL · SERVICES</span>
              <span className="img-card-title">In production.</span>
            </div>
          </a>
        </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Risk model", "Audit", "Drift", "Sign-off", "Eval", "Document"]}
        eyebrow="What we ship into"
      />
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Where we ship</div>
        <h2 className="display-md" data-reveal data-delay="1">Six practical patterns <span className="italic-accent font-serif">for FS firms.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
          <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Model risk evaluation harnesses</h3><p className="muted text-[15.5px] leading-relaxed">Eval and regression frameworks calibrated to MRM expectations. Reproducible, traceable, auditor-ready.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Fraud and AML signal review</h3><p className="muted text-[15.5px] leading-relaxed">LLM-assisted triage for analyst queues. Reduces false-positive review time, keeps SAR integrity.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Regulatory documentation drafting</h3><p className="muted text-[15.5px] leading-relaxed">Drafting and refresh of model documentation, change records, and supervisory submissions.</p></div></li>
          <li data-reveal><div className="num">04</div><div><h3 className="display-xs mb-2">Research and trading desks</h3><p className="muted text-[15.5px] leading-relaxed">Internal research assistants over your filings, terminals, and analyst notes. Information-barrier aware.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">05</div><div><h3 className="display-xs mb-2">Operations automation</h3><p className="muted text-[15.5px] leading-relaxed">Reconciliation, exception handling, and trade-break investigation with humans firmly in the loop.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">06</div><div><h3 className="display-xs mb-2">Wealth and advisor tooling</h3><p className="muted text-[15.5px] leading-relaxed">Advisor-facing assistants, meeting prep, suitability narrative drafting, with full disclosure trail.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <a href="/case-studies/fortune500-bank/" className="card block p-10 lg:p-14 hover-line" data-reveal>
      <div className="grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-2 font-mono text-[11px] tracking-[0.14em] text-zinc-500">CASE STUDY</div>
        <div className="lg:col-span-7">
          <h3 className="display-md mb-4">Fortune 500 bank cuts model evaluation cycle from weeks to a day.</h3>
          <p className="muted text-[15.5px] leading-relaxed">
            Designed and built an evaluation harness for a global bank's risk-modeling group. Now
            ships evaluation results inside the same audit channel the bank already runs.
          </p>
        </div>
        <div className="lg:col-span-3 flex lg:justify-end items-center gap-3 text-[15px] font-medium">Read the study →</div>
      </div>
    </a>
  </div>
</section>

<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>What we know</div>
        <h2 className="display-md" data-reveal data-delay="1">Regulators we have built for.</h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 muted text-[16px] leading-relaxed space-y-5">
        <p data-reveal>SR 11-7 model risk programs at US bank holding companies. SS1/23 model risk principles for UK PRA-regulated firms. EBA guidelines for European banks.</p>
        <p data-reveal data-delay="1">FINRA, SEC, CFTC supervisory expectations on broker-dealer and asset-manager AI use, including the supervisory letters and rule proposals from 2024 onward.</p>
        <p data-reveal data-delay="2">If the auditor wants to see how the system makes a decision, we have built it that way from the first commit.</p>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Operating arc"
        title="Auditable end-to-end."
        theme="light"
        words={[{ text: "Models" }, { text: "Risk", em: true }, { text: "Audit" }, { text: "Sign-off", em: true }]}
      />


<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Have a regulated AI brief?</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Tell us where you are. We'll come back with a written shape.</p>
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
