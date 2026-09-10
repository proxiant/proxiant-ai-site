import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { SparkleField } from "@/components/site/sparkle-field";
import data from "../../public/proxitrades/data.json";

import type { Metadata } from "next";
import RequestForm from "./request-form";

export const metadata: Metadata = {
  title: "ProxiTrades — daily leads and honest results | Proxiant",
  description:
    "Automated trading research: leads with entry, stop, and target before the open, executed results after the close. Wins and losses alike.",
};

const DISCLAIMER =
  "ProxiTrades is an automated research system trading a PAPER account. " +
  "Everything on this page is a research signal, not investment advice. " +
  "Past results do not predict future results.";

type Lead = { rank?: number; symbol: string; side: string; entry?: number; stop?: number; target?: number; why?: string };
type Trade = { symbol: string; side: string; entry?: number; exit?: number; pnl_pct: number; reason?: string };
type Board = { label: string; n: number; win_rate: string; pnl_usd: string };
type Swing = { symbol: string; entry?: number | null; stop?: number | null; target?: number | null };
type Research = { symbol: string; date: string; requested_by: string; headline: string; href: string };

type WinRet = { label: string; desk_pct?: number | null; spx_pct?: number | null; excess_pct?: number | null; beat?: boolean | null; from?: string; to?: string; pnl_usd?: number | null };
type DeskRet = { desk: string; label: string; what?: string; capital_usd?: number; started?: string | null; windows: WinRet[]; since_start?: WinRet | null; open_pnl_usd?: number | null; trades?: number };
type Returns = { as_of?: string; epoch?: string; windows?: string[]; desks?: DeskRet[]; total?: DeskRet; beats?: number; tries?: number; benchmark?: string; note?: string };
type Spread = { id?: string; underlying?: string; expiry?: string; dte?: number | null; short_strike?: number | null; long_strike?: number | null; qty?: number; credit?: number | null; max_risk_usd?: number; opened?: string };
type Scout = { underlying?: string; spot?: number | null; expiry?: string | null; dte?: number | null; short_strike?: number | null; long_strike?: number | null; credit?: number | null; delta?: number | null; iv?: number | null; rv?: number | null; vrp?: number | null; score?: number | null; yield_pct?: number | null; signal?: boolean; reason?: string };
type ClosedSpread = { symbol?: string; entry?: number | null; exit?: number | null; pnl_pct: number; pnl_usd: number; reason?: string; day?: string };
type OptionsDesk = { desk?: string; held?: Spread[]; scan?: Scout[]; last_pass?: { date?: string; mode?: string; entered?: number; exited?: number; candidates?: number; dry_run?: boolean }; closed?: ClosedSpread[]; rule?: string };

