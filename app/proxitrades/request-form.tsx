"use client";

import { useState } from "react";

// Submits the research request to the ProxiTrades intake API when one
// is configured (data.json request_api), so the visitor never leaves
// the page or touches GitHub. Without an API (or if it is down) the
// request falls back to a prefilled GitHub issue.
export default function RequestForm({ repo, api }: { repo: string; api?: string }) {
  const [ticker, setTicker] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "queued" | "error">("idle");
  const [msg, setMsg] = useState("");

  const inputCls =
    "rounded-lg bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-[15px] " +
    "text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-zinc-400";

  function githubFallback(sym: string) {
    let body =
      "Research request from proxiant.ai/proxitrades. One ticker per request; " +
      "the report is published on the page when ready.";
    if (email.trim()) {
      body +=
        `\n\nNotify: ${email.trim()}\n` +
        "(The report will also be emailed to this address. Note: this issue, " +
        "including the email, is publicly visible on GitHub.)";
    }
    window.open(
      `https://github.com/${repo}/issues/new?title=${encodeURIComponent(sym)}` +
        `&body=${encodeURIComponent(body)}`,
      "_blank",
      "noopener"
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const sym = ticker.trim().toUpperCase();
    if (!sym) return;
    if (!api) {
      githubFallback(sym);
      return;
    }
    setState("sending");
    try {
      const r = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol: sym, email: email.trim() }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setState("queued");
        setMsg(
          `${sym} is queued. The report appears on this page` +
            (email.trim() ? " and in your inbox" : "") +
            ", usually within one trading day."
        );
        setTicker("");
        setEmail("");
      } else if (r.status === 422 || r.status === 429 || r.status === 503) {
        setState("error");
        setMsg(j.error || "Request rejected.");
      } else {
        throw new Error("bad status");
      }
    } catch {
      // API unreachable: keep the request alive via GitHub
      setState("idle");
      githubFallback(sym);
    }
  }

  return (
    <div className="mb-8">
      <form onSubmit={submit} className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          required
          maxLength={8}
          placeholder="Ticker, e.g. NVDA"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className={`${inputCls} w-44`}
        />
        <input
          type="email"
          maxLength={80}
          placeholder="Email for the report (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputCls} w-72`}
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white transition-colors px-6 py-3 text-[15px] font-semibold disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Request research →"}
        </button>
        <span className="text-[12.5px] text-zinc-500">
          Leave an email and the finished report lands in your inbox too.
        </span>
      </form>
      {state === "queued" && (
        <div className="mt-3 text-[13.5px] text-emerald-400">{msg}</div>
      )}
      {state === "error" && (
        <div className="mt-3 text-[13.5px] text-amber-400">{msg}</div>
      )}
    </div>
  );
}
