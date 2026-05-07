type Word = { text: string; em?: boolean };

interface PinScrollProps {
  eyebrow?: string;
  title?: string;
  words: Word[];
  theme?: "light" | "paper" | "dark";
}

/**
 * Seamless rolling-pin section.
 * - inherits the surrounding section bg (no abrupt theme break)
 * - soft fade-in/out at top + bottom of the sticky stage
 * - words spotlight as they pass viewport center, eased lerp on the track
 * - title sits inside the stage rather than as a separate header row
 */
export function PinScroll({
  eyebrow = "How we work",
  title = "One operating bar.",
  words,
  theme = "light",
}: PinScrollProps) {
  return (
    <section className="pin-section pin-seamless" data-theme={theme}>
      <div className="pin-stage">
        {/* In-stage editorial label, top-left */}
        <div className="pin-meta">
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <div className="pin-track">
          {words.map((w, i) => (
            <span key={i} className="pin-word">
              {w.em ? <em className="pin-em">{w.text}</em> : w.text}
              {i < words.length - 1 && <span className="pin-dot" />}
            </span>
          ))}
        </div>
        <div className="pin-progress">
          <div className="pin-progress-fill" />
        </div>
      </div>
    </section>
  );
}
