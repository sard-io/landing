import { useState, type CSSProperties } from "react";
import { content } from "../data";
import { useLang } from "../i18n";
import ThemedImg from "./ThemedImg";
import { useTheme } from "../theme";
import { asset } from "../assets";
import { Chevron } from "./icons";
import "./Projects.css";

// Vertical stagger (px) per card on desktop — sard.io 4-card layout: cards 1 & 3 dropped 140px.
const stagger = [140, 0, 140, 0];

export default function Projects() {
  const { theme } = useTheme();
  const { lang } = useLang();
  const { projects, ui } = content[lang];
  // Track each card independently so any number can be open at once.
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section className="projects">
      <img className="projects__web" src={asset(`web-${theme}`)} alt="" aria-hidden loading="lazy" decoding="async" />
      <div className="projects__row">
        {projects.map((p, i) => {
          const isOpen = open.has(i);
          return (
            <article
              className={`card${isOpen ? " is-open" : ""}`}
              key={i}
              style={{ "--stagger": `${stagger[i]}px` } as CSSProperties}
            >
              <div className="card__logo">
                {p.logo ? (
                  <ThemedImg name={p.logo} alt={p.title ?? p.logo} className="card__logo-img" />
                ) : (
                  <h3 className="card__title">{p.title}</h3>
                )}
              </div>
              <p className="card__body">{p.body}</p>
              <button
                className="card__foot"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-label={isOpen ? ui.collapse : ui.expand}
              >
                <Chevron open={isOpen} variant="card" />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
