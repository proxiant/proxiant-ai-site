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
    <a href="/labs/" className="muted text-[13px] mb-7 inline-flex items-center gap-2" data-reveal>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to labs
    </a>
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>LAB · PRODUCT · EXECUTION</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>ProxiTrades.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          The execution and routing layer that ProxiAlpha sits on top of. TradingView webhook
          receiver, strategy registry, paper and live brokers, full audit log. Built so the same
          code runs in paper and live with one configuration change.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="https://github.com/proxiant/ProxiTrades" target="_blank" rel="noopener" className="btn btn-dark magnetic">
            View on GitHub
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="/proxialpha/" className="btn btn-outline">See ProxiAlpha</a>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9" data-reveal-scale>
        <div className="mesh aspect-[4/5] scanline relative">
          <div className="starfield" data-twinkles="20"></div>
          <div className="orbit-ring"></div>
          <div className="orbit-ring r2"></div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mb-3">PROXITRADES</div>
              <div className="font-serif italic text-[clamp(120px,14vw,200px)] text-white leading-none">τ</div>
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/70 mt-3">EXECUTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>



      <PinScroll
        eyebrow="Pipeline"
        meta="SIGNAL · TO · FILL"
        intro="↳ Execution path"
        outro="⏵ Same code in paper and live"
        words={[ { text: "Webhook" }, { text: "Validate", em: true }, { text: "Route" }, { text: "Fill", em: true }, { text: "Audit" } ]}
      />
<section data-theme="paper" className="section-tight">
  <div className="container-x relative">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div className="line-top py-10 pr-6" data-reveal>
        <div className="counter text-[clamp(48px,6vw,88px)]" data-count="3">0</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Brokers integrated</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="1">
        <div className="counter text-[clamp(48px,6vw,88px)]">~80ms</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Webhook to first order</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="2">
        <div className="counter text-[clamp(48px,6vw,88px)]">Full</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Audit log of every fill and operator action</div>
      </div>
      <div className="line-top py-10" data-reveal data-delay="3">
        <div className="counter text-[clamp(48px,6vw,88px)]">1</div>
        <div className="muted text-[13.5px] mt-2 max-w-[24ch]">Code path for paper and live</div>
      </div>
    </div>
  </div>
</section>

<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>What ProxiTrades is</div>
        <h2 className="display-md" data-reveal data-delay="1">The execution layer <span className="italic-accent font-serif">behind ProxiAlpha.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 muted text-[16.5px] leading-relaxed space-y-5">
        <p data-reveal>ProxiTrades is the part of the platform that actually moves orders. Webhook receiver, strategy registry, broker abstraction, and audit. ProxiAlpha is the brain; ProxiTrades is the body.</p>
        <p data-reveal data-delay="1">It is open-sourced because the patterns it implements — broker abstraction, deterministic order construction, audited operator actions — are the patterns we want to see in production trading systems generally.</p>
        <p data-reveal data-delay="2">If you want to read the strategy methodology and the v4-to-v5 lessons, those live in the strategies registry and design notes in the repo.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>The pieces</div>
        <h2 className="display-md" data-reveal data-delay="1">Six modules <span className="italic-accent font-serif">that compose.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
          <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Webhook receiver</h3><p className="muted text-[15.5px] leading-relaxed">TradingView and generic webhook intake with HMAC verification, replay protection, and per-strategy tokens.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Strategy registry</h3><p className="muted text-[15.5px] leading-relaxed">Versioned strategies, broker mapping, position rules, and the configuration that decides paper vs. live.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Broker abstraction</h3><p className="muted text-[15.5px] leading-relaxed">A single interface in front of the broker SDKs. Today: Alpaca, Tradier, IBKR. Same strategy code regardless.</p></div></li>
          <li data-reveal><div className="num">04</div><div><h3 className="display-xs mb-2">Order construction</h3><p className="muted text-[15.5px] leading-relaxed">Deterministic order shaping with explicit risk gates. Stop-loss, take-profit, and exposure limits enforced before submission.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">05</div><div><h3 className="display-xs mb-2">Audit log</h3><p className="muted text-[15.5px] leading-relaxed">Every signal, every order, every fill, every operator action — recorded and queryable.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">06</div><div><h3 className="display-xs mb-2">Cockpit feed</h3><p className="muted text-[15.5px] leading-relaxed">A read-side that powers the ProxiAlpha terminal. Live signals, P&L, and exposure on a single feed.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Open-source</div>
        <h2 className="display-md" data-reveal data-delay="1">In the open <span className="italic-accent font-serif">on GitHub.</span></h2>
        <p className="muted text-[16px] leading-relaxed mt-6 mb-8" data-reveal data-delay="2">
          ProxiTrades is on GitHub under the proxiant organization. Strategy methodology and
          design notes live alongside the code.
        </p>
      </div>
      <div className="lg:col-span-7 space-y-3">
        <a href="https://github.com/proxiant/ProxiTrades" target="_blank" rel="noopener" className="card p-7 hover-line block" data-reveal>
          <div className="flex items-center gap-3 text-[15.5px] font-medium">
            <span className="font-mono text-[12px] text-zinc-500">REPO</span>
            github.com/proxiant/ProxiTrades
          </div>
          <p className="muted text-[14px] leading-relaxed mt-2">The codebase.</p>
        </a>
        <a href="https://github.com/proxiant/ProxiTrades/blob/main/docs/strategies.md" target="_blank" rel="noopener" className="card p-7 hover-line block" data-reveal data-delay="1">
          <div className="flex items-center gap-3 text-[15.5px] font-medium">
            <span className="font-mono text-[12px] text-zinc-500">DOC</span>
            Strategies registry
          </div>
          <p className="muted text-[14px] leading-relaxed mt-2">Walk-forward results, methodology, and per-strategy notes.</p>
        </a>
        <a href="https://github.com/proxiant/ProxiTrades/blob/main/docs/design/adaptive_strategy_loop.md" target="_blank" rel="noopener" className="card p-7 hover-line block" data-reveal data-delay="2">
          <div className="flex items-center gap-3 text-[15.5px] font-medium">
            <span className="font-mono text-[12px] text-zinc-500">DOC</span>
            Adaptive loop design
          </div>
          <p className="muted text-[14px] leading-relaxed mt-2">The architecture behind the adaptive layer.</p>
        </a>
        <a href="https://github.com/proxiant/ProxiTrades/blob/main/docs/v4_audit_and_v5_findings.md" target="_blank" rel="noopener" className="card p-7 hover-line block" data-reveal data-delay="3">
          <div className="flex items-center gap-3 text-[15.5px] font-medium">
            <span className="font-mono text-[12px] text-zinc-500">DOC</span>
            V4 audit + V5 findings
          </div>
          <p className="muted text-[14px] leading-relaxed mt-2">What we learned moving from v4 to v5, written down.</p>
        </a>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Want to talk trading systems?</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          We occasionally take consulting engagements with quant funds, brokers, and platform
          companies. Tell us what you're working on.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">Get in touch
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="/proxialpha/" className="btn btn-outline">See ProxiAlpha</a>
        </div>
      </div>
    </div>
  </div>
</section>
      <SiteFooter />
    </div>
  );
}
