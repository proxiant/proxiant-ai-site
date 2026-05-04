import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <Link href="/" className="brand">
              <span className="brand-mark" style={{ background: "#fff", color: "#000" }}>P</span>
              <span className="brand-name text-white">Proxiant</span>
            </Link>
            <p className="text-[14.5px] leading-relaxed text-zinc-400 max-w-sm mt-6">
              An AI-exclusive consultancy. We design, ship, and operate the AI systems you&apos;re
              accountable for in production.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 mb-5">PRACTICES</div>
            <ul className="space-y-3">
              <li><Link href="/solutions/">Consulting</Link></li>
              <li><Link href="/labs/">Labs</Link></li>
              <li><Link href="/training/">Training</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <div className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 mb-5">EXPLORE</div>
            <ul className="space-y-3">
              <li><Link href="/industries/">Industries</Link></li>
              <li><Link href="/insights/">Insights</Link></li>
              <li><Link href="/proxialpha/">ProxiAlpha</Link></li>
              <li><Link href="/proxitrades/">ProxiTrades</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.16em] text-zinc-500 mb-5">COMPANY</div>
            <ul className="space-y-3">
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
              <li>
                <a href="https://github.com/proxiant" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-zinc-500 text-[13px]">
          <div>© 2026 Proxiant. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span className="font-mono tracking-[0.16em]">PROXIANT.AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
