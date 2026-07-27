import { useState } from "react";
import { content } from "../data";
import { useLang } from "../i18n";
import { Chevron } from "./icons";
import "./WhoWeAre.css";

export default function WhoWeAre() {
  const { lang } = useLang();
  const { faqs } = content[lang];
  // Each item toggles independently — any number can be open at once.
  const [open, setOpen] = useState<Set<number>>(
    () => new Set(faqs.map((f, i) => (f.open ? i : -1)).filter((i) => i >= 0)),
  );
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section className="faq">
      <div className="faq__inner">
        {faqs.map((f, i) => {
          const isOpen = open.has(i);
          return (
            <div className={`faq__item${isOpen ? " is-open" : ""}`} key={i}>
              <button className="faq__head" onClick={() => toggle(i)}>
                <span className="faq__q">{f.q}</span>
                <span className="faq__chev">
                  <Chevron open={isOpen} variant="faq" />
                </span>
              </button>
              {f.a && isOpen && <div className="faq__body">{f.a}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
