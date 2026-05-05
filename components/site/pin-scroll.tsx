type Word = { text: string; em?: boolean };

interface PinScrollProps {
  eyebrow?: string;
  meta?: string;
  intro?: string;
  outro?: string;
  words: Word[];
  theme?: "light" | "paper" | "dark";
}

export function PinScroll({
  eyebrow = "The work",
  meta = "HORIZONTAL · MOTION",
  intro = "↳ How we work",
  outro = "⏵ Same operating bar across consulting, labs, training",
  words,
  theme = "paper",
}: PinScrollProps) {
  return (
    <section className="pin-section" data-theme={theme}>
      <div className="pin-stage">
        <div className="pin-eyebrow-row">
          <span className="eyebrow">{eyebrow}</span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-zinc-500" data-scramble>
            {meta}
          </span>
        </div>
        <div className="pin-track">
          <span className="pin-mini">{intro}</span>
          {words.map((w, i) => (
            <span key={i} className="pin-word">
              {w.em ? <em className="pin-em">{w.text}</em> : w.text}
              <span className="pin-dot" />
            </span>
          ))}
          <span className="pin-mini">{outro}</span>
        </div>
        <div className="pin-progress">
          <div className="pin-progress-fill" />
        </div>
      </div>
    </section>
  );
}
