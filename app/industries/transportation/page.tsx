import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transportation — Proxiant",
  description: "Routing, fleet operations, dispatch, and logistics decision support, auditable end to end.",
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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INDUSTRY / 08 — TRANSPORTATION</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>AI for routing, fleets, and dispatch.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Routing, fleet operations, dispatch, and logistics decision support for carriers, 3PLs, and shippers — built for environments where the system has to make a call within seconds and explain it later.</p>
      </div>
        <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
          <a href="/case-studies/fortune500-bank/" className="img-card aspect-[4/5] block">
            <img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80" alt="Logistics and freight at dusk" loading="lazy" />
            <div className="img-card-content">
              <span className="img-card-tag">TRANSPORTATION</span>
              <span className="img-card-title">In production.</span>
            </div>
          </a>
        </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Plan", "Dispatch", "Track", "Deliver", "Audit"]}
        eyebrow="Where we ship"
      />
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Where we ship</div>
        <h2 className="display-md" data-reveal data-delay="1">Six practical patterns <span className="italic-accent font-serif">for transportation.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
      <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Dispatch and routing</h3><p className="muted text-[15.5px] leading-relaxed">LLM-assisted dispatch decision support and exception triage.</p></div></li>
      <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Fleet operations</h3><p className="muted text-[15.5px] leading-relaxed">Driver, equipment, and fuel anomaly detection with operator-grade alerting.</p></div></li>
      <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Customer service</h3><p className="muted text-[15.5px] leading-relaxed">Shipper- and consignee-facing assistants for status, exceptions, and claims.</p></div></li>
      <li data-reveal data-delay="3"><div className="num">04</div><div><h3 className="display-xs mb-2">Yard and dock operations</h3><p className="muted text-[15.5px] leading-relaxed">Yard management decision support, dock scheduling, and slot optimization.</p></div></li>
      <li data-reveal data-delay="4"><div className="num">05</div><div><h3 className="display-xs mb-2">Safety and compliance</h3><p className="muted text-[15.5px] leading-relaxed">Incident write-up support, hours-of-service review, and regulatory submission drafting.</p></div></li>
      <li data-reveal data-delay="5"><div className="num">06</div><div><h3 className="display-xs mb-2">Pricing and procurement</h3><p className="muted text-[15.5px] leading-relaxed">Bid response support, lane analysis, and contract review.</p></div></li>
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
        <p data-reveal>FMCSA, DOT, and state operating regulations including hours-of-service and CSA scoring.</p>
        <p data-reveal data-delay="1">Customs and trade-compliance frameworks for international shipments — including HTS classification and denied-party screening contexts.</p>
        <p data-reveal data-delay="2">Customer-specific master service agreements that often define what data can move where.</p>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Operating arc"
        title="Built for dispatch speed."
        theme="light"
        words={[{ text: "Plan" }, { text: "Dispatch", em: true }, { text: "Track" }, { text: "Deliver", em: true }]}
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