const f = (v?: number | null) => (v == null ? "—" : v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
const pct = (v?: number | null) => (v == null ? "—" : `${v >= 0 ? "+" : ""}${v.toFixed(2)}%`);
const usd0 = (v?: number | null) => (v == null ? "—" : `${v < 0 ? "-" : ""}$${Math.abs(v).toLocaleString("en-US", { maximumFractionDigits: 0 })}`);
const tone = (v?: number | null) => (v == null ? "text-zinc-500" : v >= 0 ? "text-emerald-400" : "text-red-400");

function RetCell({ w }: { w?: WinRet | null }) {
  if (!w || w.desk_pct == null) return <Td cls="text-zinc-600">—</Td>;
  return (
    <Td>
      <div className={`${tone(w.desk_pct)} font-medium`}>{pct(w.desk_pct)} <span className="text-[12px]">{w.beat ? "✓" : "✗"}</span></div>
      <div className="text-[12px] text-zinc-500">S&amp;P {pct(w.spx_pct)}</div>
    </Td>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="text-left font-mono text-[11px] tracking-[0.14em] text-zinc-500 pb-3 pr-4 font-normal">{children}</th>;
}
function Td({ children, cls = "" }: { children: React.ReactNode; cls?: string }) {
  return <td className={`py-2.5 pr-4 text-[14.5px] border-t border-zinc-800/60 ${cls}`}>{children}</td>;
}

export default function Page() {
  const leads = (data.leads ?? []) as Lead[];
  const trades = (data.trades ?? []) as Trade[];
  const board = (data.board ?? []) as Board[];
  const swing = (data.swing ?? []) as Swing[];
  const research = ((data as Record<string, unknown>).research ?? []) as Research[];
  const requestRepo = ((data as Record<string, unknown>).request_repo as string) ?? "proxiant/proxiant-ai-site";
  const requestApi = ((data as Record<string, unknown>).request_api as string) ?? "";
  const returns = ((data as Record<string, unknown>).returns ?? {}) as Returns;
  const retDesks = returns.desks ?? [];
  const retWindows = returns.windows ?? [];
  const options = ((data as Record<string, unknown>).options ?? {}) as OptionsDesk;
  const held = options.held ?? [];
  const scout = (options.scan ?? []).slice(0, 8);
  const closedSpreads = options.closed ?? [];
  return (
    <div>
      <SiteHeader />
      <header className="relative pt-40 pb-16 lg:pt-56 lg:pb-20">
        <SparkleField id="sparkles-proxitrades" />
        <div className="page-stars"></div>
        <div className="container-x relative">
          <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>
            PROXITRADES · DAILY · UPDATED {String(data.stamp ?? "").toUpperCase()}
          </div>
          <h1 className="display-xl glow-accent" data-reveal-up-words>
            Leads before the open. Results after the close.
          </h1>
          <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
            The same leads our agents trade, published with exact entry, stop, and target — then
            scored against the executed ledger every day. Wins and losses alike.
          </p>
          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-amber-200/70 border border-amber-200/20 rounded-lg px-4 py-3" data-reveal data-delay="3">
            {DISCLAIMER}
          </p>
        </div>
      </header>

      <main className="container-x pb-28 space-y-14">
        <section data-reveal>
          <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">THIS MORNING&apos;S LEADS</div>
          <div className="card p-8 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead><tr><Th>#</Th><Th>SYMBOL</Th><Th>SIDE</Th><Th>ENTRY</Th><Th>STOP</Th><Th>TARGET</Th><Th>WHY</Th></tr></thead>
              <tbody>
                {leads.length ? leads.map((l) => (
                  <tr key={l.symbol}>
                    <Td cls="text-zinc-500">{l.rank ?? ""}</Td>
                    <Td cls="font-medium">{l.symbol}</Td>
                    <Td cls={l.side === "sell" ? "text-red-400" : "text-emerald-400"}>{l.side === "sell" ? "SHORT" : "LONG"}</Td>
                    <Td>{f(l.entry)}</Td><Td>{f(l.stop)}</Td><Td>{f(l.target)}</Td>
                    <Td cls="text-zinc-400 text-[13px]">{l.why ?? ""}</Td>
                  </tr>
                )) : (
                  <tr><Td cls="text-zinc-500">Leads publish around 9:25 ET on trading days.</Td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section data-reveal>
          <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">
            EXECUTED {String(data.trades_day_label ?? "TODAY").toUpperCase()} · PAPER ACCOUNT
          </div>
          <div className="card p-8 overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead><tr><Th>SYMBOL</Th><Th>SIDE</Th><Th>ENTRY</Th><Th>EXIT</Th><Th>P&amp;L</Th><Th>EXIT REASON</Th></tr></thead>
              <tbody>
                {trades.length ? trades.map((t, i) => (
                  <tr key={`${t.symbol}-${i}`}>
                    <Td cls="font-medium">{t.symbol}</Td>
                    <Td>{t.side === "sell" ? "SHORT" : "LONG"}</Td>
                    <Td>{f(t.entry)}</Td><Td>{f(t.exit)}</Td>
                    <Td cls={t.pnl_pct >= 0 ? "text-emerald-400" : "text-red-400"}>
                      {t.pnl_pct >= 0 ? "+" : ""}{t.pnl_pct.toFixed(2)}%
                    </Td>
                    <Td cls="text-zinc-400 text-[13px]">{t.reason ?? ""}</Td>
                  </tr>
                )) : (
                  <tr><Td cls="text-zinc-500">No executed trades yet today.</Td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {data.eod_text ? (
          <section data-reveal>
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">END OF DAY ANALYSIS</div>
            <div className="card p-8">
              <p className="muted text-[15.5px] leading-relaxed max-w-3xl">{data.eod_text}</p>
            </div>
          </section>
        ) : null}

        <section data-reveal>
          <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">SCOREBOARD</div>
          {(data as Record<string, unknown>).epoch_note ? (
            <p className="muted text-[13px] leading-relaxed max-w-3xl mb-4">
              {String((data as Record<string, unknown>).epoch_note)}
            </p>
          ) : null}
          <div className="grid sm:grid-cols-3 gap-4">
            {board.map((b) => (
              <div key={b.label} className="card p-7">
                <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">{b.label.toUpperCase()}</div>
                <div className="font-serif text-[30px]">{b.pnl_usd}</div>
                <div className="text-[13px] text-zinc-400 mt-1">{b.n} trades · {b.win_rate} win rate</div>
              </div>
            ))}
          </div>
        </section>

        {retDesks.length ? (
          <section data-reveal>
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">RETURN ON CAPITAL · EACH DESK VERSUS THE S&amp;P 500</div>
            <p className="muted text-[13px] leading-relaxed max-w-3xl mb-4">
              Every desk runs its own notional pool and its goal is to beat the S&amp;P 500 over the same dates.
              {returns.note ? ` ${returns.note}` : ""} Benchmark: {returns.benchmark ?? "SPY price return between the same closes"}.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="card p-7">
                <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">BEATS THE S&amp;P</div>
                <div className="font-serif text-[30px]">{returns.beats ?? 0} of {returns.tries ?? 0}</div>
                <div className="text-[13px] text-zinc-400 mt-1">desk-windows measured</div>
              </div>
              {returns.total?.windows?.slice(2, 3).map((w) => (
                <div key={w.label} className="card p-7">
                  <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">ALL DESKS · {w.label.toUpperCase()}</div>
                  <div className={`font-serif text-[30px] ${tone(w.desk_pct)}`}>{pct(w.desk_pct)}</div>
                  <div className="text-[13px] text-zinc-400 mt-1">S&amp;P {pct(w.spx_pct)} · {w.beat ? "ahead" : "behind"} · on {usd0(returns.total?.capital_usd)}</div>
                </div>
              ))}
              <div className="card p-7">
                <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">AS OF</div>
                <div className="font-serif text-[30px]">{returns.as_of ?? "—"}</div>
                <div className="text-[13px] text-zinc-400 mt-1">track record since {returns.epoch ?? ""}</div>
              </div>
            </div>
            <div className="card p-8 overflow-x-auto">
              <table className="w-full min-w-[820px]">
                <thead>
                  <tr>
                    <Th>DESK</Th><Th>CAPITAL</Th>
                    {retWindows.map((w) => <Th key={w}>{w.toUpperCase()}</Th>)}
                    <Th>SINCE START</Th><Th>OPEN P&amp;L</Th><Th>TRADES</Th>
                  </tr>
                </thead>
                <tbody>
                  {retDesks.map((d) => (
                    <tr key={d.desk}>
                      <Td>
                        <div className="font-medium">{d.label}</div>
                        <div className="text-[12px] text-zinc-500">{d.what ?? ""}{d.started ? ` · since ${d.started}` : " · no trades yet"}</div>
                      </Td>
                      <Td cls="text-zinc-400">{usd0(d.capital_usd)}</Td>
                      {retWindows.map((w, i) => <RetCell key={w} w={d.windows?.[i]} />)}
                      <RetCell w={d.since_start} />
                      <Td cls={tone(d.open_pnl_usd)}>{usd0(d.open_pnl_usd)}</Td>
                      <Td cls="text-zinc-400">{d.trades ?? 0}</Td>
                    </tr>
                  ))}
                  {returns.total ? (
                    <tr>
                      <Td cls="font-medium">All desks</Td>
                      <Td cls="text-zinc-400">{usd0(returns.total.capital_usd)}</Td>
                      {retWindows.map((w, i) => <RetCell key={w} w={returns.total?.windows?.[i]} />)}
                      <RetCell w={returns.total.since_start} />
                      <Td cls="text-zinc-600">—</Td><Td cls="text-zinc-600">—</Td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          </section>
        ) : null}

        {options.desk ? (
          <section data-reveal>
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">OPTIONS DESK · HARRIER · PUT SPREADS ON RICH VOLATILITY</div>
            <p className="muted text-[13px] leading-relaxed max-w-3xl mb-4">{options.rule ?? ""}</p>
            <div className="card p-8 overflow-x-auto mb-4">
              <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">OPEN SPREADS ({held.length})</div>
              <table className="w-full min-w-[640px]">
                <thead><tr><Th>NAME</Th><Th>EXPIRY</Th><Th>DTE</Th><Th>SHORT / LONG</Th><Th>QTY</Th><Th>CREDIT</Th><Th>MAX RISK</Th><Th>OPENED</Th></tr></thead>
                <tbody>
                  {held.length ? held.map((h) => (
                    <tr key={h.id ?? `${h.underlying}-${h.expiry}`}>
                      <Td cls="font-medium">{h.underlying ?? ""}</Td>
                      <Td>{h.expiry ?? ""}</Td><Td>{h.dte ?? "—"}</Td>
                      <Td>{h.short_strike ?? "—"} / {h.long_strike ?? "—"}</Td>
                      <Td>{h.qty ?? ""}</Td><Td>{f(h.credit)}</Td><Td>{usd0(h.max_risk_usd)}</Td>
                      <Td cls="text-zinc-400">{h.opened ?? ""}</Td>
                    </tr>
                  )) : (
                    <tr><Td cls="text-zinc-500">No open spreads. The desk enters only when a candidate passes every gate and buying power is free.</Td></tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="card p-8 overflow-x-auto mb-4">
              <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">
                THIS MORNING&apos;S SCOUT{options.last_pass?.date ? ` · ${options.last_pass.date}` : ""} · RANKED BY PREMIUM YIELD ON RISK
              </div>
              <table className="w-full min-w-[760px]">
                <thead><tr><Th>NAME</Th><Th>SPOT</Th><Th>EXPIRY</Th><Th>SHORT / LONG</Th><Th>CREDIT</Th><Th>DELTA</Th><Th>IV / RV</Th><Th>SCORE</Th><Th>VERDICT</Th></tr></thead>
                <tbody>
                  {scout.length ? scout.map((s, i) => (
                    <tr key={`${s.underlying}-${i}`}>
                      <Td cls="font-medium">{s.underlying ?? ""}</Td>
                      <Td>{f(s.spot)}</Td><Td>{s.expiry ?? "—"}</Td>
                      <Td>{s.short_strike != null ? `${s.short_strike} / ${s.long_strike}` : "—"}</Td>
                      <Td>{f(s.credit)}</Td><Td>{s.delta != null ? s.delta.toFixed(2) : "—"}</Td>
                      <Td>{s.vrp != null ? s.vrp.toFixed(2) : "—"}</Td>
                      <Td>{s.score != null ? s.score.toFixed(2) : "—"}</Td>
                      <Td cls={s.signal ? "text-emerald-400" : "text-zinc-400 text-[13px]"}>{s.signal ? "PASS" : (s.reason ?? "")}</Td>
                    </tr>
                  )) : (
                    <tr><Td cls="text-zinc-500">The scout runs at 10:20 ET on trading days.</Td></tr>
                  )}
                </tbody>
              </table>
            </div>
            {closedSpreads.length ? (
              <div className="card p-8 overflow-x-auto">
                <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-3">CLOSED SPREADS · P&amp;L AS A SHARE OF MAX RISK</div>
                <table className="w-full min-w-[640px]">
                  <thead><tr><Th>DAY</Th><Th>NAME</Th><Th>CREDIT</Th><Th>EXIT</Th><Th>P&amp;L</Th><Th>WHY</Th></tr></thead>
                  <tbody>
                    {closedSpreads.map((c, i) => (
                      <tr key={`${c.symbol}-${i}`}>
                        <Td cls="text-zinc-400">{c.day ?? ""}</Td>
                        <Td cls="font-medium">{c.symbol ?? ""}</Td>
                        <Td>{f(c.entry)}</Td><Td>{f(c.exit)}</Td>
                        <Td cls={tone(c.pnl_usd)}>{usd0(c.pnl_usd)} · {pct(c.pnl_pct)}</Td>
                        <Td cls="text-zinc-400 text-[13px]">{c.reason ?? ""}</Td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ) : null}

        <section data-reveal>
          <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">SWING PICKS · WEEK AHEAD</div>
          <div className="card p-8 overflow-x-auto">
            <table className="w-full min-w-[480px]">
              <thead><tr><Th>SYMBOL</Th><Th>ENTRY</Th><Th>STOP</Th><Th>TARGET</Th></tr></thead>
              <tbody>
                {swing.length ? swing.map((s) => (
                  <tr key={s.symbol}>
                    <Td cls="font-medium">{s.symbol}</Td>
                    <Td>{f(s.entry)}</Td><Td>{f(s.stop)}</Td><Td>{f(s.target)}</Td>
                  </tr>
                )) : (
                  <tr><Td cls="text-zinc-500">The next swing plan publishes Sunday evening.</Td></tr>
                )}
              </tbody>
            </table>
            {data.posture ? (
              <p className="text-[13.5px] text-zinc-400 mt-5">
                Long-horizon posture: <span className="text-zinc-200 font-medium">{data.posture}</span> (regime-switched model, updated daily).
              </p>
            ) : null}
          </div>
        </section>

        <section data-reveal>
          <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">COMMUNITY RESEARCH · REQUEST ANY STOCK</div>
          <div className="card p-8">
            <p className="muted text-[15px] leading-relaxed max-w-3xl mb-6">
              Want the research desk on a specific name? Ask, and the MIDAS engine runs the full
              workup — valuation scenarios, Monte Carlo risk, peer comps, and an audited narrative —
              and publishes it here, usually within one trading day. Requests go through GitHub, so
              they are public and spam-free.
            </p>
            <RequestForm repo={requestRepo} api={requestApi} />
            {research.length ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {research.map((r) => (
                  <a key={r.href} href={r.href} className="block rounded-xl border border-zinc-800 hover:border-zinc-600 transition-colors p-6">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-serif text-[22px]">{r.symbol}</span>
                      <span className="font-mono text-[11px] text-zinc-500">{r.date}</span>
                    </div>
                    <p className="text-[13.5px] text-zinc-400 leading-relaxed">{r.headline}</p>
                    <div className="text-[13px] mt-3 text-zinc-300">Read the report → <span className="text-zinc-500">requested by {r.requested_by}</span></div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-[13.5px] text-zinc-500">No community reports yet — yours could be the first.</p>
            )}
          </div>
        </section>

        <section data-reveal>
          <div className="card p-10">
            <div className="font-mono text-[12px] tracking-[0.14em] text-zinc-500 mb-4">KEEP THE LEADS COMING</div>
            <p className="muted text-[15.5px] leading-relaxed max-w-2xl mb-7">
              The leads, the executed ledger, and the analysis on this page are free and update every
              trading day. If they help you, buy the research a coffee — it pays for the data feeds
              and keeps the work public.
            </p>
            <a href={data.donate_url ?? "https://buymeacoffee.com/proxiant"}
               className="inline-flex items-center gap-3 rounded-lg bg-[#C2410C] hover:bg-[#9a3412] transition-colors px-7 py-3.5 text-[15px] font-semibold text-white">
              Donate a coffee →
            </a>
          </div>
          <p className="text-[12px] text-zinc-500 mt-6 max-w-3xl">{DISCLAIMER} ProxiTrades is a Proxiant research project.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
