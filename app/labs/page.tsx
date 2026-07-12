import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { SparkleField } from "@/components/site/sparkle-field";
import { LabsViz } from "@/components/site/hero-viz";
import { AlphaViz, TauViz } from "@/components/site/lab-product-viz";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Labs — Proxiant",
  description: "Proxiant Labs is our internal R&D arm. Research that turns into product, run on our own infrastructure under the same standard we sell to clients.",
};

export default function Page() {
  return (
    <div>
      <SiteHeader />
<header data-theme="light" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32">
        <SparkleField id="sparkles-labs-page" />
  <div className="page-stars"></div>
  <div className="hero-orbit" aria-hidden="true">
    <div className="hero-orbit-glow"></div>
    <span className="hero-orbit-dot"></span>
  </div>
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>PRACTICE / 02 — AI LABS</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Research that turns into product.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Labs is our internal R&D arm. We use it to keep practical knowledge ahead of client work,
          and the work occasionally ships as standalone systems we run ourselves.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="#products" className="btn btn-dark magnetic">See the products
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#research" className="btn btn-outline">Research areas</a>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 aspect-[4/5]" data-reveal-scale>
        <LabsViz />
      </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Research", "Spike", "Eval", "Ship", "Operate", "Open-source"]}
        eyebrow="The lab loop"
      />
{/* Products — paper */}
<section id="products" data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Lab products</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Things we built <span className="italic-accent font-serif">that we still run.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 self-end">
        <p className="lead" data-reveal data-delay="2">
          Not demos. Running systems on our own infrastructure, under the same standard we sell to
          clients.
        </p>
      </div>
    </div>

    <div className="bento">
      <a href="/proxitrades/" className="b-6 hover-line group" data-reveal>
        <div className="card overflow-hidden h-full flex flex-col">
          <div className="aspect-[16/10] relative">
            <AlphaViz />
          </div>
          <div className="p-10 flex-1 flex flex-col">
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-5">LAB · PRODUCT</div>
            <h3 className="display-sm mb-4">ProxiTrades</h3>
            <p className="muted text-[15.5px] leading-relaxed mb-8 flex-1">
              Agent-driven trading platform. Walk-forward strategy research, paper trading,
              a live cockpit, and daily published leads with results. ProxiAlpha folded in.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-7">
              <div className="text-left"><div className="font-mono text-[11px] text-zinc-500 mb-1">STRATEGIES</div><div className="font-serif text-[28px]">12+</div></div>
              <div className="text-left"><div className="font-mono text-[11px] text-zinc-500 mb-1">UPTIME</div><div className="font-serif text-[28px]">99.9%</div></div>
              <div className="text-left"><div className="font-mono text-[11px] text-zinc-500 mb-1">EVALS</div><div className="font-serif text-[28px]">Daily</div></div>
            </div>
            <div className="flex items-center gap-3 text-[15px] font-medium group-hover:translate-x-1 transition-transform">
              See the product
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </a>

      <div className="b-6" data-reveal data-delay="1">
        <div className="card overflow-hidden h-full flex flex-col">
          <div className="aspect-[16/10] relative opacity-60">
            <TauViz />
          </div>
          <div className="p-10 flex-1 flex flex-col">
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-5">LAB · IN PROGRESS</div>
            <h3 className="display-sm mb-4">More to come</h3>
            <p className="muted text-[15.5px] leading-relaxed mb-8 flex-1">
              The next lab product is already on the bench. Watch this space, or follow the
              daily ProxiTrades page to see the research engine at work in the meantime.
            </p>
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">SHIPPING WHEN IT EARNS ITS CARD</div>
          </div>
        </div>
      </div>

      <a href="/terminal/" className="b-12 hover-line group" data-reveal>
        <div className="card overflow-hidden grid lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-10 lg:p-14 order-2 lg:order-1">
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-5">LAB · LIVE DASHBOARD</div>
            <h3 className="display-md mb-4">ProxiTrades Terminal</h3>
            <p className="muted text-[16px] leading-relaxed mb-8">
              Public-readable view of the trading research platform. Live signals, walk-forward
              folds, portfolio metrics, and a candlestick view of every active strategy. Useful
              both as a working dashboard and as a reference for how we build operator-grade UI.
            </p>
            <div className="flex items-center gap-3 text-[15px] font-medium group-hover:translate-x-1 transition-transform">
              Open the terminal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 bg-dark p-8 font-mono text-[12.5px] leading-relaxed">
            <div className="flex items-center gap-2 mb-4 text-zinc-500"><span className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span><span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span><span className="ml-3 text-zinc-600">terminal · live</span></div>
            <div className="text-zinc-400"><span className="text-zinc-600">$</span> <span style={{ 'color': '#c084fc' }}>proxi</span> status</div>
            <div style={{ 'color': '#86efac' }}>  ● strategy_v7      live   sharpe 1.42</div>
            <div style={{ 'color': '#86efac' }}>  ● mean_reversion   paper  sharpe 0.91</div>
            <div style={{ 'color': '#fbbf24' }}>  ◐ momentum_x       eval   pending</div>
            <div className="text-zinc-500">  · last update 23s ago</div>
            <div className="mt-3 text-zinc-400"><span className="text-zinc-600">$</span> <span style={{ 'color': '#c084fc' }}>proxi</span> tail signals --strategy strategy_v7</div>
            <div className="text-zinc-300">  10:42:18  BUY  AAPL   conf=0.83  size=0.7%</div>
            <div className="text-zinc-300">  10:43:51  HOLD MSFT   conf=0.61</div>
            <div className="text-zinc-300">  10:45:09  SELL NVDA   conf=0.79  size=1.2%</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</section>

{/* Research areas — dark */}
<section id="research" data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Research areas</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Where we <span className="italic-accent font-serif">spend our time.</span>
        </h2>
      </div>
    </div>

    <ul className="editorial-list">
      <li data-reveal>
        <div className="num">AREA / 01</div>
        <div>
          <h3 className="display-xs mb-2">Agent systems</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Tool design, planning, multi-step reasoning, long-horizon tasks. The hard parts of agent reliability.</p>
        </div>
      </li>
      <li data-reveal data-delay="1">
        <div className="num">AREA / 02</div>
        <div>
          <h3 className="display-xs mb-2">Evaluation tooling</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Eval harnesses, regression tests, drift detection. The instrumentation that keeps systems honest in production.</p>
        </div>
      </li>
      <li data-reveal data-delay="2">
        <div className="num">AREA / 03</div>
        <div>
          <h3 className="display-xs mb-2">Quantitative trading</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Walk-forward research, regime detection, ensemble strategies. ProxiTrades is our test bed.</p>
        </div>
      </li>
      <li data-reveal>
        <div className="num">AREA / 04</div>
        <div>
          <h3 className="display-xs mb-2">Retrieval & RAG</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Chunking, embeddings, hybrid search, and the failure modes that show up at scale.</p>
        </div>
      </li>
      <li data-reveal data-delay="1">
        <div className="num">AREA / 05</div>
        <div>
          <h3 className="display-xs mb-2">Red-teaming</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Adversarial probes, prompt injection, jailbreak defenses, and a working protocol that ops teams can run.</p>
        </div>
      </li>
      <li data-reveal data-delay="2">
        <div className="num">AREA / 06</div>
        <div>
          <h3 className="display-xs mb-2">Operator-grade UI</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">UIs for the people running AI in production. Dense, fast, opinionated. The terminal is the running example.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* Why we run a lab */}
<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Why we run a lab</div>
        <h2 className="display-md" data-reveal data-delay="1">
          Practitioners <span className="italic-accent font-serif">teach better.</span>
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 space-y-6 muted text-[16px] leading-relaxed">
        <p data-reveal>A consulting team that doesn't build will eventually start advising from secondhand knowledge. Once that happens, you start hearing things that sound right and don't survive contact with production.</p>
        <p data-reveal data-delay="1">Labs is how we keep that from happening. We run our own systems, on our own infrastructure, under the same operating standard we sell to clients. The lessons from those systems show up in client engagements directly.</p>
        <p data-reveal data-delay="2">The training practice draws from the same well — the curriculum is built on what we've actually shipped, not on what's currently trending.</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}

      <PinScroll
        eyebrow="Lab loop"
        title="Research that turns into product."
        theme="light"
        words={[{ text: "Research" }, { text: "Spike", em: true }, { text: "Eval" }, { text: "Ship", em: true }, { text: "Operate" }, { text: "Open", em: true }]}
      />

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Want to collaborate?</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Labs occasionally takes on research collaborations and partnerships when the work is a fit.
          Tell us what you have in mind.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">
            Get in touch
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
