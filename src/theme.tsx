import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { asset } from "./assets";

type Theme = "dark" | "light";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

const systemTheme = (): Theme =>
  matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

const getInitial = (): Theme => {
  // an explicit user choice wins; otherwise follow the OS color scheme
  const saved = typeof localStorage !== "undefined" && localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return systemTheme();
};

// Assets that swap with the theme — preload the opposite theme so the first toggle never flashes.
const themedNames = ["sard", "web"];
function preload(theme: Theme) {
  for (const name of themedNames) {
    const src = asset(`${name}-${theme}`);
    if (src) new Image().src = src;
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitial);

  // Keep the html attribute in sync + warm the other theme's images.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    preload(theme === "dark" ? "light" : "dark");
  }, [theme]);

  // Apply image swap (React) and the bg tokens (data-theme) in the SAME frame, so there's no
  // 1-frame mismatch. Wrap in a View Transition to cross-fade the whole page smoothly.
  const applyTheme = (next: Theme) => {
    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      flushSync(() => setTheme(next));
    };
    const startVT = (
      document as Document & { startViewTransition?: (cb: () => void) => void }
    ).startViewTransition?.bind(document);
    if (startVT) startVT(apply);
    else apply();
  };

  // Follow live OS theme changes while the user hasn't made an explicit choice.
  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      if (!localStorage.getItem("theme")) applyTheme(mq.matches ? "light" : "dark");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next); // only an explicit choice is persisted
    applyTheme(next);
  };

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
