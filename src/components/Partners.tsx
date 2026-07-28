import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme";
import "./Partners.css";

// Individual partner logos (original sard.io SVGs) — whole logos, no strip seams.
// Light theme uses the originals; dark theme uses palette-normalized variants
// (partners/dark/*.svg, greys remapped to the site's light text tones).
const urls = import.meta.glob("../assets/img/partners/**/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;
const logo = (name: string, theme: string) =>
  urls[`../assets/img/partners/${theme === "dark" ? "dark/" : ""}${name}.svg`] ?? "";

interface Partner {
  file: string;
  name: string; // display name (sard.io titles)
}

const ROW1: Partner[] = [
  { file: "abcex", name: "AbcEx" },
  { file: "mostbet", name: "MostBet" },
  { file: "xbet", name: "1xBet" },
  { file: "mexc", name: "MExc" },
  { file: "win", name: "1Win" },
];
// Row 2 has only 3 partners; repeat the set inside the group for marquee density.
const ROW2: Partner[] = [
  { file: "fastpay", name: "FastPay" },
  { file: "moneyhub", name: "MoneyHub" },
  { file: "payplay", name: "Pay2Play" },
  { file: "fastpay", name: "FastPay" },
  { file: "moneyhub", name: "MoneyHub" },
  { file: "payplay", name: "Pay2Play" },
];

function Row({ partners, theme, reverse }: { partners: Partner[]; theme: string; reverse?: boolean }) {
  // Two identical groups back-to-back: translateX(-50%) loops seamlessly.
  const group = (
    <>
      {partners.map((p, i) => (
        <span key={i} className="marquee__item" data-name={p.name} title={p.name}>
          <img src={logo(p.file, theme)} alt={p.name} className="marquee__logo" loading="lazy" decoding="async" />
        </span>
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
  const { theme } = useTheme();
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
      <Row partners={ROW1} theme={theme} />
      <Row partners={ROW2} theme={theme} reverse />
    </section>
  );
}
