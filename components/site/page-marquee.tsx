interface PageMarqueeProps {
  items: string[];
  eyebrow?: string;
  meta?: string;
  theme?: "light" | "paper" | "dark";
}

/**
 * Slim ticker marquee. Sits under page heroes for visual rhythm.
 * Theme-inheriting; no hard borders so it flows from the hero into content.
 */
export function PageMarquee({ items, eyebrow, meta, theme = "paper" }: PageMarqueeProps) {
  // Duplicate the list so the marquee can scroll seamlessly
  const doubled = [...items, ...items];
  return (
    <section data-theme={theme} className="section-tight">
      <div className="container-x">
        {(eyebrow || meta) && (
          <div className="flex items-center gap-12 flex-wrap mb-10">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {meta && <span className="muted text-[14.5px] hidden md:inline">{meta}</span>}
          </div>
        )}
        <div className="marquee">
          <div className="marquee-track">
            {doubled.map((item, i) => (
              <span key={i} className="marquee-item flex items-center gap-12">
                {item}
                <span className="dot" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
