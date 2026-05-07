type Word = { text: string; em?: boolean };

interface PinScrollProps {
  eyebrow?: string;
  title?: string;
  words: Word[];
  theme?: "light" | "paper" | "dark";
}

/**
 * "How we work" strip — auto-scrolling marquee that mirrors the structure of
 * the homepage "Industries we ship into" section. Slim section padding,
 * larger serif words separated by burnt-orange dots. Pauses on hover.
 *
 * NOTE: name kept as PinScroll for backward compatibility with existing pages.
 * The pin-locked behavior was replaced — this is now a continuously scrolling
 * marquee, sized like the industry strip.
 */
export function PinScroll({
  eyebrow = "How we work",
  words,
  theme = "paper",
}: PinScrollProps) {
  // Duplicate the word list so the marquee scroll loops seamlessly
  const doubled = [...words, ...words];

  return (
    <section data-theme={theme} className="section-tight">
      <div className="container-x">
        <div className="flex items-center gap-12 flex-wrap mb-10">
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <div className="marquee">
          <div className="marquee-track marquee-track--lg">
            {doubled.map((w, i) => (
              <span key={i} className="marquee-item marquee-item--lg flex items-center gap-12">
                {w.em ? <em className="font-serif italic">{w.text}</em> : w.text}
                <span className="marquee-bullet" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
