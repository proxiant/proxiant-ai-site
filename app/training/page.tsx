import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { PageStars } from "@/components/site/page-stars";
import { SparkleField } from "@/components/site/sparkle-field";
import { TrainingViz } from "@/components/site/hero-viz";
import { PageMarquee } from "@/components/site/page-marquee";
import { PinScroll } from "@/components/site/pin-scroll";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Training — Proxiant",
  description: "Open-enrollment AI courses, 12-week expert bootcamps, and corporate cohort programs. PCAIP certification, GPU-backed labs, and capstones that ship to production.",
};

export default function Page() {
  return (
    <div>
      <SiteHeader />
<header data-theme="light" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32">
        <SparkleField id="sparkles-training-page" />
  <div className="page-stars"></div>
  <div className="hero-orbit" aria-hidden="true">
    <div className="hero-orbit-glow"></div>
    <span className="hero-orbit-dot"></span>
  </div>
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-7">
        <div className="font-mono text-[12px] tracking-[0.16em] text-zinc-500 mb-9" data-reveal data-scramble>PRACTICE / 03 — AI TRAINING</div>
        <h1 className="display-xl glow-accent" data-reveal-up-words>Programs that turn into practice.</h1>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Hands-on AI training for engineering teams, senior leadership, and individual
          practitioners. Cohort-based, project-based, built around the systems your people are
          actually trying to ship.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-dark magnetic">Plan a program
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <a href="#programs" className="btn btn-outline">See the programs</a>
        </div>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 aspect-[4/5]" data-reveal-scale>
        <TrainingViz />
      </div>
    </div>
  </div>
</header>




      <PageMarquee
        items={["Foundations", "Retrieval", "Agents", "Evaluate", "Govern", "Ship"]}
        eyebrow="The program arc"
      />
{/* Why training */}
<section data-theme="paper" className="section">
  <div className="container-x relative">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Why training matters</div>
        <h2 className="display-md" data-reveal data-delay="1">
          The team that runs it <span className="italic-accent font-serif">is the system.</span>
        </h2>
      </div>
      <div className="lg:col-span-6 lg:col-start-7 space-y-6 muted text-[16px] leading-relaxed">
        <p data-reveal>
          Most AI initiatives don't fail in the model. They fail in the team that has to operate
          it. Engineers who never built a RAG pipeline get handed one and asked to make it
          reliable. Leaders making nine-figure platform decisions are working from vendor pitches
          and analyst reports.
        </p>
        <p data-reveal data-delay="1">
          Our training practice fixes that gap. We run cohort programs that give your engineering
          teams real production experience and your leadership team a working mental model. Each
          program ends with an artifact your organization keeps.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Corporate programs */}
<section id="programs" data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Corporate programs</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Four formats. <span className="italic-accent font-serif">Same standard.</span>
        </h2>
      </div>
    </div>

    <div className="bento">
      <article className="b-6 card p-10" data-reveal>
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 01 · ENGINEERING</span>
          <span className="font-mono text-[12px] text-zinc-500">6–8 WEEKS</span>
        </div>
        <h3 className="display-sm mb-4">Production AI Bootcamp</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          A full cohort program for engineering teams shipping their first or second production AI
          system. Participants leave with a working pipeline they built, an evaluation harness they
          own, and runbooks for operating it.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Retrieval and RAG architecture</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Agent design and tool use</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Evaluation, regression, red-teaming</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Production observability</li>
        </ul>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="1">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 02 · LEADERSHIP</span>
          <span className="font-mono text-[12px] text-zinc-500">3 DAYS</span>
        </div>
        <h3 className="display-sm mb-4">Executive AI Intensive</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          Three days for senior leaders responsible for AI strategy. Working sessions, not slide
          decks. Participants leave with a written strategy, a portfolio map, and a vendor
          diligence framework calibrated to their industry.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Capability vs. capacity model</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Build / buy / partner framework</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Risk and governance basics</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Investment portfolio mapping</li>
        </ul>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="2">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 03 · CUSTOM</span>
          <span className="font-mono text-[12px] text-zinc-500">PER ENGAGEMENT</span>
        </div>
        <h3 className="display-sm mb-4">Custom curriculum</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          Designed for organizations with a specific stack, regulation, or platform decision in
          flight. We build the curriculum on your data, on your tools, with your real use cases.
          Not a recycled course.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Discovery on your stack and goals</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Curriculum design and review</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Cohort delivery, on-site or remote</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Post-program coaching</li>
        </ul>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="3">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">PROGRAM / 04 · WORKSHOP</span>
          <span className="font-mono text-[12px] text-zinc-500">HALF / FULL DAY</span>
        </div>
        <h3 className="display-sm mb-4">Workshops & briefings</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          Targeted formats for boards, leadership offsites, or specific teams. Pick a topic and we
          run a single intensive session that ends with a written takeaway document.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Board-level AI briefings</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Architecture deep dives</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Vendor / model evaluation labs</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Risk and red-team workshops</li>
        </ul>
      </article>
    </div>
  </div>
</section>

{/* Corporate bootcamp curriculum — dark editorial list */}
<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Inside the corporate bootcamp</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          What an engineer <span className="italic-accent font-serif">walks out with.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 self-end">
        <p className="lead" data-reveal data-delay="2">
          Six weekly modules plus a final capstone week. Each week is half lecture, half hands-on
          lab.
        </p>
      </div>
    </div>

    <ul className="editorial-list">
      <li data-reveal>
        <div className="num">WEEK / 01</div>
        <div>
          <h3 className="display-xs mb-2">Foundation models, in practice</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Tokenization, context windows, prompt design that actually works. Cost models. Vendor selection.</p>
        </div>
      </li>
      <li data-reveal data-delay="1">
        <div className="num">WEEK / 02</div>
        <div>
          <h3 className="display-xs mb-2">Retrieval & RAG</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Chunking strategies, embedding models, vector stores, and the failure modes that bite in production.</p>
        </div>
      </li>
      <li data-reveal data-delay="2">
        <div className="num">WEEK / 03</div>
        <div>
          <h3 className="display-xs mb-2">Agents & tool use</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Tool design, planning, multi-step reasoning, and the operating challenges of long-horizon tasks.</p>
        </div>
      </li>
      <li data-reveal>
        <div className="num">WEEK / 04</div>
        <div>
          <h3 className="display-xs mb-2">Evaluation & observability</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Eval harnesses, regression tests, drift detection, and how to know whether your system is still working.</p>
        </div>
      </li>
      <li data-reveal data-delay="1">
        <div className="num">WEEK / 05</div>
        <div>
          <h3 className="display-xs mb-2">Risk, governance, red-teaming</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Threat modeling for LLM systems, regulatory pattern recognition, and a practical red-team protocol.</p>
        </div>
      </li>
      <li data-reveal data-delay="2">
        <div className="num">WEEK / 06</div>
        <div>
          <h3 className="display-xs mb-2">Production & ops</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Deploy, monitor, version, and roll back. What an on-call rotation actually looks like for AI systems.</p>
        </div>
      </li>
      <li data-reveal>
        <div className="num" style={{ 'color': '#fff' }}>CAPSTONE</div>
        <div>
          <h3 className="display-xs mb-2">Ship the system</h3>
          <p className="muted text-[15.5px] leading-relaxed max-w-2xl">Each team takes a real internal use case from brief to production deployment. The artifact is yours, the runbook is yours, the lessons are written down.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

{/* Open enrollment — Proxiant Academy */}
<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Open enrollment · Proxiant Academy</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Four courses. <span className="italic-accent font-serif">One credential.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 self-end">
        <p className="lead" data-reveal data-delay="2">
          Individual seats, full materials: weekly lectures, graded exercises, projects, and a
          certification exam. Every course qualifies you for the PCAIP credential.
        </p>
      </div>
    </div>

    <div className="bento">
      <article className="b-6 card p-10" data-reveal>
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">COURSE / 01 · BEGINNER</span>
          <span className="font-mono text-[12px] text-zinc-500">4 WEEKS · ONLINE</span>
        </div>
        <h3 className="display-sm mb-4">AI Fundamentals</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          The on-ramp. From the history of AI through working ML models to generative AI and
          organizational strategy. No prior AI or programming experience required; benchmarked
          against MIT and Stanford intro curricula.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W1</span>Foundations: search, agents, knowledge</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W2</span>Machine learning and model evaluation</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W3</span>Deep learning, CNNs to transformers</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W4</span>GenAI, ethics, and AI strategy</li>
        </ul>
        <div className="line-top mt-7 pt-4 flex items-baseline justify-between">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500">TUITION</span>
          <span className="font-mono text-[14px]">$1,499</span>
        </div>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="1">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">COURSE / 02 · INTERMEDIATE</span>
          <span className="font-mono text-[12px] text-zinc-500">8 WEEKS · LIVE COHORT</span>
        </div>
        <h3 className="display-sm mb-4">AI for Engineers</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          For software engineers integrating AI into production systems. 24 live sessions, 85+
          coding exercises, 8 graded projects ending in a deployed capstone. Python fluency
          assumed.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>AI APIs, SDKs, and data engineering</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Building with LLMs: prompting to LoRA</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Agents, tool use, and RAG systems</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Deployment, MLOps, security, cost</li>
        </ul>
        <div className="line-top mt-7 pt-4 flex items-baseline justify-between">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500">TUITION</span>
          <span className="font-mono text-[14px]">$2,499</span>
        </div>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="2">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">COURSE / 03 · ADVANCED</span>
          <span className="font-mono text-[12px] text-zinc-500">6 WEEKS · HYBRID</span>
        </div>
        <h3 className="display-sm mb-4">AI for Finance</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          AI for risk, trading, and compliance teams. Credit and market risk models with
          explainability, fraud detection, deep-learning forecasting, and the RegTech stack, built
          to regulatory standards like SR 11-7 and CCAR.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Credit risk, market risk, portfolios</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Fraud detection and stress testing</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Forecasting: LSTM, transformers, ensembles</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>KYC/AML, compliance NLP, MLOps</li>
        </ul>
        <div className="line-top mt-7 pt-4 flex items-baseline justify-between">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500">TUITION</span>
          <span className="font-mono text-[14px]">$2,499</span>
        </div>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="3">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">COURSE / 04 · INTERMEDIATE</span>
          <span className="font-mono text-[12px] text-zinc-500">6 WEEKS · ONLINE</span>
        </div>
        <h3 className="display-sm mb-4">AI for Operations</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          AI for supply chain, logistics, and plant teams. Demand forecasting, network and
          inventory optimization, routing, predictive maintenance, and edge deployment, with
          industry-standard tooling like OR-Tools and SimPy.
        </p>
        <ul className="space-y-2 text-[14.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">01</span>Demand forecasting and supply chain</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">02</span>Routing, fleets, warehouse automation</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">03</span>Predictive maintenance and quality</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">04</span>Process optimization and edge MLOps</li>
        </ul>
        <div className="line-top mt-7 pt-4 flex items-baseline justify-between">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500">TUITION</span>
          <span className="font-mono text-[14px]">$2,499</span>
        </div>
      </article>
    </div>
  </div>
</section>

{/* Flagship bootcamps */}
<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Flagship bootcamps · Fall 2026 cohorts</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Twelve weeks. <span className="italic-accent font-serif">Expert depth.</span>
        </h2>
      </div>
      <div className="lg:col-span-4 lg:col-start-9 self-end">
        <p className="lead" data-reveal data-delay="2">
          Hybrid cohorts: in person in Frisco, live on Zoom, recordings kept. Both run on the
          Proxiant Datacenter. Day 1 is a free open day.
        </p>
      </div>
    </div>

    <div className="bento">
      <article className="b-6 card p-10" data-reveal>
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">BOOTCAMP / α · EXPERT</span>
          <span className="font-mono text-[12px] text-zinc-500">STARTS OCT 4, 2026</span>
        </div>
        <h3 className="display-sm mb-4">AI Agents & Advanced Fine-Tuning</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          For engineers already working with LLMs. Reads the research, writes the training loops,
          ships a real capstone: an agentic application with an MCP server, a fine-tuned model,
          and a 50-example eval suite. Sundays plus two evening lab sessions a week.
        </p>
        <ul className="space-y-2 text-[13.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W1–3</span>The agentic loop, enterprise AI, Model Context Protocol</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W4–6</span>Prompt optimization (DSPy, GEPA), LoRA/qLoRA, PPO/DPO/GRPO</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W7–9</span>Multi-agent systems, deep RL, Ray, vLLM, A2A communications</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W10–12</span>Production agent patterns, agentic RAG and training, capstone</li>
        </ul>
        <div className="line-top mt-7 pt-4 flex items-baseline justify-between">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500">PCAIP-AGENTS CERT</span>
          <span className="font-mono text-[14px]">$3,700</span>
        </div>
      </article>
      <article className="b-6 card p-10" data-reveal data-delay="1">
        <div className="flex items-baseline justify-between mb-6">
          <span className="font-mono text-[12px] tracking-[0.14em] text-zinc-500">BOOTCAMP / τ · EXPERT</span>
          <span className="font-mono text-[12px] text-zinc-500">STARTS OCT 3, 2026</span>
        </div>
        <h3 className="display-sm mb-4">LLM & Enterprise RAG</h3>
        <p className="muted text-[15.5px] leading-relaxed mb-7">
          Hackathon-style and coding-centered: teams of 4 to 6 build production retrieval systems
          in dedicated rooms, Saturdays on campus plus two evening lab sessions a week. From
          embedding geometry to a fully evaluated enterprise RAG stack.
        </p>
        <ul className="space-y-2 text-[13.5px]">
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W1–3</span>Language models, embedding geometry, chunking and retrieval</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W4–6</span>Retrieval funnel (ColBERT, rerankers), vision models, prompts</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W7–9</span>GraphRAG, guardrails and grounding, enterprise RAG at P95</li>
          <li className="line-top pt-3"><span className="font-mono text-[11px] text-zinc-500 mr-3">W10–12</span>Agentic RAG, Text2SQL, fine-tuning, evals and the capstone</li>
        </ul>
        <div className="line-top mt-7 pt-4 flex items-baseline justify-between">
          <span className="font-mono text-[11px] tracking-[0.14em] text-zinc-500">PCAIP-RAG CERT</span>
          <span className="font-mono text-[14px]">$3,700</span>
        </div>
      </article>
    </div>

    <p className="muted text-[14px] mt-8" data-reveal>
      Weekly cadence for both: one full theory-and-lab day, two guided evening lab sessions, a
      weekly quiz, paper readings, and team project presentations. Grading runs across quizzes,
      projects, labs, paper presentations, a capstone, and a final certification exam.
    </p>
  </div>
</section>

{/* Certification */}
<section data-theme="paper" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-6" data-reveal>Certification</div>
        <h2 className="display-md" data-reveal data-delay="1">
          PCAIP: a credential <span className="italic-accent font-serif">you can verify.</span>
        </h2>
        <p className="muted text-[15.5px] leading-relaxed mt-6 max-w-md" data-reveal data-delay="2">
          The Proxiant Certified AI Professional exam validates applied AI skill. Passing any
          Academy course with 70 percent or better qualifies you to sit it. Bootcamp graduates
          earn the specialized PCAIP-Agents and PCAIP-RAG credentials.
        </p>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <div className="grid grid-cols-2 gap-x-6">
          <div className="line-top py-6" data-reveal>
            <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-2">FORMAT</div>
            <div className="text-[15px]">100 multiple-choice questions, 3 hours</div>
          </div>
          <div className="line-top py-6" data-reveal data-delay="1">
            <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-2">PASS SCORE</div>
            <div className="text-[15px]">70 percent, valid for 3 years</div>
          </div>
          <div className="line-top py-6" data-reveal data-delay="2">
            <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-2">EXAM FEE</div>
            <div className="text-[15px]">$199, digital badge included</div>
          </div>
          <div className="line-top py-6" data-reveal data-delay="3">
            <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-2">BOOTCAMP EXAMS</div>
            <div className="text-[15px]">60 MCQs + 4 scenario questions, 240 points</div>
          </div>
          <div className="line-top py-6 col-span-2" data-reveal data-delay="4">
            <div className="font-mono text-[11px] tracking-[0.14em] text-zinc-500 mb-2">STUDY MATERIALS INCLUDED</div>
            <div className="text-[15px]">A 16-chapter AI/ML/GenAI textbook and a 232-question interview prep book, both written in-house and kept current.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Outcomes */}
