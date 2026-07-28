import { useEffect, useRef, useState } from "react";
import "./Partners.css";
import abcex from "../assets/img/partners/abcex.svg";
import mostbet from "../assets/img/partners/mostbet.svg";
import xbet from "../assets/img/partners/xbet.svg";
import mexc from "../assets/img/partners/mexc.svg";
import win from "../assets/img/partners/win.svg";
import fastpay from "../assets/img/partners/fastpay.svg";
import moneyhub from "../assets/img/partners/moneyhub.svg";
import payplay from "../assets/img/partners/payplay.svg";

// Individual partner logos (original sard.io SVGs) — whole logos, no strip seams.
const ROW1 = [abcex, mostbet, xbet, mexc, win];
// Row 2 has only 3 partners; repeat the set inside the group for marquee density.
const ROW2 = [fastpay, moneyhub, payplay, fastpay, moneyhub, payplay];

function Row({ logos, reverse }: { logos: string[]; reverse?: boolean }) {
  // Two identical groups back-to-back: translateX(-50%) loops seamlessly.
  const group = (
    <>
      {logos.map((src, i) => (
        <img key={i} src={src} alt="" aria-hidden className="marquee__logo" loading="lazy" decoding="async" />
      ))}
    </>
  );
  return (
    <div className={`marquee${reverse ? " marquee--reverse" : ""}`}>
      <div className="marquee__track">
        <div className="marquee__group">{group}</div>
        <div className="marquee__group">{group}</div>
      </div>
    </div>
  );
}

export default function Partners() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  // Only run the marquee animation while the section is on screen (saves GPU/battery).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "150px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={`partners${visible ? " is-visible" : ""}`}>
      <Row logos={ROW1} />
      <Row logos={ROW2} reverse />
    </section>
  );
}
