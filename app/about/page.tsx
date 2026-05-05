import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>ABOUT PROXIANT</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>A senior team that does the work.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Proxiant runs lean. The partners who pitched the engagement are the partners on the
          engagement. We don't subcontract the work, and we don't promise things we have not built.
        </p>
      </div>
      <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
        <div className="mesh aspect-[4/5] scanline relative">
          <div className="starfield" data-twinkles="20"></div>
          <div className="orbit-ring"></div>
          <div className="orbit-ring r2"></div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mb-3">PROXIANT</div>
              <div className="font-serif italic text-[clamp(56px,7vw,112px)] text-white leading-none">2026</div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mt-3">SINCE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>



      <PinScroll
        eyebrow="Operating bar"
        meta="PRINCIPLES · IN · MOTION"
        intro="↳ How we run"
        outro="⏵ Senior on every engagement"
        words={[ { text: "Senior" }, { text: "Direct", em: true }, { text: "Honest" }, { text: "Hand it back", em: true } ]}
      />
{/* Principles */}
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
        <div className="eyebrow mb-6" data-reveal>How we work</div>
        <h2 className="display-md" data-reveal data-delay="1">
          Four principles <span className="italic-accent font-serif">we don't bend.</span>
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
          <li data-reveal>
            <div className="num">01</div>
            <div>
              <h3 className="display-xs mb-2">Senior on every engagement.</h3>
              <p className="muted text-[15.5px] leading-relaxed">
                The people who scoped the work are the people on the work. No staff augmentation,
                no offshore handoff after kickoff. If a partner cannot be on the engagement, we say
                no.
              </p>
            </div>
          </li>
          <li data-reveal data-delay="1">
            <div className="num">02</div>
            <div>
              <h3 className="display-xs mb-2">Production is the bar.</h3>
              <p className="muted text-[15.5px] leading-relaxed">
                A working slide deck is not a working system. We measure ourselves on what survives
                in your environment after we leave, with your operators running it.
              </p>
            </div>
          </li>
          <li data-reveal data-delay="2">
            <div className="num">03</div>
            <div>
              <h3 className="display-xs mb-2">Honest about what AI does.</h3>
              <p className="muted text-[15.5px] leading-relaxed">
                Some problems are model problems. Most are data, integration, or process problems
                wearing an AI label. We tell you which one yours is, even when that costs us scope.
              </p>
            </div>
          </li>
          <li data-reveal data-delay="3">
            <div className="num">04</div>
            <div>
              <h3 className="display-xs mb-2">Hand the keys back cleanly.</h3>
              <p className="muted text-[15.5px] leading-relaxed">
                We pair with your engineers, write runbooks, and document trade-offs as we go. The
                end state is a system your team owns and can change without us.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Team */}
