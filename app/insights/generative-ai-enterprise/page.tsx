import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generative AI in the enterprise — Proxiant Insights",
  description: "A field view from regulated-industry programs: where the value sits, where the failure modes are, and what the next twelve months look like.",
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
    <a href="/insights/" className="muted text-[13px] mb-7 inline-flex items-center gap-2" data-reveal>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      All insights
    </a>
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-9">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INSIGHT — STRATEGY</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Generative AI in the enterprise: what actually moves</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">A field view from regulated-industry programs. Where the value sits, where the failure modes are, and what the next twelve months look like for organizations that have to ship.</p>
      </div>
    </div>
  </div>
</header>





      <PageMarquee
        items={["Documents", "Workflows", "Eval", "Ship"]}
        eyebrow="The arc"
      />
<section data-theme="light" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 01</div>
        <h2 className="display-md" data-reveal>The pattern across programs</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>Most enterprises we work with have moved past the demo phase. The conversations are about deployment, evaluation, and operating discipline, not about whether AI is real.</p>
        <p data-reveal data-delay="1">What survives the deployment is rarely the most exciting part of the original brief. The wins compound around document-heavy workflows, evaluation tooling, and operator-grade interfaces. The losses tend to be projects where the model was the focus and the system around it was an afterthought.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 02</div>
        <h2 className="display-md" data-reveal>Where the value sits</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>Document-heavy workflows are still where most measurable wins land. Risk reviews, regulatory drafting, claims documentation, research synthesis. The reason is straightforward: the existing process is text in, text out, and the value of getting it slightly wrong is bounded.</p>
        <p data-reveal data-delay="1">Operator augmentation is the second cluster. Investigators, analysts, dispatchers, customer-service agents. The system raises the floor, but a person still owns the call.</p>
        <p data-reveal data-delay="2">Evaluation tooling is the unsung win. Teams that build a real eval harness ship faster, fix faster, and survive auditor scrutiny. Teams that don't, don't.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 03</div>
        <h2 className="display-md" data-reveal>Where the failure modes show up</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>We see three recurring failure modes. First, treating retrieval as solved when retrieval quality is the bottleneck. Second, deferring evaluation until launch, by which point regression is invisible. Third, hand-off models that don't survive the operating team — the system technically works, but nobody can change it.</p>
        <p data-reveal data-delay="1">These are operational failures, not model failures. They show up regardless of vendor or model choice.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 04</div>
        <h2 className="display-md" data-reveal>The next twelve months</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>We expect three shifts. Agent systems mature beyond demoware in a handful of narrow domains. Evaluation and observability tooling becomes table stakes for regulated industries. Operator-grade UI emerges as a serious investment area, distinct from end-customer interfaces.</p>
        <p data-reveal data-delay="1">None of this requires new model capability. It requires the operational discipline to ship.</p>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Field view"
        title="What actually moves."
        theme="light"
        words={[{ text: "Documents" }, { text: "Workflows", em: true }, { text: "Eval" }, { text: "Ship", em: true }]}
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
