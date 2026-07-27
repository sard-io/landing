import { useTheme } from "../theme";
import { useLang } from "../i18n";
import { content } from "../data";
import ThemedImg from "./ThemedImg";
import { SunIcon, MoonIcon } from "./icons";
import "./Header.css";

export default function Header() {
  const { theme, toggle } = useTheme();
  const { lang, toggle: toggleLang } = useLang();
  const { ui } = content[lang];
  return (
    <header className="header">
      <div className="header__inner">
        <ThemedImg name="sard" alt="SARD" className="header__logo" />
        <div className="header__controls">
          <button
            className="header__lang"
            onClick={toggleLang}
            aria-label={ui.toggleLang}
          >
            {lang === "ru" ? "EN" : "RU"}
          </button>
          <button className="header__toggle" onClick={toggle} aria-label={ui.toggleTheme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className="header__cta">
            <span className="header__cta-full">{ui.contact}</span>
            <span className="header__cta-short">{ui.contactShort}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