<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>The partners</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Three people. <span className="italic-accent font-serif">One bar.</span>
        </h2>
      </div>
    </div>

    <div className="grid lg:grid-cols-3 gap-3">
      <article className="card overflow-hidden" data-reveal>
        <div className="mesh aspect-[4/5]">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-serif italic text-[clamp(120px,14vw,180px)] text-white leading-none">PR</span>
          </div>
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white text-[11px] font-mono">
            <span className="opacity-80">FOUNDER</span><span className="opacity-80">CEO</span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="display-sm mb-1">Pavan R</h3>
          <div className="muted text-[13px] mb-5 font-mono tracking-[0.08em]">FOUNDER & CEO</div>
          <p className="text-[14.5px] leading-relaxed mb-6">
            Pavan founded Proxiant after two decades architecting systems for regulated industries.
            He sets the engagement bar, owns client relationships, and stays close to the technical
            work.
          </p>
          <ul className="space-y-2 text-[13.5px] muted">
            <li className="line-top pt-2.5">→ Strategy & architecture</li>
            <li className="line-top pt-2.5">→ Regulated industry experience</li>
            <li className="line-top pt-2.5">→ Client engagement</li>
          </ul>
        </div>
      </article>

      <article className="card overflow-hidden" data-reveal data-delay="1">
        <div className="mesh aspect-[4/5]">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-serif italic text-[clamp(120px,14vw,180px)] text-white leading-none">AL</span>
          </div>
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white text-[11px] font-mono">
            <span className="opacity-80">PARTNER</span><span className="opacity-80">DELIVERY</span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="display-sm mb-1">Anthony L</h3>
          <div className="muted text-[13px] mb-5 font-mono tracking-[0.08em]">PARTNER</div>
          <p className="text-[14.5px] leading-relaxed mb-6">
            Anthony leads engineering and delivery. He sets the bar on system reliability,
            evaluation rigor, and the line between research-grade and production-grade. Build
            engagements report to him.
          </p>
          <ul className="space-y-2 text-[13.5px] muted">
            <li className="line-top pt-2.5">→ Engineering & delivery</li>
            <li className="line-top pt-2.5">→ Evaluation systems</li>
            <li className="line-top pt-2.5">→ Production reliability</li>
          </ul>
        </div>
      </article>

      <article className="card overflow-hidden" data-reveal data-delay="2">
        <div className="mesh aspect-[4/5]">
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-serif italic text-[clamp(120px,14vw,180px)] text-white leading-none">VR</span>
          </div>
          <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-white text-[11px] font-mono">
            <span className="opacity-80">PARTNER</span><span className="opacity-80">RESEARCH</span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="display-sm mb-1">Vasanth R</h3>
          <div className="muted text-[13px] mb-5 font-mono tracking-[0.08em]">PARTNER</div>
          <p className="text-[14.5px] leading-relaxed mb-6">
            Vasanth leads research and the training practice. He builds the curriculum that turns
            engineering teams into AI-native teams, and runs the cohort programs end to end.
          </p>
          <ul className="space-y-2 text-[13.5px] muted">
            <li className="line-top pt-2.5">→ Research & labs</li>
            <li className="line-top pt-2.5">→ Training programs</li>
            <li className="line-top pt-2.5">→ Cohort facilitation</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</section>

{/* Origin */}
<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>The origin</div>
        <h2 className="display-md" data-reveal data-delay="1">
          Built on the work, <span className="italic-accent font-serif">not the slide deck.</span>
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 space-y-6 muted text-[16.5px] leading-relaxed">
        <p data-reveal>
          Proxiant was founded by people who had spent years cleaning up after AI projects that
          looked great in proposals and fell apart in production. The pattern was familiar: vague
          briefs, oversized teams, undersized evaluation, and hand-offs that nobody could operate.
        </p>
        <p data-reveal data-delay="1">
          We built Proxiant to do this differently. Senior people, small teams, written
          architecture, real evaluation, and a hand-off your operators can actually run.
        </p>
        <p data-reveal data-delay="2">
          Three practices — Consulting, Labs, Training — share the same operating bar. Consulting
          ships the work. Labs keeps practical knowledge ahead of client work. Training brings the
          same standard to the teams who will run AI long after we're gone.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Stats */}
<section data-theme="paper" className="section-tight">
  <div className="container-x">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div className="line-top py-10 pr-6" data-reveal>
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="40" data-suffix="+">0</div>
        <div className="muted text-[14px] mt-2 max-w-[18ch]">Years combined experience</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="1">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="9">0</div>
        <div className="muted text-[14px] mt-2 max-w-[18ch]">Industries shipped into</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="2">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="100" data-suffix="%">0</div>
        <div className="muted text-[14px] mt-2 max-w-[24ch]">Engagements running post-handoff</div>
      </div>
      <div className="line-top py-10" data-reveal data-delay="3">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="3">0</div>
        <div className="muted text-[14px] mt-2 max-w-[18ch]">Open-source labs projects</div>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Want to work together?</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Send a brief. We respond within one business day, and the first call is a fit
          conversation, not a sales call.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">
            Contact us
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
