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

const ROW1 = ["abcex", "mostbet", "xbet", "mexc", "win"];
// Row 2 has only 3 partners; repeat the set inside the group for marquee density.
const ROW2 = ["fastpay", "moneyhub", "payplay", "fastpay", "moneyhub", "payplay"];

function Row({ names, theme, reverse }: { names: string[]; theme: string; reverse?: boolean }) {
  // Two identical groups back-to-back: translateX(-50%) loops seamlessly.
  const group = (
    <>
      {names.map((name, i) => (
        <img key={i} src={logo(name, theme)} alt="" aria-hidden className="marquee__logo" loading="lazy" decoding="async" />
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
      <Row names={ROW1} theme={theme} />
      <Row names={ROW2} theme={theme} reverse />
    </section>
  );
}
