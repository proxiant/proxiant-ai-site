import Link from "next/link";

export function SiteHeader() {
  return (
    <nav className="nav">
      <div className="container-x nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">P</span>
          <span className="brand-name">Proxiant</span>
        </Link>
        <div className="nav-links">
          <Link href="/solutions/" className="nav-link">Consulting</Link>
          <Link href="/labs/" className="nav-link">Labs</Link>
          <Link href="/training/" className="nav-link">Training</Link>
          <Link href="/industries/" className="nav-link">Industries</Link>
          <Link href="/insights/" className="nav-link">Insights</Link>
          <Link href="/about/" className="nav-link">About</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/contact/" className="btn btn-dark magnetic">
            Talk to us
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <button className="nav-mobile-toggle btn btn-outline h-11 w-11 p-0" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
