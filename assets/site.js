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
})();
