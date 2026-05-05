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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INSIGHT — ORGANIZATION</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Scaling AI teams without scaling chaos</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">How to grow an AI engineering team beyond the founding cohort without losing the discipline that made the first system work.</p>
      </div>
    </div>
  </div>
</header>





      <PageMarquee
        items={["Senior", "Document", "Pair", "Rotate"]}
        eyebrow="What we ship into"
      />
<section data-theme="light" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 01</div>
        <h2 className="display-md" data-reveal>The founding-team trap</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>Most enterprise AI teams form around two or three exceptional engineers who ship something useful. The system works because those engineers care about the work and have full context.</p>
        <p data-reveal data-delay="1">When the org tries to scale that team — five people, ten people, thirty — what tends to break is exactly the discipline that made the first system work. New people get assigned to extend the system without ever building one. The founding engineers get pulled into review, then management, then frustration.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 02</div>
        <h2 className="display-md" data-reveal>What actually scales</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>What scales is documented standard work, not headcount. Eval harnesses that anyone can run. Architecture decision records that anyone can read. Runbooks that survive on-call rotation.</p>
        <p data-reveal data-delay="1">The teams that scale well treat documentation as load-bearing, not optional. The teams that don't end up with a small number of irreplaceable people and a large number of people waiting on them.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 03</div>
        <h2 className="display-md" data-reveal>Hiring patterns that work</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>Hire for system-thinking, not just model fluency. Most production AI work is integration, evaluation, and operations. Engineers who have shipped large systems before, even non-AI systems, tend to outperform engineers who only know the model side.</p>
        <p data-reveal data-delay="1">Pair junior engineers with seniors on real production work, not on isolated experiments. The skill that matters most — operating a real system — only develops in contact with one.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">SECTION / 04</div>
        <h2 className="display-md" data-reveal>Operating cadence</h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 muted text-[17px] leading-relaxed space-y-5">
        <p data-reveal>A weekly evaluation review meeting, with named owners and written notes, does more for system reliability than any individual engineer. The cadence is the discipline.</p>
        <p data-reveal data-delay="1">An on-call rotation that includes the people who built the system keeps research-grade decisions honest. Engineers who never carry a pager build differently.</p>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Team patterns"
        title="Org as the system."
        theme="light"
        words={[{ text: "Senior" }, { text: "Document", em: true }, { text: "Pair" }, { text: "Rotate", em: true }]}
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
