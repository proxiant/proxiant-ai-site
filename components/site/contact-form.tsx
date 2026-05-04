"use client";

import { useState, FormEvent } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdwggag";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setStatus("sending");
    setErrMsg("");
    const form = ev.currentTarget;
    try {
      const r = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      let body: any = null;
      try { body = await r.json(); } catch {}
      if (r.ok && (!body || body.ok !== false)) {
        form.reset();
        setStatus("ok");
        // smooth-scroll into view
        setTimeout(() => {
          document.getElementById("form-success")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 50);
      } else {
        setErrMsg(
          (body && (body.error || (body.errors?.[0]?.message ?? body.errors?.[0]?.field))) ||
            (r.status ? `Server returned ${r.status}.` : "Unknown error.")
        );
        setStatus("err");
      }
    } catch (ex: any) {
      setErrMsg(`Network error reaching the form provider${ex?.message ? ` (${ex.message})` : ""}.`);
      setStatus("err");
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        action={FORMSPREE_ENDPOINT}
        method="POST"
        className="card p-8 lg:p-12 space-y-6"
        data-reveal
      >
        <input type="hidden" name="_subject" value="New Proxiant inquiry" />
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: "none" }} />

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="field-label" htmlFor="f-name">Your name</label>
            <input id="f-name" className="field" type="text" name="name" required placeholder="Jane Doe" />
          </div>
          <div>
            <label className="field-label" htmlFor="f-company">Company</label>
            <input id="f-company" className="field" type="text" name="company" placeholder="Acme Corp" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="field-label" htmlFor="f-email">Email</label>
            <input id="f-email" className="field" type="email" name="email" required placeholder="jane@acme.com" />
          </div>
          <div>
            <label className="field-label" htmlFor="f-role">Role</label>
            <input id="f-role" className="field" type="text" name="role" placeholder="VP Engineering" />
          </div>
        </div>

        <div>
          <label className="field-label" htmlFor="f-interest">What are you looking for?</label>
          <select id="f-interest" name="interest" className="field" required defaultValue="">
            <option value="" disabled>Pick one</option>
            <option>AI Consulting — strategy or architecture</option>
            <option>AI Consulting — build engagement</option>
            <option>AI Consulting — operate / retainer</option>
            <option>AI Labs — research or product collaboration</option>
            <option>AI Training — engineering bootcamp</option>
            <option>AI Training — executive program</option>
            <option>AI Training — custom curriculum</option>
            <option>Press, partnership, or other</option>
          </select>
        </div>

        <div>
          <label className="field-label" htmlFor="f-message">Tell us about the problem</label>
          <textarea
            id="f-message"
            name="message"
            rows={6}
            required
            className="field resize-y"
            placeholder="Where you are, where you want to be, and any constraints we should know about (timeline, regulation, vendor lock-in, etc.)."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="field-label" htmlFor="f-budget">Budget range (optional)</label>
            <select id="f-budget" name="budget" className="field" defaultValue="">
              <option value="">Skip</option>
              <option>Under $50k — exploration</option>
              <option>$50k – $250k — sprint or small build</option>
              <option>$250k – $1M — full build</option>
              <option>$1M+ — multi-quarter program</option>
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="f-timeline">Timeline (optional)</label>
            <select id="f-timeline" name="timeline" className="field" defaultValue="">
              <option value="">Skip</option>
              <option>Already late — start this month</option>
              <option>This quarter</option>
              <option>Next quarter</option>
              <option>Exploring — no fixed date</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button type="submit" className="btn btn-dark magnetic" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send the brief"}
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <span className="muted text-[13.5px]">We respond within one business day.</span>
        </div>
      </form>

      {status === "ok" && (
        <div id="form-success" className="mt-6 card p-7 border-2" style={{ borderColor: "#16a34a" }}>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full grid place-items-center bg-green-50 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={2}>
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <div>
              <div className="display-xs mb-1">Brief received.</div>
              <p className="muted text-[14.5px] leading-relaxed">
                We&apos;ll be in touch shortly. If it&apos;s urgent, reply to the confirmation email and tag it priority.
              </p>
            </div>
          </div>
        </div>
      )}

      {status === "err" && (
        <div className="mt-6 card p-7 border-2" style={{ borderColor: "#dc2626" }}>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full grid place-items-center bg-red-50 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth={2}>
                <path d="M12 9v4M12 17h.01M5 19h14L12 5 5 19z" />
              </svg>
            </div>
            <div>
              <div className="display-xs mb-1">That didn&apos;t go through.</div>
              <p className="muted text-[14.5px] leading-relaxed">
                Please try again. {errMsg}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
