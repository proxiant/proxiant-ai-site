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
    <a href="/industries/" className="muted text-[13px] mb-7 inline-flex items-center gap-2" data-reveal>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      All industries
    </a>
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INDUSTRY / 02 — HEALTHCARE</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>AI that respects the patient.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Clinical workflow tools, claims, prior authorization, and documentation assistance — built to fit inside HIPAA, the existing EMR, and the way clinicians actually work.</p>
      </div>
        <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
          <a href="/case-studies/fortune500-bank/" className="img-card aspect-[4/5] block">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80" alt="Modern hospital corridor with clinical lighting" loading="lazy" />
            <div className="img-card-content">
              <span className="img-card-tag">HEALTHCARE</span>
              <span className="img-card-title">In production.</span>
            </div>
          </a>
        </div>
    </div>
  </div>
</header>



      <PinScroll
        eyebrow="What we ship"
        meta="DOMAIN · LOOP"
        intro="↳ Operating arc"
        outro="⏵ Auditable end-to-end"
        words={[ { text: "Charts" }, { text: "Claims", em: true }, { text: "Triage" }, { text: "Hand-off", em: true } ]}
      />
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Where we ship</div>
        <h2 className="display-md" data-reveal data-delay="1">Six practical patterns <span className="italic-accent font-serif">for healthcare.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
      <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Clinical documentation assistants</h3><p className="muted text-[15.5px] leading-relaxed">Real-time and asynchronous documentation help that integrates with the EMR. Reduces note time, surfaces what the chart says back to the clinician.</p></div></li>
      <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Prior authorization</h3><p className="muted text-[15.5px] leading-relaxed">LLM-assisted PA submission and appeal drafting. Works against payer-specific templates and policy rules.</p></div></li>
      <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Claims and revenue cycle</h3><p className="muted text-[15.5px] leading-relaxed">Coding suggestion, denial root-cause review, and appeal package drafting with clinical context preserved.</p></div></li>
      <li data-reveal data-delay="3"><div className="num">04</div><div><h3 className="display-xs mb-2">Patient communication</h3><p className="muted text-[15.5px] leading-relaxed">Triage-aware assistants for member services and care management, with escalation rules and PHI handling baked in.</p></div></li>
      <li data-reveal data-delay="4"><div className="num">05</div><div><h3 className="display-xs mb-2">Operations and scheduling</h3><p className="muted text-[15.5px] leading-relaxed">Capacity, no-show, and routing assistance for ambulatory and acute settings.</p></div></li>
      <li data-reveal data-delay="5"><div className="num">06</div><div><h3 className="display-xs mb-2">Research and population health</h3><p className="muted text-[15.5px] leading-relaxed">Cohort discovery and chart abstraction tooling for research and quality teams.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Context</div>
        <h2 className="display-md" data-reveal data-delay="1">What we know <span className="italic-accent font-serif">about your world.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 muted text-[16px] leading-relaxed space-y-5">
        <p data-reveal>HIPAA, HITECH, and state-level health privacy. We build with the assumption that the auditor will read the prompt log.</p>
        <p data-reveal data-delay="1">21st Century Cures Act information blocking rules, FDA guidance on clinical decision support, and the ONC certification context for systems that touch the EMR.</p>
        <p data-reveal data-delay="2">Payer-specific policy frameworks for the half of healthcare spending that is reimbursement, not clinical decision-making.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Have a brief?</h2>
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