<section data-theme="light" className="section-tight">
  <div className="container-x">
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <div className="line-top py-10 pr-6" data-reveal>
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="6" data-suffix=" wks">0</div>
        <div className="muted text-[14px] mt-2 max-w-[20ch]">From bootcamp start to first production deploy</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="1">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="100" data-suffix="%">0</div>
        <div className="muted text-[14px] mt-2 max-w-[20ch]">Cohort completion rate across programs</div>
      </div>
      <div className="line-top py-10 pr-6" data-reveal data-delay="2">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="51">0</div>
        <div className="muted text-[14px] mt-2 max-w-[24ch]">Guided labs across the two flagship bootcamps</div>
      </div>
      <div className="line-top py-10" data-reveal data-delay="3">
        <div className="counter text-[clamp(56px,7vw,108px)]" data-count="40" data-suffix="+">0</div>
        <div className="muted text-[14px] mt-2 max-w-[20ch]">NVIDIA GPUs in the training datacenter</div>
      </div>
    </div>
  </div>
</section>

{/* Who */}
<section data-theme="light" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 mb-16">
      <div className="lg:col-span-7">
        <div className="eyebrow mb-6" data-reveal>Who this is for</div>
        <h2 className="display-lg" data-reveal data-delay="1">
          Teams about to <span className="italic-accent font-serif">ship something real.</span>
        </h2>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="card p-8" data-reveal>
        <div className="font-mono text-[11px] text-zinc-500 mb-4">01</div>
        <div className="display-xs mb-3">Enterprise engineering teams</div>
        <p className="muted text-[14.5px] leading-relaxed">First or second production AI system, working with regulated data, accountable to a real on-call rotation.</p>
      </div>
      <div className="card p-8" data-reveal data-delay="1">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">02</div>
        <div className="display-xs mb-3">Senior leadership</div>
        <p className="muted text-[14.5px] leading-relaxed">Boards, exec teams, and CIOs/CTOs making nine-figure platform decisions and needing a working mental model.</p>
      </div>
      <div className="card p-8" data-reveal data-delay="2">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">03</div>
        <div className="display-xs mb-3">Specialized functions</div>
        <p className="muted text-[14.5px] leading-relaxed">Risk, compliance, security, product. Teams that need to engage with AI work without becoming engineers.</p>
      </div>
      <div className="card p-8" data-reveal data-delay="3">
        <div className="font-mono text-[11px] text-zinc-500 mb-4">04</div>
        <div className="display-xs mb-3">Individual practitioners</div>
        <p className="muted text-[14.5px] leading-relaxed">Engineers and analysts taking an open-enrollment seat: full course materials, graded projects, and a path to PCAIP.</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}

      <PinScroll
        eyebrow="Cohort arc"
        title="Capstone is a real production deploy."
        theme="light"
        words={[{ text: "Foundations" }, { text: "Retrieval", em: true }, { text: "Agents" }, { text: "Evaluate", em: true }, { text: "Govern" }, { text: "Ship", em: true }]}
      />

<section data-theme="dark" className="section">
  <div className="container-x">
    <div className="grid lg:grid-cols-12 gap-10 items-end">
      <div className="lg:col-span-8">
        <h2 className="display-xl" data-reveal-up-words>Plan a program.</h2>
        <p className="lead mt-9 max-w-2xl" data-reveal data-delay="2">
          Tell us about your team, your stack, and what you want them to be able to do at the end.
          We'll come back with a curriculum and a timeline. Or take a seat in the fall cohorts:
          the RAG bootcamp starts October 3, 2026, and the agents bootcamp starts October 4.
        </p>
        <div className="mt-10 flex flex-wrap gap-3" data-reveal data-delay="3">
          <a href="/contact/" className="btn btn-light magnetic">
            Talk to us
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
