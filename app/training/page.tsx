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
<header data-theme="light" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32">
  <div className="page-stars"></div>
  <div className="hero-orbit" aria-hidden="true">
    <div className="hero-orbit-glow"></div>
    <span className="hero-orbit-dot"></span>
  </div>
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>PRACTICE / 03 — AI TRAINING</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Programs that turn into practice.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Hands-on AI training for engineering teams and senior leadership. Cohort-based,
          project-based, built around the systems your people are actually trying to ship.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-dark magnetic">Plan a program
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#programs" className="btn btn-outline">See the programs</a>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
        <div className="mesh aspect-[4/5] scanline relative">
          <div className="starfield" data-twinkles="20"></div>
          <div className="orbit-ring"></div>
          <div className="orbit-ring r2"></div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mb-3">TRAINING</div>
              <div className="font-serif italic text-[clamp(48px,6vw,96px)] text-white leading-none">03</div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mt-3">PRACTICE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Foundations", "Retrieval", "Agents", "Evaluate", "Govern", "Ship"]}
        eyebrow="What we ship into"
      />
{/* Why training */}
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Why training matters</div>
        <h2 className="display-md" data-reveal data-delay="1">
          The team that runs it <span className="italic-accent font-serif">is the system.</span>
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 space-y-6 muted text-[16px] leading-relaxed">
        <p data-reveal>
          Most AI initiatives don't fail in the model. They fail in the team that has to operate
          it. Engineers who never built a RAG pipeline get handed one and asked to make it
          reliable. Leaders making nine-figure platform decisions are working from vendor pitches
          and analyst reports.
        </p>
        <p data-reveal data-delay="1">
          Our training practice fixes that gap. We run cohort programs that give your engineering
          teams real production experience and your leadership team a working mental model. Each
          program ends with an artifact your organization keeps.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Programs */}
<section id="programs" data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>The programs</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Four formats. <span className="italic-accent font-serif">Same standard.</span>
        </h2>
      </div>
    </div>

    <div className="bento">
      <article className="b-6 card p-10" data-reveal>
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 01 · ENGINEERING</span>
          <span className="font-mono text-[12px] text-zinc-500">6–8 WEEKS</span>
        </div>
        <h3 className="display-sm mb-4">Production AI Bootcamp</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          A full cohort program for engineering teams shipping their first or second production AI
          system. Participants leave with a working pipeline they built, an evaluation harness they
          own, and runbooks for operating it.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Retrieval and RAG architecture</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Agent design and tool use</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Evaluation, regression, red-teaming</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Production observability</li>
        </ul>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="1">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 02 · LEADERSHIP</span>
          <span className="font-mono text-[12px] text-zinc-500">3 DAYS</span>
        </div>
        <h3 className="display-sm mb-4">Executive AI Intensive</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          Three days for senior leaders responsible for AI strategy. Working sessions, not slide
          decks. Participants leave with a written strategy, a portfolio map, and a vendor
          diligence framework calibrated to their industry.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Capability vs. capacity model</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Build / buy / partner framework</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Risk and governance basics</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Investment portfolio mapping</li>
        </ul>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="2">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 03 · CUSTOM</span>
          <span className="font-mono text-[12px] text-zinc-500">PER ENGAGEMENT</span>
        </div>
        <h3 className="display-sm mb-4">Custom curriculum</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          Designed for organizations with a specific stack, regulation, or platform decision in
          flight. We build the curriculum on your data, on your tools, with your real use cases.
          Not a recycled course.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Discovery on your stack and goals</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Curriculum design and review</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Cohort delivery, on-site or remote</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Post-program coaching</li>
        </ul>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="3">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 04 · WORKSHOP</span>
          <span className="font-mono text-[12px] text-zinc-500">HALF / FULL DAY</span>
        </div>
        <h3 className="display-sm mb-4">Workshops & briefings</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          Targeted formats for boards, leadership offsites, or specific teams. Pick a topic and we
          run a single intensive session that ends with a written takeaway document.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Board-level AI briefings</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Architecture deep dives</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Vendor / model evaluation labs</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Risk and red-team workshops</li>
        </ul>
      </article>
    </div>
  </div>
</section>

