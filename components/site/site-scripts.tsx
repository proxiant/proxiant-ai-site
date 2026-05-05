"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Mounts the same DOM-driven interactions the static site used:
 * scroll reveals, scramble decode, magnetic hover, cursor aurora,
 * starfield twinkles, pin-scroll, counters, mobile menu, nav scroll state,
 * word-by-word reveal split.
 *
 * Re-runs on every route change so client-side navigation reveals work.
 */
export function SiteScripts() {
  const pathname = usePathname();

  // Safety fallback: if for any reason the IntersectionObserver doesn't fire,
  // force-reveal all data-reveal elements after a short delay so the page is
  // never visually empty.
  useEffect(() => {
    const id = window.setTimeout(() => {
      document
        .querySelectorAll("[data-reveal], [data-reveal-up-words], [data-reveal-scale]")
        .forEach((el) => el.classList.add("in"));
    }, 1500);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    const $$ = (sel: string, root: ParentNode = document) =>
      Array.from(root.querySelectorAll(sel)) as HTMLElement[];
    const $ = (sel: string, root: ParentNode = document) =>
      root.querySelector(sel) as HTMLElement | null;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Word-by-word reveal split
    $$("[data-reveal-up-words]").forEach((el) => {
      if (el.dataset.split === "1") return;
      const text = el.textContent?.trim() ?? "";
      el.textContent = "";
      text.split(/(\s+)/).forEach((word) => {
        if (/^\s+$/.test(word)) {
          el.appendChild(document.createTextNode(word));
          return;
        }
        const outer = document.createElement("span");
        const inner = document.createElement("span");
        inner.textContent = word;
        outer.appendChild(inner);
        el.appendChild(outer);
      });
      const inners = el.querySelectorAll("span > span");
      inners.forEach((s, i) => ((s as HTMLElement).style.transitionDelay = `${i * 60}ms`));
      el.dataset.split = "1";
    });

    // Reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObserver.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    $$("[data-reveal], [data-reveal-up-words], [data-reveal-scale]").forEach((el) =>
      revealObserver.observe(el)
    );

    // Nav scroll state
    const nav = $(".nav");
    const updateNav = () => {
      if (!nav) return;
      if (window.scrollY > 8) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    // Mobile menu
    const menuToggle = $(".nav-mobile-toggle");
    const menuLinks = $(".nav-links");
    const onToggle = () => menuLinks?.classList.toggle("open");
    menuToggle?.addEventListener("click", onToggle);

    // Counters
    const counterObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          const target = parseFloat(el.dataset.count || "0");
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          const suffix = el.dataset.suffix || "";
          const prefix = el.dataset.prefix || "";
          const duration = parseInt(el.dataset.duration || "1500", 10);
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            const v = target * eased;
            el.textContent = prefix + v.toFixed(decimals) + suffix;
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = prefix + target.toFixed(decimals) + suffix;
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    $$("[data-count]").forEach((el) => counterObserver.observe(el));

    // Active nav link
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    $$(".nav-link").forEach((a) => {
      const href = (a as HTMLAnchorElement).getAttribute("href")?.replace(/\/$/, "") || "";
      if (href && href === path) a.classList.add("active");
    });

    // Cursor aurora
    let auroraTick = 0;
    if (!reduced && !document.querySelector(".cursor-aurora")) {
      const aurora = document.createElement("div");
      aurora.className = "cursor-aurora";
      aurora.style.setProperty("--cx", "50%");
      aurora.style.setProperty("--cy", "50%");
      document.body.appendChild(aurora);
      let cx = window.innerWidth / 2;
      let cy = window.innerHeight / 2;
      let tx = cx;
      let ty = cy;
      const onMove = (ev: MouseEvent) => {
        tx = ev.clientX;
        ty = ev.clientY;
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      const tickAurora = () => {
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        aurora.style.setProperty("--cx", `${cx}px`);
        aurora.style.setProperty("--cy", `${cy}px`);
        auroraTick = requestAnimationFrame(tickAurora);
      };
      auroraTick = requestAnimationFrame(tickAurora);
    }

    // Magnetic hover
    if (!reduced) {
      $$(".magnetic").forEach((el) => {
        let frame = 0;
        const max = 8;
        const onMM = (ev: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const dx = (ev.clientX - r.left - r.width / 2) / r.width;
          const dy = (ev.clientY - r.top - r.height / 2) / r.height;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            el.style.transform = `translate3d(${dx * max}px, ${dy * max}px, 0)`;
          });
        };
        const onLeave = () => {
          cancelAnimationFrame(frame);
          el.style.transform = "translate3d(0, 0, 0)";
        };
        el.addEventListener("mousemove", onMM as EventListener, { passive: true });
        el.addEventListener("mouseleave", onLeave);
      });
    }

    // Scramble decode
    if (!reduced) {
      const chars = "█▓▒░⏣⌬◇◆◢◣◤◥01XΣΔΞΛ#$%&";
      const scrambleObserver = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const el = e.target as HTMLElement;
            const target = el.dataset.scrambleText || el.textContent?.trim() || "";
            el.dataset.scrambleText = target;
            const duration = parseInt(el.dataset.scrambleDuration || "900", 10);
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const reveal = Math.floor(t * target.length);
              let out = "";
              for (let i = 0; i < target.length; i++) {
                if (i < reveal) out += target[i];
                else if (target[i] === " ") out += " ";
                else out += chars[Math.floor(Math.random() * chars.length)];
              }
              el.textContent = out;
              if (t < 1) requestAnimationFrame(tick);
              else el.textContent = target;
            };
            requestAnimationFrame(tick);
            scrambleObserver.unobserve(el);
          }
        },
        { threshold: 0.4 }
      );
      $$("[data-scramble]").forEach((el) => scrambleObserver.observe(el));
    }

    // Pin scroll — eased horizontal translation with center-spotlight word emphasis
    const pinSections = $$(".pin-section");
    pinSections.forEach((sec) => {
      const track = sec.querySelector(".pin-track") as HTMLElement | null;
      const fill = sec.querySelector(".pin-progress-fill") as HTMLElement | null;
      if (!track) return;
      const words = Array.from(track.querySelectorAll(".pin-word")) as HTMLElement[];
      let raf = 0;
      let target = 0;
      let current = 0;
      let activeWord: HTMLElement | null = null;
      const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
      const compute = () => {
        const r = sec.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = sec.offsetHeight - vh;
        const passed = Math.min(Math.max(-r.top, 0), total);
        target = total > 0 ? easeInOut(passed / total) : 0;
        if (fill) fill.style.width = `${(target * 100).toFixed(2)}%`;
      };
      const tick = () => {
        raf = 0;
        compute();
        // Smooth lerp toward target — eliminates the jerky drag
        current += (target - current) * 0.12;
        const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
        track.style.transform = `translate3d(${-overflow * current}px, 0, 0)`;
        // Spotlight the word closest to the viewport center
        const cx = window.innerWidth / 2;
        let nearest: HTMLElement | null = null;
        let nearestDist = Infinity;
        for (const w of words) {
          const wr = w.getBoundingClientRect();
          const wcx = wr.left + wr.width / 2;
          const d = Math.abs(wcx - cx);
          if (d < nearestDist) { nearestDist = d; nearest = w; }
        }
        if (nearest && nearest !== activeWord) {
          activeWord?.classList.remove("pin-active");
          nearest.classList.add("pin-active");
          activeWord = nearest;
        }
        if (Math.abs(target - current) > 0.0005) {
          raf = requestAnimationFrame(tick);
        }
      };
      const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
      compute();
      // Set initial active word so first paint isn't all-grey
      if (words.length) {
        words[0].classList.add("pin-active");
        activeWord = words[0];
      }
      window.addEventListener("scroll", kick, { passive: true });
      window.addEventListener("resize", () => { compute(); kick(); });
    });

    // Starfield twinkles
    if (!reduced) {
      $$(".starfield").forEach((host) => {
        if (host.dataset.populated === "1") return;
        const n = parseInt(host.dataset.twinkles || "18", 10);
        for (let i = 0; i < n; i++) {
          const t = document.createElement("span");
          t.className = "twinkle";
          t.style.left = Math.random() * 100 + "%";
          t.style.top = Math.random() * 100 + "%";
          t.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
          t.style.animationDuration = (2.5 + Math.random() * 3).toFixed(2) + "s";
          host.appendChild(t);
        }
        host.dataset.populated = "1";
      });
    }

    return () => {
      window.removeEventListener("scroll", updateNav);
      menuToggle?.removeEventListener("click", onToggle);
      cancelAnimationFrame(auroraTick);
    };
  }, [pathname]);

  return null;
}
