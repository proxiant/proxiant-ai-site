import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";

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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INDUSTRY / 05 — ENERGY</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>AI for grids, assets, and decisions.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Grid optimization, asset performance, demand forecasting, and operations support for utilities, renewable operators, and oil and gas — all with the operating discipline that critical infrastructure demands.</p>
      </div>
        <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
          <a href="/case-studies/fortune500-bank/" className="img-card aspect-[4/5] block">
            <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80" alt="High-voltage power lines silhouetted against sky" loading="lazy" />
            <div className="img-card-content">
              <span className="img-card-tag">ENERGY</span>
              <span className="img-card-title">In production.</span>
            </div>
          </a>
        </div>
    </div>
  </div>
</header>

<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Where we ship</div>
        <h2 className="display-md" data-reveal data-delay="1">Six practical patterns <span className="italic-accent font-serif">for energy.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
      <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Asset performance management</h3><p className="muted text-[15.5px] leading-relaxed">LLM-assisted root-cause analysis on equipment events, with full traceability to historian data and maintenance records.</p></div></li>
      <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Outage and incident management</h3><p className="muted text-[15.5px] leading-relaxed">Drafting of customer communications, regulator notifications, and post-event reports.</p></div></li>
      <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Demand and load forecasting</h3><p className="muted text-[15.5px] leading-relaxed">Forecasting tooling integrated with weather, market, and historical demand.</p></div></li>
      <li data-reveal data-delay="3"><div className="num">04</div><div><h3 className="display-xs mb-2">Field operations</h3><p className="muted text-[15.5px] leading-relaxed">Field-engineer assistants for procedure lookup, work-order context, and documentation.</p></div></li>
      <li data-reveal data-delay="4"><div className="num">05</div><div><h3 className="display-xs mb-2">Trading and dispatch</h3><p className="muted text-[15.5px] leading-relaxed">Decision-support tools for control rooms with explicit human-in-the-loop boundaries.</p></div></li>
      <li data-reveal data-delay="5"><div className="num">06</div><div><h3 className="display-xs mb-2">Regulatory and ESG reporting</h3><p className="muted text-[15.5px] leading-relaxed">Drafting and refresh of regulatory filings and sustainability disclosures with reference traceability.</p></div></li>
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
        <p data-reveal>NERC CIP, FERC reliability standards, and regional ISO operational protocols. We build with the bulk-electric-system audit trail in mind.</p>
        <p data-reveal data-delay="1">OSHA, EPA, and state-level operating regulations for upstream and midstream oil and gas.</p>
        <p data-reveal data-delay="2">Utility commission supervisory expectations on customer-facing AI use and on AI in dispatch and outage decisions.</p>
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
