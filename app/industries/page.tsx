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
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-9">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>INDUSTRIES</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Where the work has been.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Eight industries with shipped systems. Each link below opens a deep view: representative
          problems we have worked on, regulatory considerations, and case-study links where
          confidentiality permits.
        </p>
      </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Banking", "Health", "Insurance", "Energy", "Manufacturing", "Retail", "Telecom", "Logistics"]}
        eyebrow="What we ship into"
      />
<section data-theme="paper" className="pb-32">
  <div className="container-x relative">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      <a href="/industries/financial-services/" className="card hover-line overflow-hidden flex flex-col" data-reveal>
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="Financial Services" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 01</div>
          <h3 className="display-sm mb-2">Financial Services</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Risk modeling, fraud detection, ops automation, regulatory documentation.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/industries/healthcare/" className="card hover-line overflow-hidden flex flex-col" data-reveal data-delay="1">
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80" alt="Healthcare" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 02</div>
          <h3 className="display-sm mb-2">Healthcare</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Clinical workflow tools, claims, prior auth, documentation assistance.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/industries/insurance/" className="card hover-line overflow-hidden flex flex-col" data-reveal data-delay="2">
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80" alt="Insurance" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 03</div>
          <h3 className="display-sm mb-2">Insurance</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Underwriting, claims triage, agent assistance, fraud signal review.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/industries/manufacturing/" className="card hover-line overflow-hidden flex flex-col" data-reveal>
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1400&q=80" alt="Manufacturing" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 04</div>
          <h3 className="display-sm mb-2">Manufacturing</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Quality inspection, predictive maintenance, line ops, documentation.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/industries/energy/" className="card hover-line overflow-hidden flex flex-col" data-reveal data-delay="1">
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80" alt="Energy" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 05</div>
          <h3 className="display-sm mb-2">Energy</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Grid optimization, asset performance, demand forecasting, ops support.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/industries/retail/" className="card hover-line overflow-hidden flex flex-col" data-reveal data-delay="2">
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=1400&q=80" alt="Retail" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 06</div>
          <h3 className="display-sm mb-2">Retail</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Demand forecasting, merchandising, customer-facing assistants.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/industries/telecom/" className="card hover-line overflow-hidden flex flex-col" data-reveal>
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80" alt="Telecom" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 07</div>
          <h3 className="display-sm mb-2">Telecom</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Network ops, customer care assistants, churn intervention.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/industries/transportation/" className="card hover-line overflow-hidden flex flex-col" data-reveal data-delay="1">
        <div className="img-thumb"><img src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80" alt="Transportation" loading="lazy" /></div>
        <div className="p-7 flex-1 flex flex-col">
          <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">INDUSTRY / 08</div>
          <h3 className="display-sm mb-2">Transportation</h3>
          <p className="muted text-[14.5px] leading-relaxed mb-5 flex-1">Routing, fleet operations, dispatch, logistics decision support.</p>
          <div className="flex items-center gap-2 muted text-[13.5px]">Read more →</div>
        </div>
        </a>
      <a href="/contact/" className="card p-8 hover-line bg-dark" data-reveal data-delay="2">
        <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-5">YOUR INDUSTRY</div>
        <h3 className="display-sm mb-3 text-white">Don't see it?</h3>
        <p className="text-zinc-400 text-[14.5px] leading-relaxed mb-6">The pattern is similar across regulated industries: domain data, audit pressure, real ops.</p>
        <div className="flex items-center gap-2 text-zinc-300 text-[13.5px]">Talk to us →</div>
      </a>
    </div>
  </div>
</section>

      <PinScroll
        eyebrow="Domains shipped"
        title="Audit-ready by default."
        theme="light"
        words={[{ text: "Banking" }, { text: "Health", em: true }, { text: "Insurance" }, { text: "Energy", em: true }, { text: "Manufacturing" }, { text: "Retail", em: true }, { text: "Telecom" }, { text: "Logistics", em: true }]}
      />


<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Have a brief? Send it.</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          We respond within one business day. The first call is for shape and fit.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">Start the conversation
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
