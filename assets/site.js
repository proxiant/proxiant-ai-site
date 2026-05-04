/* Proxiant — site interactions
 * Editorial light theme. Reveals, mobile menu, counters, word reveal, marquee pause.
 */

(() => {
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const $ = (sel, root = document) => root.querySelector(sel);

  // ──────── Word-by-word reveal: split text into spans, then animate
  $$("[data-reveal-up-words]").forEach((el) => {
    const text = el.textContent.trim();
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
  });

  // Stagger inner spans
  $$("[data-reveal-up-words]").forEach((el) => {
    const inners = el.querySelectorAll("span > span");
    inners.forEach((s, i) => {
      s.style.transitionDelay = `${i * 60}ms`;
    });
  });

  // ──────── Generic reveal observer
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
  $$("[data-reveal], [data-reveal-up-words], [data-reveal-scale]").forEach((el) => revealObserver.observe(el));

  // ──────── Nav scroll state
  const nav = $(".nav");
  if (nav) {
    const updateNav = () => {
      if (window.scrollY > 8) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
  }

  // ──────── Mobile menu
  const menuToggle = $(".nav-mobile-toggle");
  const menuLinks = $(".nav-links");
  if (menuToggle && menuLinks) {
    menuToggle.addEventListener("click", () => {
      menuLinks.classList.toggle("open");
    });
  }

  // ──────── Number counters
  const counterObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const suffix = el.dataset.suffix || "";
        const prefix = el.dataset.prefix || "";
        const duration = parseInt(el.dataset.duration || "1500", 10);
        const start = performance.now();
        const tick = (now) => {
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

  // ──────── Active nav link
  const path = location.pathname.split("/").pop() || "index.html";
  $$(".nav-link").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("/").pop();
    if (href && (href === path || (path === "" && href === "index.html"))) {
      a.classList.add("active");
    }
  });

  // ──────── Subtle parallax on .hero-img elements
  const heroImgs = $$(".parallax-y");
  if (heroImgs.length) {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      heroImgs.forEach((el) => {
        const r = el.getBoundingClientRect();
        const off = (y - (lastY + r.top)) * 0.08;
        el.style.transform = `translateY(${off}px)`;
      });
    };
    window.addEventListener("scroll", () => {
      if (!raf) raf = requestAnimationFrame(update);
    }, { passive: true });
  }

  // ──────── Cursor aurora — soft burnt-orange / violet halo following the cursor.
  // Auto-injected on every page; disabled by prefers-reduced-motion.
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced && !document.querySelector(".cursor-aurora")) {
    const aurora = document.createElement("div");
    aurora.className = "cursor-aurora";
    aurora.style.setProperty("--cx", "50%");
    aurora.style.setProperty("--cy", "50%");
    document.body.appendChild(aurora);
    let raf = 0, cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    let tx = cx, ty = cy;
    window.addEventListener(
      "mousemove",
      (ev) => { tx = ev.clientX; ty = ev.clientY; },
      { passive: true }
    );
    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      aurora.style.setProperty("--cx", `${cx}px`);
      aurora.style.setProperty("--cy", `${cy}px`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }

  // ──────── Magnetic hover for .magnetic — cursor-aware translate
  if (!reduced) {
    $$(".magnetic").forEach((el) => {
      let frame = 0;
      const max = 8; // pixels of pull
      el.addEventListener("mousemove", (ev) => {
        const r = el.getBoundingClientRect();
        const dx = (ev.clientX - r.left - r.width / 2) / r.width;
        const dy = (ev.clientY - r.top - r.height / 2) / r.height;
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${dx * max}px, ${dy * max}px, 0)`;
        });
      }, { passive: true });
      el.addEventListener("mouseleave", () => {
        cancelAnimationFrame(frame);
        el.style.transform = "translate3d(0, 0, 0)";
      });
    });
  }

  // ──────── Text scramble on .scramble[data-scramble] — runs on reveal
  if (!reduced) {
    const chars = "█▓▒░⏣⌬◇◆◢◣◤◥01XΣΔΞΛ#$%&";
    const scrambleObserver = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target;
          const target = el.dataset.scrambleText || el.textContent.trim();
          el.dataset.scrambleText = target;
          const duration = parseInt(el.dataset.scrambleDuration || "900", 10);
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const reveal = Math.floor(t * target.length);
            let out = "";
            for (let i = 0; i < target.length; i++) {
              if (i < reveal) {
                out += target[i];
              } else if (target[i] === " ") {
                out += " ";
              } else {
                out += chars[Math.floor(Math.random() * chars.length)];
              }
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

  // ──────── Pin scroll — translate .pin-track horizontally as user scrolls past .pin-section
  $$(".pin-section").forEach((sec) => {
    const stage = sec.querySelector(".pin-stage");
    const track = sec.querySelector(".pin-track");
    const fill = sec.querySelector(".pin-progress-fill");
    if (!stage || !track) return;
    let raf = 0;
    const compute = () => {
      raf = 0;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = sec.offsetHeight - vh;
      const passed = Math.min(Math.max(-r.top, 0), total);
      const t = total > 0 ? passed / total : 0;
      const overflow = Math.max(0, track.scrollWidth - window.innerWidth);
      track.style.transform = `translate3d(${-overflow * t}px, 0, 0)`;
      if (fill) fill.style.width = `${(t * 100).toFixed(2)}%`;
    };
    compute();
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(compute); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", compute);
  });

  // ──────── Inject star-field twinkles into elements that have .starfield class
  if (!reduced) {
    $$(".starfield").forEach((host) => {
      // Add 18 random twinkles
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
    });
  }
})();
