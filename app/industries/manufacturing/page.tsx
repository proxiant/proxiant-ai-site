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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INDUSTRY / 04 — MANUFACTURING</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>AI on the floor.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">Quality inspection, predictive maintenance, line operations, and documentation — designed for environments where the system has to keep working when the network goes down.</p>
      </div>
        <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
          <a href="/case-studies/fortune500-bank/" className="img-card aspect-[4/5] block">
            <img src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=80" alt="Industrial machinery on a production floor" loading="lazy" />
            <div className="img-card-content">
              <span className="img-card-tag">MANUFACTURING</span>
              <span className="img-card-title">In production.</span>
            </div>
          </a>
        </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Sense", "Predict", "Inspect", "Document", "Improve"]}
        eyebrow="What we ship into"
      />
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Where we ship</div>
        <h2 className="display-md" data-reveal data-delay="1">Six practical patterns <span className="italic-accent font-serif">for manufacturing.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
      <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Quality inspection assistants</h3><p className="muted text-[15.5px] leading-relaxed">Visual and document-based inspection augmentation for incoming, in-process, and outgoing quality.</p></div></li>
      <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Predictive maintenance</h3><p className="muted text-[15.5px] leading-relaxed">Anomaly detection on equipment telemetry with operator-grade alerting and root-cause workflows.</p></div></li>
      <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Line ops and shift handoff</h3><p className="muted text-[15.5px] leading-relaxed">Shift summarization, exception reporting, and hand-off documentation that survives the operator turning off.</p></div></li>
      <li data-reveal data-delay="3"><div className="num">04</div><div><h3 className="display-xs mb-2">Standard work and SOPs</h3><p className="muted text-[15.5px] leading-relaxed">Search and refresh of standard work documents, training materials, and corrective-action records.</p></div></li>
      <li data-reveal data-delay="4"><div className="num">05</div><div><h3 className="display-xs mb-2">Supply chain and procurement</h3><p className="muted text-[15.5px] leading-relaxed">Supplier document review, change-order analysis, and obsolescence tracking.</p></div></li>
      <li data-reveal data-delay="5"><div className="num">06</div><div><h3 className="display-xs mb-2">EHS and compliance</h3><p className="muted text-[15.5px] leading-relaxed">Incident write-up assistance, near-miss synthesis, and regulatory submission drafting.</p></div></li>
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
        <p data-reveal>Plants where IT and OT networks are intentionally separated and where the system has to work when neither cloud nor mobile data are available. The architectures we ship reflect that.</p>
        <p data-reveal data-delay="1">ISO 9001, IATF 16949, and industry-specific quality systems that constrain what counts as a valid record.</p>
        <p data-reveal data-delay="2">Regulated environments such as medical device manufacturing (21 CFR Part 820, EU MDR) and food/pharma (cGMP) where every system change is a documented change.</p>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Operating arc"
        title="Floor-friendly architecture."
        theme="light"
        words={[{ text: "Sense" }, { text: "Predict", em: true }, { text: "Inspect" }, { text: "Document", em: true }]}
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
