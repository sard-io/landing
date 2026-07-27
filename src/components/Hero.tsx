import { content } from "../data";
import { useLang } from "../i18n";
import { asset } from "../assets";
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
        <img className="hero__icon" src={asset("hero-icon")} alt="" aria-hidden />
        {hero.line2b}
      </h1>
      <p className="hero__subtitle">{hero.subtitle}</p>
    </section>
  );
}
