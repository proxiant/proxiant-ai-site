"use client";

import { useState } from "react";

// Builds the prefilled GitHub issue client-side so the optional email
// rides inside the issue body (a plain GET form cannot merge fields).
export default function RequestForm({ repo }: { repo: string }) {
  const [ticker, setTicker] = useState("");
  const [email, setEmail] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const sym = ticker.trim().toUpperCase();
    if (!sym) return;
    let body =
      "Research request from proxiant.ai/proxitrades. One ticker per request; " +
      "the report is published on the page when ready.";
    if (email.trim()) {
      body +=
        `\n\nNotify: ${email.trim()}\n` +
        "(The report will also be emailed to this address. Note: this issue, " +
        "including the email, is publicly visible on GitHub.)";
    }
    const url =
      `https://github.com/${repo}/issues/new?title=${encodeURIComponent(sym)}` +
      `&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener");
  }

  return (
    <form onSubmit={submit} className="flex flex-wrap items-center gap-3 mb-8">
      <input
        type="text"
        required
        maxLength={8}
        placeholder="Ticker, e.g. NVDA"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        className="rounded-lg bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-[15px] w-44 outline-none focus:border-zinc-500"
      />
      <input
        type="email"
        maxLength={80}
        placeholder="Email for the report (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg bg-zinc-900/70 border border-zinc-700 px-4 py-3 text-[15px] w-72 outline-none focus:border-zinc-500"
      />
      <button
        type="submit"
        className="rounded-lg border border-zinc-600 hover:border-zinc-400 transition-colors px-6 py-3 text-[15px] font-medium"
      >
        Request research →
      </button>
      <span className="text-[12.5px] text-zinc-500">
        Opens a prefilled GitHub issue (free account needed). Leave an email and
        the finished report lands in your inbox too; the email is visible on the
        public issue.
      </span>
    </form>
  );
}
