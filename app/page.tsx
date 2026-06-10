import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { SplineHero } from "@/components/site/spline-hero";
import { PinScroll } from "@/components/site/pin-scroll";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <header data-theme="light" className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden">
        <PageStars />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <div className="signal mb-9" data-reveal>
                <span className="signal-dot signal-dot-accent" />
                <span>Now taking H2 2026 engagements</span>
              </div>
              <h1 className="display-xl glow-accent" data-reveal-up-words>
                Practical AI for the enterprise.
              </h1>
              <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
                Proxiant is an AI-exclusive consultancy. We design, ship, and operate the AI systems
                that have to hold up under load, audit, and change.{" "}
                <span className="draw-line">Three practices, one bar.</span>
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal data-delay="3">
                <Link href="/contact/" className="btn btn-dark magnetic">
                  Start a project
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/solutions/" className="btn btn-outline">See our work</Link>
              </div>
            </div>
            <div className="lg:col-span-5 aspect-[4/5] lg:aspect-[5/6]" data-reveal-scale>
              <SplineHero />
            </div>
          </div>
        </div>
        <div className="container-x mt-24 lg:mt-40 flex items-end justify-between">
          <div className="font-mono text-[11px] tracking-[0.22em] text-zinc-500" data-reveal data-scramble>
            SCROLL · TO · EXPLORE
          </div>
          <div className="font-mono text-[11px] tracking-[0.22em] text-zinc-500" data-reveal data-delay="1">
            001 / 008
          </div>
        </div>
      </header>

      {/* Marquee */}
      <section data-theme="paper" className="section-tight border-y" style={{ borderColor: "var(--line)" }}>
        <div className="container-x">
          <div className="flex items-center gap-12 flex-wrap mb-10">
            <span className="eyebrow">Industries we ship into</span>
            <span className="muted text-[14.5px] hidden md:inline">
              Eight regulated industries · forty-plus engagements · one operating bar
            </span>
          </div>
          <div className="marquee">
            <div className="marquee-track">
              {[
                "Financial Services","Healthcare","Insurance","Manufacturing","Energy","Retail","Telecom","Transportation","Public Sector",
                "Financial Services","Healthcare","Insurance","Manufacturing","Energy","Retail","Telecom","Transportation","Public Sector",
              ].map((item, i) => (
                <span key={i} className="marquee-item flex items-center gap-12">
                  {item}
                  <span className="dot" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three practices */}
      <section data-theme="light" className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-24">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6" data-reveal>Three practices</div>
              <h2 className="display-lg" data-reveal data-delay="1">
                One operating bar, <span className="italic-accent font-serif">three ways in.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 self-end">
              <p className="lead" data-reveal data-delay="2">
                Each practice has its own engagement model, but they share the same standard for shipping
                software. Things in production are the things we measure ourselves on.
              </p>
            </div>
          </div>

          <div className="bento">
            <Link href="/solutions/" className="b-12 hover-line group" data-reveal>
              <div className="bg-elev card p-10 lg:p-14 grid lg:grid-cols-12 gap-10 items-end">
                <div className="lg:col-span-7">
                  <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-7">PRACTICE / 01</div>
                  <h3 className="display-md mb-6">AI Consulting</h3>
                  <p className="lead max-w-xl">
                    Strategy, architecture, build, and operate. We come in early and stay until the system is
                    observably working in your environment.
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-[15px] font-medium group-hover:translate-x-1 transition-transform">
                    Explore consulting
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="lg:col-span-4 lg:col-start-9">
                  <ul className="space-y-3 text-[14.5px]">
                    <li className="flex items-baseline gap-3 line-top pt-3"><span className="font-mono text-[11px] text-zinc-500">01</span><span>Strategy &amp; roadmap</span></li>
                    <li className="flex items-baseline gap-3 line-top pt-3"><span className="font-mono text-[11px] text-zinc-500">02</span><span>Architecture &amp; design</span></li>
                    <li className="flex items-baseline gap-3 line-top pt-3"><span className="font-mono text-[11px] text-zinc-500">03</span><span>RAG &amp; agent systems</span></li>
                    <li className="flex items-baseline gap-3 line-top pt-3"><span className="font-mono text-[11px] text-zinc-500">04</span><span>Evaluation &amp; ops</span></li>
                  </ul>
                </div>
              </div>
            </Link>

            <Link href="/labs/" className="b-6 hover-line group" data-reveal>
              <div className="card p-10 lg:p-12 h-full flex flex-col">
                <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-7">PRACTICE / 02</div>
                <h3 className="display-md mb-5">AI Labs</h3>
                <p className="muted text-[16px] leading-relaxed mb-8 flex-1">
                  Internal R&amp;D and product home. Where we keep practical knowledge ahead of client work,
                  and where things like ProxiAlpha get built and run.
                </p>
                <div className="flex items-center gap-3 text-[15px] font-medium group-hover:translate-x-1 transition-transform">
                  Explore labs
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/training/" className="b-6 hover-line group" data-reveal data-delay="1">
              <div className="card p-10 lg:p-12 h-full flex flex-col">
                <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-7">PRACTICE / 03</div>
                <h3 className="display-md mb-5">AI Training</h3>
                <p className="muted text-[16px] leading-relaxed mb-8 flex-1">
                  Corporate cohorts, open-enrollment courses, and 12-week expert bootcamps with PCAP
                  certification. Project-based, GPU-backed, built around the systems your people are
                  actually trying to ship.
                </p>
                <div className="flex items-center gap-3 text-[15px] font-medium group-hover:translate-x-1 transition-transform">
                  Explore training
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How we work — seamless rolling-pin between practices and stats */}
      <PinScroll
        eyebrow="How we work"
        title="One operating bar."
        theme="light"
        words={[
          { text: "Strategy" },
          { text: "Architecture", em: true },
          { text: "Build" },
          { text: "Evaluate", em: true },
          { text: "Operate" },
          { text: "Repeat", em: true },
        ]}
      />

      {/* Stats */}
      <section data-theme="paper" className="section-tight">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <div className="line-top py-10 pr-6" data-reveal>
              <div className="counter text-[clamp(56px,7vw,108px)]" data-count="40" data-suffix="+">0</div>
              <div className="muted text-[14px] mt-2 max-w-[18ch]">Years combined enterprise experience</div>
            </div>
            <div className="line-top py-10 pr-6" data-reveal data-delay="1">
              <div className="counter text-[clamp(56px,7vw,108px)]" data-count="9">0</div>
              <div className="muted text-[14px] mt-2 max-w-[18ch]">Industries with shipped systems</div>
            </div>
            <div className="line-top py-10 pr-6" data-reveal data-delay="2">
              <div className="counter text-[clamp(56px,7vw,108px)]" data-count="100" data-suffix="%">0</div>
              <div className="muted text-[14px] mt-2 max-w-[24ch]">Engagements still in production after handoff</div>
            </div>
            <div className="line-top py-10" data-reveal data-delay="3">
              <div className="counter text-[clamp(56px,7vw,108px)]" data-count="3">0</div>
              <div className="muted text-[14px] mt-2 max-w-[18ch]">Open-source labs projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section data-theme="dark" className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="display-xl glow-accent" data-reveal-up-words>Tell us about the problem.</h2>
              <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
                We respond within one business day. The first call is for shape, scope, and fit. No pitch deck.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal data-delay="3">
                <Link href="/contact/" className="btn btn-light magnetic">
                  Start the conversation
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/about/" className="btn btn-outline">About Proxiant</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
