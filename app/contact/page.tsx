import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";
import { ContactForm } from "@/components/site/contact-form";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Proxiant",
  description: "Tell us about the problem. We respond within one business day with a fit call, then a written, sized engagement plan.",
};

export default function Page() {
  return (
    <div>
      <SiteHeader />

      <header data-theme="light" className="relative pt-40 pb-12 lg:pt-56 lg:pb-16">
        <PageStars />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>CONTACT</div>
              <h1 className="display-xl glow-accent" data-reveal-up-words>Tell us about the problem.</h1>
              <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
                We respond within one business day. The first call is for shape and fit. We do not run a
                sales motion before there is something concrete to talk about.
              </p>
            </div>
          </div>
        </div>
      </header>




      <PageMarquee
        items={["Reply", "Fit call", "Written shape", "Sized plan"]}
        eyebrow="What happens next"
      />
      <section data-theme="paper" className="pb-32 pt-16 lg:pt-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 space-y-5" data-reveal data-delay="1">
              <div className="card p-8">
                <div className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 mb-5">POINTS OF CONTACT</div>
                <ul className="space-y-5">
                  <li className="flex gap-4 line-top pt-5">
                    <div className="w-12 h-12 rounded-full mesh grid place-items-center text-[12px] font-serif italic flex-shrink-0 text-white">PR</div>
                    <div>
                      <div className="display-xs mb-0.5">Pavan R</div>
                      <div className="muted text-[13.5px] leading-relaxed">Founder &amp; CEO. Strategy, architecture, fit conversations.</div>
                    </div>
                  </li>
                  <li className="flex gap-4 line-top pt-5">
                    <div className="w-12 h-12 rounded-full mesh grid place-items-center text-[12px] font-serif italic flex-shrink-0 text-white">AL</div>
                    <div>
                      <div className="display-xs mb-0.5">Anthony L</div>
                      <div className="muted text-[13.5px] leading-relaxed">Partner. Engineering, delivery, build engagements.</div>
                    </div>
                  </li>
                  <li className="flex gap-4 line-top pt-5">
                    <div className="w-12 h-12 rounded-full mesh grid place-items-center text-[12px] font-serif italic flex-shrink-0 text-white">VR</div>
                    <div>
                      <div className="display-xs mb-0.5">Vasanth R</div>
                      <div className="muted text-[13.5px] leading-relaxed">Partner. Research, training programs, curriculum.</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-8">
                <div className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 mb-5">WHAT HAPPENS NEXT</div>
                <ol className="space-y-4 text-[14.5px] leading-relaxed muted">
                  <li className="flex gap-4">
                    <span className="font-mono text-[12px] text-zinc-500 mt-1">01</span>
                    <span><span className="text-black">Reply within one business day</span> from one of the partners with two or three time slots.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-[12px] text-zinc-500 mt-1">02</span>
                    <span><span className="text-black">A 30-minute fit call.</span> We listen, push back where useful, and decide together whether to keep going.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-mono text-[12px] text-zinc-500 mt-1">03</span>
                    <span><span className="text-black">A written shape.</span> If it is a fit, you get a sized engagement plan within a week.</span>
                  </li>
                </ol>
              </div>

              <div className="card p-8">
                <div className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 mb-5">PRESS &amp; PARTNERSHIPS</div>
                <p className="muted text-[14.5px] leading-relaxed">
                  Use the form above and pick &quot;Press, partnership, or other&quot; so it gets routed to the right partner.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>



      <PinScroll
        eyebrow="Response"
        title="One business day."
        theme="light"
        words={[{ text: "Reply" }, { text: "Fit call", em: true }, { text: "Written shape" }, { text: "Sized plan", em: true }]}
      />
      <SiteFooter />
    </div>
  );
}