{/* Bootcamp curriculum — dark editorial list */}
<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Inside the bootcamp</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          What an engineer <span className="italic-accent font-serif">walks out with.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 self-end">
        <p className="lead" data-reveal data-delay="2">
          Six weekly modules plus a final capstone week. Each week is half lecture, half hands-on
          lab.
        </p>
      </div>
    </div>

    <ul className="editorial-list">
      <li data-reveal>
        <div className="num">WEEK / 01</div>
        <div>
          <h3 className="display-xs mb-2">Foundation models, in practice</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Tokenization, context windows, prompt design that actually works. Cost models. Vendor selection.</p>
        </div>
      </li>
      <li data-reveal data-delay="1">
        <div className="num">WEEK / 02</div>
        <div>
          <h3 className="display-xs mb-2">Retrieval & RAG</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Chunking strategies, embedding models, vector stores, and the failure modes that bite in production.</p>
        </div>
      </li>
      <li data-reveal data-delay="2">
        <div className="num">WEEK / 03</div>
        <div>
          <h3 className="display-xs mb-2">Agents & tool use</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Tool design, planning, multi-step reasoning, and the operating challenges of long-horizon tasks.</p>
        </div>
      </li>
      <li data-reveal>
        <div className="num">WEEK / 04</div>
        <div>
          <h3 className="display-xs mb-2">Evaluation & observability</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Eval harnesses, regression tests, drift detection, and how to know whether your system is still working.</p>
        </div>
      </li>
      <li data-reveal data-delay="1">
        <div className="num">WEEK / 05</div>
        <div>
          <h3 className="display-xs mb-2">Risk, governance, red-teaming</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Threat modeling for LLM systems, regulatory pattern recognition, and a practical red-team protocol.</p>
        </div>
      </li>
      <li data-reveal data-delay="2">
        <div className="num">WEEK / 06</div>
        <div>
          <h3 className="display-xs mb-2">Production & ops</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Deploy, monitor, version, and roll back. What an on-call rotation actually looks like for AI systems.</p>
        </div>
      </li>
      <li data-reveal>
        <div className="num" style={{ 'color': '#fff' }}>CAPSTONE</div>
        <div>
          <h3 className="display-xs mb-2">Ship the system</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Each team takes a real internal use case from brief to production deployment. The artifact is yours, the runbook is yours, the lessons are written down.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* Outcomes */}
<section data-theme="paper" className="section-tight">
  <div className="container-x">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div className="line-top py-10 pr-6" data-reveal>
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="6" data-suffix=" wks">0</div>
        <div className="muted text-[14px] mt-2 max-w-[20ch]">From bootcamp start to first production deploy</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="1">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="100" data-suffix="%">0</div>
        <div className="muted text-[14px] mt-2 max-w-[20ch]">Cohort completion rate across programs</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="2">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="3" data-suffix="x">0</div>
        <div className="muted text-[14px] mt-2 max-w-[24ch]">Engineer-to-shipped-system ratio post-program</div>
      </div>
      <div className="line-top py-10" data-reveal data-delay="3">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="12">0</div>
        <div className="muted text-[14px] mt-2 max-w-[20ch]">Months of post-program coaching</div>
      </div>
    </div>
  </div>
</section>

{/* Who */}
<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Who this is for</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Teams about to <span className="italic-accent font-serif">ship something real.</span>
        </h2>
      </div>
    </div>
    <div className="grid md:grid-cols-3 gap-3">
      <div className="card p-8" data-reveal>
        <div className="font-mono text-[11px] text-zinc-500 mb-4">01</div>
        <div className="display-xs mb-3">Enterprise engineering teams</div>
        <p className="muted text-[14.5px] leading-relaxed">First or second production AI system, working with regulated data, accountable to a real on-call rotation.</p>
      </div>
      <div className="card p-8" data-reveal data-delay="1">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">02</div>
        <div className="display-xs mb-3">Senior leadership</div>
        <p className="muted text-[14.5px] leading-relaxed">Boards, exec teams, and CIOs/CTOs making nine-figure platform decisions and needing a working mental model.</p>
      </div>
      <div className="card p-8" data-reveal data-delay="2">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">03</div>
        <div className="display-xs mb-3">Specialized functions</div>
        <p className="muted text-[14.5px] leading-relaxed">Risk, compliance, security, product. Teams that need to engage with AI work without becoming engineers.</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}

      <PinScroll
        eyebrow="Cohort arc"
        title="Capstone is a real production deploy."
        theme="light"
        words={[{ text: "Foundations" }, { text: "Retrieval", em: true }, { text: "Agents" }, { text: "Evaluate", em: true }, { text: "Govern" }, { text: "Ship", em: true }]}
      />

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Plan a program.</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Tell us about your team, your stack, and what you want them to be able to do at the end.
          We'll come back with a curriculum and a timeline.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">
            Talk to us
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
