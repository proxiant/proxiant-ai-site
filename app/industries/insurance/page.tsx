import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance — Proxiant",
  description: "Underwriting, claims triage, and agent assistance with a full decision trail. Defensible by default.",
};

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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INDUSTRY / 03 — INSURANCE</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Underwriting that explains itself.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Underwriting assistance, claims triage, agent enablement, and fraud signal review — designed for an industry where every decision has to be defensible to a regulator and a complaints process.</p>
      </div>
        <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
          <a href="/case-studies/fortune500-bank/" className="img-card aspect-[4/5] block">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80" alt="Stack of policy documents on a desk" loading="lazy" />
            <div className="img-card-content">
              <span className="img-card-tag">INSURANCE</span>
              <span className="img-card-title">In production.</span>
            </div>
          </a>
        </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Submission", "Underwrite", "Claim", "Pay", "Refer", "Document"]}
        eyebrow="Where we ship"
      />
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Where we ship</div>
        <h2 className="display-md" data-reveal data-delay="1">Six practical patterns <span className="italic-accent font-serif">for insurance.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
      <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Underwriting copilot</h3><p className="muted text-[15.5px] leading-relaxed">Submission summarization, missing-information detection, and reference to policy language with explicit traceability to the source documents.</p></div></li>
      <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Claims triage</h3><p className="muted text-[15.5px] leading-relaxed">First-notice-of-loss intake, severity routing, and document-pack preparation. Keeps adjuster judgment intact.</p></div></li>
      <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Agent and broker assistants</h3><p className="muted text-[15.5px] leading-relaxed">Quote-prep, suitability narratives, and product Q&A grounded in the carrier's own product library.</p></div></li>
      <li data-reveal data-delay="3"><div className="num">04</div><div><h3 className="display-xs mb-2">Fraud signal review</h3><p className="muted text-[15.5px] leading-relaxed">Investigator-facing assistants that summarize prior claims and surface anomalies without auto-deciding anything.</p></div></li>
      <li data-reveal data-delay="4"><div className="num">05</div><div><h3 className="display-xs mb-2">Policy and form drafting</h3><p className="muted text-[15.5px] leading-relaxed">Endorsement language, compliance review, and version control for carrier-specific form libraries.</p></div></li>
      <li data-reveal data-delay="5"><div className="num">06</div><div><h3 className="display-xs mb-2">Customer service</h3><p className="muted text-[15.5px] leading-relaxed">Member and policyholder service with disclosure handling, recording-aware transcription, and escalation rules.</p></div></li>
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
        <p data-reveal>State insurance department supervisory expectations on AI use, including the NAIC AI model bulletin and state-level adoption.</p>
        <p data-reveal data-delay="1">Fair lending and unfair-discrimination frameworks that apply to underwriting and claims decisions, with bias testing built into the evaluation harness.</p>
        <p data-reveal data-delay="2">Carrier MGA, MGU, and reinsurance contractual constraints that often dictate what data can move where.</p>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Operating arc"
        title="Defensible by default."
        theme="light"
        words={[{ text: "Submission" }, { text: "Underwrite", em: true }, { text: "Claim" }, { text: "Pay", em: true }]}
      />


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
