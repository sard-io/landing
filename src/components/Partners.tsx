import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme";
import { asset } from "../assets";
import "./Partners.css";

function Row({ src, reverse }: { src: string; reverse?: boolean }) {
  return (
    <div className={`marquee${reverse ? " marquee--reverse" : ""}`}>
      <div className="marquee__track">
        <img src={src} alt="" aria-hidden className="marquee__img" loading="lazy" decoding="async" />
        <img src={src} alt="" aria-hidden className="marquee__img" loading="lazy" decoding="async" />
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
      <Row src={asset(`partners-row1-${theme}`)} />
      <Row src={asset(`partners-row2-${theme}`)} reverse />
    </section>
  );
}
