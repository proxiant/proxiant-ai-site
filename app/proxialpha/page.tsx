import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";
import { AlphaViz } from "@/components/site/lab-product-viz";

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
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>LAB · PRODUCT · QUANT TRADING</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>ProxiAlpha.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Agent-driven trading research platform. Walk-forward strategy research, paper-trading,
          and a live cockpit. Internal product spun out of Labs. Instrumented end to end and
          continuously evaluated.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-dark magnetic">
            Talk to us
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 aspect-[4/5]" data-reveal-scale>
        <AlphaViz />
      </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Signal", "Trade", "Measure", "Adapt", "Audit"]}
        eyebrow="What we ship into"
      />
<section data-theme="paper" className="section-tight">
  <div className="container-x relative">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div className="line-top py-10 pr-6" data-reveal>
        <div className="counter text-[clamp(48px,6vw,88px)]">12+</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Active strategies</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="1">
        <div className="counter text-[clamp(48px,6vw,88px)]">99.9%</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Uptime over the last 90 days</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="2">
        <div className="counter text-[clamp(48px,6vw,88px)]">Daily</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Walk-forward eval cadence</div>
      </div>
      <div className="line-top py-10" data-reveal data-delay="3">
        <div className="counter text-[clamp(48px,6vw,88px)]">~80ms</div>
        <div className="muted text-[13.5px] mt-2 max-w-[20ch]">Signal-to-execution latency</div>
      </div>
    </div>
  </div>
</section>

<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>What ProxiAlpha is</div>
        <h2 className="display-md" data-reveal data-delay="1">A research platform <span className="italic-accent font-serif">that runs.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 muted text-[16.5px] leading-relaxed space-y-5">
        <p data-reveal>ProxiAlpha is the test bed for our applied work on agent reliability, evaluation tooling, and operator-grade UI. It is also a working trading research platform that we run on our own infrastructure.</p>
        <p data-reveal data-delay="1">The work that goes into making ProxiAlpha behave under live market conditions feeds directly back into the patterns we bring to client engagements. Eval methodology, drift detection, ops UI — all of it gets stress-tested here first.</p>
        <p data-reveal data-delay="2">The terminal is publicly readable. The full system runs against our own infrastructure with multiple broker integrations. We don't sell it as a product; we run it as a lab.</p>
      </div>
    </div>
  </div>
</section>

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>What's inside</div>
        <h2 className="display-md" data-reveal data-delay="1">The system <span className="italic-accent font-serif">in pieces.</span></h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <ul className="editorial-list">
          <li data-reveal><div className="num">01</div><div><h3 className="display-xs mb-2">Strategy registry</h3><p className="muted text-[15.5px] leading-relaxed">Versioned strategies with full lineage. Every signal is reproducible from the registry entry that produced it.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">02</div><div><h3 className="display-xs mb-2">Walk-forward research</h3><p className="muted text-[15.5px] leading-relaxed">Out-of-sample backtest harness with regime tagging and a discipline against in-sample over-fit.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">03</div><div><h3 className="display-xs mb-2">Paper-trading and live execution</h3><p className="muted text-[15.5px] leading-relaxed">Multi-broker execution with a unified audit log. Same strategy code runs in paper and live.</p></div></li>
          <li data-reveal><div className="num">04</div><div><h3 className="display-xs mb-2">Continuous evaluation</h3><p className="muted text-[15.5px] leading-relaxed">Daily walk-forward and drift checks. Strategies that fall outside their evaluation envelope get auto-paused.</p></div></li>
          <li data-reveal data-delay="1"><div className="num">05</div><div><h3 className="display-xs mb-2">Operator-grade cockpit</h3><p className="muted text-[15.5px] leading-relaxed">Live signals, P&L, exposure, and risk on a single dense interface. Operator first, dashboard second.</p></div></li>
          <li data-reveal data-delay="2"><div className="num">06</div><div><h3 className="display-xs mb-2">Audit log</h3><p className="muted text-[15.5px] leading-relaxed">Every signal, fill, order change, and operator action recorded. Full reproducibility from input to output.</p></div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Live terminal</div>
        <h2 className="display-md" data-reveal data-delay="1">A public window <span className="italic-accent font-serif">into the system.</span></h2>
        <p className="muted text-[16px] leading-relaxed mt-6 mb-8" data-reveal data-delay="2">
          The terminal is a read-only view of what's running right now. Live signals, walk-forward
          folds, portfolio metrics, and a candlestick view of every active strategy.
        </p>
        <a href="/terminal/" className="btn btn-dark magnetic" data-reveal data-delay="3">
          Open the terminal
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
      <div className="lg:col-span-7">
        <div className="bg-dark p-8 font-mono text-[12.5px] leading-relaxed rounded-[22px]">
          <div className="flex items-center gap-2 mb-4 text-zinc-500"><span className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span><span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span><span className="ml-3 text-zinc-600">terminal · live</span></div>
          <div className="text-zinc-400"><span className="text-zinc-600">$</span> <span style={{ 'color': '#c084fc' }}>proxi</span> status</div>
          <div style={{ 'color': '#86efac' }}>  ● strategy_v7      live   sharpe 1.42  pnl_30d +3.8%</div>
          <div style={{ 'color': '#86efac' }}>  ● mean_reversion   paper  sharpe 0.91  pnl_30d +1.2%</div>
          <div style={{ 'color': '#fbbf24' }}>  ◐ momentum_x       eval   pending review</div>
          <div style={{ 'color': '#86efac' }}>  ● regime_detect    live   sharpe 1.18  pnl_30d +2.4%</div>
          <div className="text-zinc-500">  · last update 23s ago</div>
          <div className="mt-3 text-zinc-400"><span className="text-zinc-600">$</span> <span style={{ 'color': '#c084fc' }}>proxi</span> tail signals --strategy strategy_v7</div>
          <div className="text-zinc-300">  10:42:18  BUY  AAPL   conf=0.83  size=0.7%</div>
          <div className="text-zinc-300">  10:43:51  HOLD MSFT   conf=0.61</div>
          <div className="text-zinc-300">  10:45:09  SELL NVDA   conf=0.79  size=1.2%</div>
          <div className="text-zinc-300">  10:46:22  BUY  GOOG   conf=0.88  size=0.9%</div>
          <div className="mt-3 text-zinc-400"><span className="text-zinc-600">$</span> <span style={{ 'color': '#c084fc' }}>proxi</span> eval --strategy strategy_v7 --window 90d</div>
          <div className="text-zinc-300">  walk-forward sharpe   1.42</div>
          <div className="text-zinc-300">  drift score           0.07  <span style={{ 'color': '#86efac' }}>(within band)</span></div>
          <div className="text-zinc-300">  regime overlap        0.84</div>
          <div className="text-zinc-300">  red-team status       <span style={{ 'color': '#86efac' }}>passed 2026-04-30</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Continuous loop"
        title="Daily walk-forward."
        theme="light"
        words={[{ text: "Signal" }, { text: "Trade", em: true }, { text: "Measure" }, { text: "Adapt", em: true }, { text: "Audit" }]}
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
          <a href="/contact/" className="btn btn-light magnetic">Get in touch
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="/labs/" className="btn btn-outline">Back to labs</a>
        </div>
      </div>
    </div>
  </div>
</section>
      <SiteFooter />
    </div>
  );
}
