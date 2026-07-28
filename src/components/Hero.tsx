import { content } from "../data";
import { useLang } from "../i18n";
import { WebIcon } from "./icons";
import "./Hero.css";

export default function Hero() {
  const { lang } = useLang();
  const { hero } = content[lang];
  return (
    <section className="hero">
      <h1 className="hero__title">
        {hero.line1}
        <br />
        {hero.line2a}
        <WebIcon className="hero__icon" />
        {hero.line2b}
      </h1>
      <p className="hero__subtitle">{hero.subtitle}</p>
    </section>
  );
}
